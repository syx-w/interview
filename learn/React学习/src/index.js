function bytesLength(str) {
  var count = str.length;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      count++;
      console.log(str.length)
    }
  }
}
var by = bytesLength("wode 名字")