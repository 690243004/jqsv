# 滑动验证

canvas滑动验证码 仅仅依赖jquery

[体验地址](https://www.zdxhyangyan.cn/example/react_redux/#/biz/ValidScroller)

> 你可以在网址查看需要 接口返回的相关数据格式 

# 使用方法

```js
import SliderVertify from 'jqsv'
const options = {
  dataUrl: 'https://www.zdxhyangyan.cn/offset/api/getValid', // 获取验证图片url
  submitUrl: 'https://www.zdxhyangyan.cn/offset/api/checkX', // 提交验证url
  onSuccess: function() {
    // 成功回调
  },
  onFail: function() {
    // 失败回调
  },
  onRefresh: function() {
    // 刷新回调
  }
}
SliderVertify(options, document.getElementById('el'))
```


# 使用效果

![](./img01.png)


# 实现思路

![](./img02.png)

# 打包心得

## 了解常见的打包模式
- commonjs : node环境的commonjs规范，commonjs仅仅定义了exports，而module.export 是 nodejs对commonjs的实现。commonjs2就是满足规范的同时进一步扩展
- amd : amd规范，适合requirejs
- this  : 通过this访问
- window : 通过window访问，适合在浏览器中
- UMD : 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量
- jsonp ： 这是一种比较特殊的模式，适用于有extrnals依赖的时候(splitChunks)。将把入口起点的返回值，包裹到一个 jsonp 包装容器中

而对于webpack，你可以在target处设置不同的模式 : 
- node commonjs模式
- web 浏览器模式
- ...

## 构建多个目标

我在重构axios的时候，发现他们是构建两份js文件，一份 用于es模块，一份用于 commonjs模块。

查看webpack文档发现，可以这样构建多个目标

作为导出一个配置对象/配置函数的替代，你可能需要导出多个配置对象（从 webpack 3.1.0 开始支持导出多个函数）。当运行 webpack 时，所有的配置对象都会构建。例如，导出多个配置对象，对于针对多个构建目标（例如 AMD 和 CommonJS）打包一个 library 非常有用。

```js
module.exports = [{
  output: {
    filename: './dist-amd.js',
    libraryTarget: 'amd'
  },
  entry: './app.js',
  mode: 'production',
}, {
  output: {
    filename: './dist-commonjs.js',
    libraryTarget: 'commonjs'
  },
  entry: './app.js',
  mode: 'production',
}]
```

