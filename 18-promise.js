/* 
  自定义Promise
*/
(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function myPromise(executor) {

    var that = this //保存this指向promise
    that.status = PENDING // 给promise对象指定status属性，初始值为pending
    that.data = 'undefined' // 给promise对象指定一个用于存储结果数据的属性
    that.callbacks = [] // 回调函数数组 数据结构：[{onRejected(){},onResolved(){}}]

    function resolve(value) {
      if (that.status !== PENDING) return //如果状态不是pending则返回
      that.data = value
      that.status = RESOLVED
      if (that.callbacks.length > 0) { // 如果回调函数数组中有函数则执行数组中的onResolved事件
        setTimeout(() => {
          that.callbacks.forEach(callbackobj => {
            callbackobj.onResolved(value)
          })
        })
      }
    }

    function reject(value) {
      if (that.status !== PENDING) return //如果状态不是pending则返回
      that.data = value
      that.status = REJECTED
      if (that.callbacks.length > 0) { // 如果回调函数数组中有函数则执行数组中的onRejected事件
        setTimeout(() => {
          that.callbacks.forEach(callbackobj => {
            callbackobj.onRejected(value)
          })
        })
      }
    }
    try { // 执行器函数立即执行
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }

  }

  //Promise原型对象 then ,两个回掉函数 成功 onResolved ，失败onRejected
  //返回一个新的Promise对象
  /* 
    p.then(value => {
        console.log('value1', value)
    }, reason => {
        console.log('reason1', reason)
    })
  */
  myPromise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }
    const that = this
    return new myPromise((resolve, reject) => {

      // 调用成功的回调函数 onResolved
      //1.如果抛出异常，return的promise就 会失败，reason就是error
      //2.如果回调函数返回不是promise, return的promise就 会成功，value就是返回的值
      //3.如果回调函数返回是promise, return的promise结 果就是这个promise的结果

      function handle(callBack) { // 因为这次promise和下次没关系，所以可以用handle
        try {
          const result = callBack(that.data)
          if (result instanceof myPromise) {
            //3.如果回调函数返回是promise, return的promise结果就是这个promise的结果
            /*  result.then(
               value => resolve(value), // 当result成功时，让返回的promise也成功
               reason => reject(reason) // 当result失败时，让返回的promise也失败
             ) */
            result.then(value => resolve(value), reason => reject(reason))
          } else {
            resolve(result) // 当result不为promise成功时，直接返回
          }
        } catch (err) {
          //1.如果抛出异常，return的promise就会失败，reason就是error
          reject(err)
          /* throw err */
        }
      }

      //根据状态，判断执行结果
      if (that.status === PENDING) { // 将回调函数保存起来
        that.callbacks.push({
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(value) {
            handle(onRejected)
          },
        })
      } else if (that.status === RESOLVED) {
        setTimeout(() => {
          handle(onResolved)
        })
      } else { // status为拒绝
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })

  }

  /* 
  promise原型对象的catch()
  指定失败的回调函数
  返回一个新的promise
  */
  myPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  /* 
  promise原型对象的resolve()
  返回一个指定value结果成功的promise
  */
  myPromise.resolve = function (value) {
    return new myPromise((resolve, reject) => {
      if (value instanceof myPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  /* 
  promise原型对象的reject()
  返回一个指定reason的失败的promise
  */
  myPromise.reject = function (reason) {
    return new myPromise((resolve, reject) => {
      reject(reason)
    })

  }

  /* 
   // Promise函数对象的 all 方法,接受一个promise类型的数组
    // 返回一个新的Promise对象

  */
  myPromise.race = function (promises) {
    return new myPromise((resolve, reject) => {
      promises.forEach(p => {
        myPromise.resolve(p).then(
          value => {
            resolve(value)
          }, reason => {
            reject(reason)
          })
      })
    })

  }

  /* 
  promise原型对象的reject()
  */
  myPromise.all = function (promises) {
    let arr = new Array(promises.length)
    let num = 0;
    return new myPromise((resolve, reject) => {
      promises.forEach((item, index) => {
        myPromise.resolve(item).then(
          value => {
            num++
            arr[index] = value
            if (num === promises.length) {
              resolve(arr)
            }
          },
          reason => {
            reject(reason)
          }
        )
      })
    })
  }

  //把promise暴露出去
  window.myPromise = myPromise
})(window)