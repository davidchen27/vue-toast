# vue-toast
> A Vue component, show a toast~
---
## 中文文档
> 插件安装: 
```javascript
import toastRegister from "@/utils/toast" // 这里引入的为toast.js, 因此目录就看你放在哪里了
Vue.use(toastRegister)
```
> Toast的使用: (在项目组件内任意位置)
```javascript
// 第一个参数为提示的文本内容, 第二个参数为消息类型(如不设置, 请设为undefined), 第三个参数为显示持续时间
this.$toast('我是一个提示消息 - 成功!', 'success', 3000)
this.$toast('我是一个提示消息 - 警告!', 'warn', 3000)
this.$toast('我是一个提示消息 - 错误!', 'error', 3000)
this.$toast('我是一个提示消息 - 普通!', 'info', 3000)
```
> 提示消息的相关图标, 需要自行安装(没安装显示为空), 请使用[阿里巴巴图标库](https://www.iconfont.cn)

> 选择好图标下载后, 将压缩包内的iconfont.js文件引入项目即可 (注意: 图标的名称要与使用方法中的第二个参数对应)

### 展示效果:
![展示效果](https://static.mcfunny.cn/gif/toast.gif)
