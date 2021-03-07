// 马兰专属：。。。。
let handler = {
  get: function (target, key, obj) {
    console.log(target);
    return ('malan的get：' + target[key]);
  },
  set: function (target, property, value, receiver) {
    // target[property] = value;
    console.log('property set: ' + property + ' = ' + value);
    return true;
  },
  deleteProperty: function (target, key) {

  }
}

var p = new Proxy({
  'sex': 'girl'
}, handler) // 第一个参数是，Proxy 会对 第一个参数 对象进行包装  第二个：自定义行);
console.log(p.sex); // 当console.log p 的时候触发 get函数，  不知道啊，所以我想看看
p.pigu = 'pp'

/* var p = new Proxy({}, {
  set: function (target, prop, value, receiver) {
    target[prop] = value;
    console.log('property set: ' + prop + ' = ' + value);
    return true;
  }
})

console.log('a' in p); // false

p.a = 10; // "property set: a = 10"   
console.log('a' in p); // true
console.log(p.a); // 10 */