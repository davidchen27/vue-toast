import Vue from 'vue'
import Toast from "@/components/Module_Toast"

const ToastConstructor = Vue.extend(Toast)
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
    toastDom.$el.remove()
  }, duration)
}
function toastRegister(){
  const toastWrap = document.createElement('div')
  toastWrap.id = 'toast'
  toastWrap.style = "position: fixed;top: 60px;left: 50%;z-index: 998;transform: translateX(-50%);"
  document.body.appendChild(toastWrap)
  Vue.prototype.$toast = showToast
}
export default toastRegister