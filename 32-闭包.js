// 累加器
function add() {
  var a = 0;

  function myAdd() {
    return console.log(++a);
  }
  return myAdd
}
/* let dd = add()
dd()
dd() */
// 检测
function foo(x) {
  var tmp = 3;

  function bar(y) {
    alert(x + y + (++tmp))
  }
  return bar
}
let my = foo(2)
my(3)
my(3)
document.get