function insertsort(arr) {
  if (arr == null || arr.length == 0) return []
  for (let i = 1; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (i !== min) {
      swap(arr, i, min)
    }
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
console.log(insertsort([1, 5, 2, 7, 3, 8, 4]));