function quickSort(arr) {
  if (arr.length < 2) return arr
  let leftArr = [],
    rightArr = [],
    curArr = [arr[0]],
    cur = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > cur) {
      rightArr.push(arr[i])
    } else if (arr[i] === cur) {
      curArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), ...curArr, ...quickSort(rightArr)]
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
console.log(quickSort([1, 5, 2, 7, 3, 8, 4]));