// promise.all()的应用

let a = new Promise(() => {
  setTimeout(() => {
    return '我是a'
  }, 1000)
})
let b = new Promise(() => {
  setTimeout(() => {
    return '我是b'
  }, 2000)
})
Promise.all([a, b]).then((resolve) => {
  console.log(resolve);
}, (reject) => {
  console.log('我错了');
})