let a = new Array()
// 手写一个new到底发生了什么
let a = {}
a.__proto__ = Array.prototype
Array.call(a)
return a