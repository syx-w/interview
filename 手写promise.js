// promise对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）和rejected（已失败）。
/* function get(url, resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200) {
      resolve(this.response)
    } else {
      reject(this.response)
    }
  }
  xhr.onerror = function () {
    reject(this.status)
  }
}
new Promise((resolve, reject) => {
    //获取数据
    get('https://api.apiopen.top/getJoke?page=1&count=2&type=video', resolve, reject)
  })
  .then(value => {
    console.log('获取数据成功' + value);
  })
  .then(reason => {
    console.log('获取数据失败' + reason);
  })
 */
/* function a(name) {
  console.log('我的名字叫' + name);
} */
export const hehe = 4
export const aaa = 4