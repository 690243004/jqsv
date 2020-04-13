import { JqsvConfig, JqsvData, JqsvDOM } from "../types";
import globalConfig from "../config";
import { toPx } from "../helper/util";
import $ from "jquery";
import shake from "../extend/shake";
class Jqsv {
  readonly config: JqsvConfig;
  readonly el: JQuery;
  sTime?: number;
  data?: JqsvData;
  DOM?: JqsvDOM;
  state?: string;
  constructor(config: JqsvConfig, el: HTMLElement) {
    this.config = config;
    this.el = $(el);
  }
  // 初始化
  processData(): Promise<any> {
    const { onLoad } = this.config;
    return new Promise(resolve => {
      this.sTime = Date.now();
      onLoad(this.sTime).then(response => {
        if (response.code === 10000) {
          this.data = response.data;
          resolve();
        }
      });
    });
  }

  init() {
    return this.processData().then(() => {
      this.processDOM();
      this.processCanvas();
      this.processEvent();
      this.display();
      this.state = "loaded";
      return this;
    });
  }
  // 释放
  destory(): void {}

  // 初始化DOM
  processDOM(): void {
    const componentWraper = $("<div>", { class: "valid-wraper" }).css({
      width: toPx(this.data!.img_X, globalConfig.padding),
      height: toPx(
        this.data!.img_Y,
        globalConfig.sliderContainerHeight,
        globalConfig.actionBarHeight,
        globalConfig.padding
      )
    });
    // 创建画布容器
    const canvasContainer = $("<div>", {
      class: "canvas-container"
    });
    // 创建画布
    const canvas = $("<canvas>", {
      class: "canvas"
    });
    // 创建滑块容器
    const sliderContainer = $("<div>", {
      class: "sliderContainer"
    });
    // 创建滑块
    const slider = $("<div>", {
      class: "slider"
    });
    // 创建滑块文字
    const sliderText = $("<span>", {
      class: "iconfont icongengduo"
    });
    // 创建滑块遮罩
    const mask = $("<div>", {
      class: "mask"
    });
    // 创建提示文字(滑动条内部)
    const text = $("<div>", {
      class: "text"
    }).text("拖动滑块完成拼图");
    const canvasText = $("<div>", {
      class: "canvas-text"
    });
    // 创建工作栏
    const actionBar = $("<div>", {
      class: "action-bar"
    });
    // 创建关闭验证按钮
    const closeBtn = $("<span>", {
      class: "action-bar-item iconfont iconicon-test1"
    });
    const refreshBtn = $("<span>", {
      class: "action-bar-item iconfont iconicon-test"
    });
    const question = $("<span>", {
      class: "action-bar-item iconfont iconicon-test2"
    });
    // 创建裁剪块
    const block = $("<img>", {
      class: "block"
    });
    // 创建通过验证文案
    const crossText = $("<div>", {
      class: "valid-wraper-cross-text"
    }).append(
      '<i class="iconfont icon-tongguoyanzheng"></i><span>通过验证</span>'
    );
    this.DOM = {
      componentWraper,
      canvasContainer,
      canvas,
      sliderContainer,
      slider,
      mask,
      block,
      text,
      canvasText,
      sliderText,
      actionBar,
      closeBtn,
      refreshBtn,
      question,
      crossText
    };
  }
  // 初始化CANVAS
  processCanvas(): void {
    const { img_X, img_Y, small, location_Y } = this.data!;
    const { canvas, canvasContainer, sliderContainer, block } = this.DOM!;
    canvas
      .attr({
        width: img_X,
        height: img_Y
      })
      .css({
        width: toPx(img_X),
        height: toPx(img_Y)
      });
    canvasContainer.css({
      width: toPx(img_X),
      height: toPx(img_Y)
    });
    sliderContainer.css({
      width: toPx(img_X)
    });
    const image = $("<img>", {
      src: this.data!.normal
    });
    image.on("load", () => {
      const ctx = (canvas.get(0) as HTMLCanvasElement).getContext("2d")!;
      const arr = this.data!.array;
      const length = arr.length;
      const avg = Math.floor(length / 2);
      // 计算裁剪量 默认上下1张 共20张
      const cutX = Math.floor(img_X / avg);
      const cutY = Math.floor(img_Y / 2);
      // 开始拼接图片
      for (let i = 0; i < length; i++) {
        let x, y;
        // 计算横坐标
        x = arr[i] >= avg ? (arr[i] - avg) * cutX : arr[i] * cutX;
        y = arr[i] >= avg ? cutY : 0;
        let xx, yy;
        xx = i >= avg ? (i - avg) * cutX : i * cutX;
        yy = i >= avg ? cutY : 0;
        ctx.drawImage(
          image.get(0) as HTMLImageElement,
          xx,
          yy,
          cutX,
          cutY,
          x,
          y,
          cutX,
          cutY
        );
      }
    });
    block
      .attr({
        src: small
      })
      .css({
        transform: `translate(${toPx(globalConfig.initialX)},${toPx(
          location_Y
        )})`
      });
  }
  // 绑定事件
  processEvent(): void {
    const { closeBtn, componentWraper, refreshBtn, slider } = this.DOM!;
    this.el.on("selectstart", () => false);
    closeBtn.on("click", (e : any) => {
      e.stopPropagation()
      componentWraper.fadeOut("normal");
      const close = this.config.close;
      close ? close() : void 0;
    });
    refreshBtn.on("click", (e : any) => {
      e.stopPropagation()
      this.processData().then(this.processCanvas.bind(this));
    });
    let originX: number,
      originY: number,
      isTouch: boolean = false;
    const dragStart = (e: any) => {
      const { text, sliderText } = this.DOM!;
      // 记录鼠标移动元素位置
      originX = e.clientX || e.touches[0].clientX;
      originY = e.clientY || e.touches[0].clientY;
      isTouch = true;
      // 文字渐渐消失
      text.fadeOut("normal");
      // 滑块文字切换样式改变
      sliderText.toggleClass("icongengduo iconmoduanzuoyouzhankai_o");
    };

    const dragMove = (e: any) => {
      if (!isTouch) return;
      const { sliderContainer, mask, block, slider } = this.DOM!;
      // 记录鼠标移动位置
      let eventX = e.clientX || e.touches[0].clientX;
      let eventY = e.clientY || e.touches[0].clientY;
      // 计算移动距离
      const moveX = eventX - originX;
      const moveY = eventY - originY;
      const { img_X, location_Y } = this.data!;
      // 如果移动距离X小于0? 或者加38 >= w ? 直接退出
      if (moveX < 0 || moveX + 40 >= img_X) {
        return false;
      }
      slider.css({ transform: `translateX(${toPx(moveX)})` });
      block.css({
        transform: `translate(${toPx(moveX, globalConfig.initialX)},${toPx(
          location_Y
        )})`
      });
      sliderContainer.addClass("sliderContainer_active");
      mask.css({ width: moveX + "px" });
    };

    const dragEnd = (e: any) => {
      if (!isTouch) return;
      isTouch = false;
      const eventX = e.clientX || e.touches[0].clientX;
      const {
        componentWraper,
        sliderContainer,
        sliderText,
        slider,
        block
      } = this.DOM!;
      const { onSubmit } = this.config;
      sliderContainer.removeClass("sliderContainer_active");
      sliderText.toggleClass("icongengduo iconmoduanzuoyouzhankai_o");
      console.log(Math.round(eventX - originX + globalConfig.initialX));
      onSubmit(
        this.data!.validToken,
        this.sTime!,
        1000,
        Math.round(eventX - originX + globalConfig.initialX),
        []
      )
        .then(({ code, data, msg }) => {
          if (code === 10000) {
            this.showCanvasText(msg, true, 200)
              .then(this.successAnimation.bind(this))
              .then(() => {
                componentWraper.fadeOut();
                this.config.onSuccess ? this.config.onSuccess(data) : void 0;
              });
          } else {
            this.showCanvasText(msg, false);
            shake(componentWraper, 2, 10, 400);
            slider.css({ transform: `translateX(0px)` }); // 重置滚动条
            block.css({
              transform: `translate(${toPx(globalConfig.initialX)},${toPx(
                this.data!.location_Y
              )})`
            }); // 重置滑块
            this.config.onFail ? this.config.onFail() : void 0;
          }
        })
        .catch(() => {
          this.showCanvasText("网络错误", false);
          slider.css({
            transform: `translateX(${toPx(globalConfig.initialX)})`
          }); // 重置滚动条
          block.css({
            transform: `translateX(${toPx(globalConfig.initialX)})`
          }); // 重置滑块
        });
    };
    slider.on("mousedown", dragStart);
    slider.on("touchstart", dragStart);
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("touchmove", dragMove);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);
    this.destory = () => {
      this.el.empty();
      document.removeEventListener("mousemove", dragMove);
      document.removeEventListener("touchmove", dragMove);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchend", dragEnd);
      this.state = "destory";
    };
  }

  show() : void { 
    this.DOM!.componentWraper.fadeIn()
  }
  
  // 展示组件
  display(): void {
    const {
      slider,
      canvasContainer,
      sliderContainer,
      closeBtn,
      refreshBtn,
      question,
      actionBar,
      componentWraper,
      canvas,
      block,
      canvasText,
      text,
      sliderText
    } = this.DOM!;
    slider.append(sliderText);
    canvasContainer.append(canvas);
    canvasContainer.append(block);
    canvasContainer.append(canvasText);
    sliderContainer.append(slider);
    sliderContainer.append(text);
    closeBtn.append(`<div class='tooltip'>关闭验证</div>`);
    refreshBtn.append(`<div class='tooltip'>刷新</div>`);
    question.append(`<div class='tooltip'>帮助反馈</div>`);
    actionBar.append(closeBtn);
    actionBar.append(refreshBtn);
    // this.actionBar.append(this.question)
    componentWraper.append(canvasContainer);
    componentWraper.append(sliderContainer);
    componentWraper.append(actionBar);
    this.el.append(componentWraper);
  }

  /**
   * 在canvas下方弹出文字
   * @param {string} text 显示文字
   * @param {boolean} isSuccess 成功样式 or 失败样式
   * @param {number} animateTime 动画时间(毫秒)
   * @param {number} waitTime 静止时间(毫秒)
   */
  showCanvasText(
    text: string,
    isSuccess: boolean,
    animateTime: number = 1000,
    waitTime: number = 1000
  ) {
    return new Promise(resolve => {
      const { canvasText } = this.DOM!;
      const { successColor, failColor } = globalConfig;
      const heigth = canvasText
        .text(text)
        .css({
          background: isSuccess ? successColor : failColor
        })
        .animate({ bottom: 0 }, animateTime)
        .css("height");
      setTimeout(() => {
        canvasText.animate({ bottom: `-${heigth}` }, animateTime, resolve);
      }, waitTime);
    });
  }
  // 验证成功时调用的动画事件
  successAnimation() {
    return new Promise(resolve => {
      const { componentWraper, crossText } = this.DOM!;
      componentWraper.empty().append(crossText);
      componentWraper.animate(
        {
          width: toPx(250),
          height: toPx(150),
          padding: 0
        },
        500,
        crossText.fadeIn.bind(crossText, 500, resolve)
      );
    });
  }
}

export default async function(opt: JqsvConfig, el: HTMLElement) {
  return await new Jqsv(opt, el).init();
}
