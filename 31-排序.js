// 冒泡排序、插入排序、选择排序、快速排序、归并排序、计数排序、基数排序、桶排序
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// 冒泡排序
function bubbleSort(arr) {
  if (arr == null || arr.length <= 0) return []
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// 选择排序  (挑一个最小的放到最前面)
function selectSort(arr) {
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
// 插入排序 （打牌-最大的放后面）
function insertSort(arr) {
  if (arr == null || arr.length == 0) return []
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j < arr.length && arr[j] > arr[j + 1]; j++) {
      swap(arr, j, j + 1)
    }
  }
  return arr
}
// 快速排序
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
  return [...quickSort(leftArr), ...curArrk, ...quickSort(rightArr)]
}
// 归并排 序