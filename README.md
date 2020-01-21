# 滑动验证

canvas滑动验证码 仅仅依赖jquery

![体验地址](`https://www.zdxhyangyan.cn/example/react_redux/#/biz/ValidScroller`)

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
