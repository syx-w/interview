// 第一题 下面输出什么
/* class FunClass {
  count = 0;
  fun1 = () => {
    return () => {
      this.count += 1;
      var tempCount = this.count;
      setTimeout(() => {
        if (tempCount === this.count) {
          console.log('good');
        } else {
          console.log('bad', this.count);
        }
      }, 2000);
    }
  }
}
const obj = new FunClass();
const fun1 = obj.fun1();
setTimeout(() => {
  fun1();
}, 1000);
new Promise((resolve) => {
  fun1();
  resolve();
})
fun1()
fun1() */
// 第二题  
/* const A = function () {}
const B = function () {}
const a = new A();
A.prototype = new B()
// 以下说法错误的是()
console.log(a.constructor.prototype.constructor === B);
console.log(a.constructor === A);
console.log(a.constructor.prototype === a.__proto__);
console.log(a.constructor.prototype.__proto__ === B); */
// 第三题
/* const A = function () {
  this.value = 1
}
const B = function () {
  this.value = 2
}
const C = function () {
  this.value = 3
}
const c = new C()
A.prototype = new B()
C.prototype = new A();
console.log(c.__proto__.value, c.__proto__.constructor); */