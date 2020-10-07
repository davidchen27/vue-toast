import Vue from 'vue'
import Toast from "@/components/Module_Toast"

const ToastConstructor = Vue.extend(Toast)
// 判断是否为IE
function isIE() {
  return !!window.ActiveXobject || "ActiveXObject" in window;
}
function isIE11(){
  return (/Trident\/7\./).test(navigator.userAgent);
}

function showToast(text, type = 'info', duration = 2000){
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data(){
      return {
        text: text,
        type: type ? type : 'info'
      }
    }
  })
  document.getElementById('toast').appendChild(toastDom.$el)
  setTimeout(()=>{
    if (isIE() || isIE11()) {
      toastDom.$el.removeNode(true);
    } else {
      toastDom.$el.remove()
    }
  }, duration)
}
function toastRegister(){
  const toastWrap = document.createElement('div')
  const toastBoxStyle = document.createElement('style')
  toastBoxStyle.innerText = "#toast{position: fixed;top: 60px;left: 50%;z-index: 998;transform: translateX(-50%);}"
  document.body.appendChild(toastBoxStyle)
  toastWrap.id = 'toast'
  document.body.appendChild(toastWrap)
  Vue.prototype.$toast = showToast
}
export default toastRegister