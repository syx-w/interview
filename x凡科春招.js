// 第七题： 在函数内部如何判断当前函数是被执行还是被new了？
function a() {
  if (this instanceof a) {
    console.log('被new');
  } else {
    console.log('被执行');
  }
}
let b = new a()
a()