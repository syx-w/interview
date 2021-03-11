Promise.all = function (promises) {
    let arr = new Array(promises.length)
    let num = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
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
Promise.race = function (promises) {
        return new Promise((resolve, reject) => 
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                value => {
                resolve(value)
            }, reason => {
                reject(reason)
            } )  
    }))
}