function fn() {
  getName = function () {
    console.log('yifang')
  }
  return this;
}
fn.getName = function () {
  console.log('liudehua')
}
fn.prototype.getName = function () {
  console.log('zhangxueyou')
}
var getName = function () {
  console.log('zhouxingci')
}

function getName() {
  console.log('huangzesi')
}
fn().getName();
fn.getName();
getName();
new fn.getName();
new new fn.getName();