var func1 = x => x;
var func2 = x => {
  return x
};
var func3 = x => ({
  x
});
console.log(func1(1));
console.log(func2(1));
console.log(func3(1));