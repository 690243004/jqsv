// eslint-disable-next-line no-unused-vars
import { JqsvOption, JqsvDOM, JqsvData } from '../types'
import globalConfig from '../config'
import { toPx } from '../helper/util'
import $ from 'jquery'
import shake from '../extend/shake'

class Jqsv {
  readonly _options: JqsvOption
  readonly _el: JQuery
  readonly _DOM: JqsvDOM
  readonly _blockMeta: { width: number; height: number; imageCache: HTMLElement | null }
  readonly _moveState: {
    originX: number
    isTouching: boolean
  }
  readonly _successAnimationChain: ((resolve: (value?: unknown) => void) => void)[]
  _destory?: () => void
  state: string
  constructor(options: JqsvOption, el: HTMLElement) {
    this._options = options
    this._el = $(el)
    this.state = 'loaded'
    this._successAnimationChain = []
    this._blockMeta = {
      width: 0,
      height: 0,
      imageCache: null
    }
    this._moveState = {
      originX: 0,
      isTouching: false
    }
    this._DOM = {
      componentWraper: $('<div>', { class: 'valid-wraper' }).css({
        width: toPx(this._options.data.imgWidth, globalConfig.padding),
        height: toPx(
          this._options.data.imgHeight,
          globalConfig.sliderContainerHeight,
          globalConfig.actionBarHeight,
          globalConfig.padding
        )
      }),
      blockImage: $('<img>', {
        src: this._options.data.small
      }),
      canvasContainer: $('<div>', {
        class: 'canvas-container'
      }),
      canvas: $('<canvas>', {
        class: 'canvas'
      }),
      overlayCanvas: $('<canvas>', {
        class: 'canvas'
      }),
      sliderContainer: $('<div>', {
        class: 'sliderContainer'
      }),
      slider: $('<div>', {
        class: 'slider'
      }),
      mask: $('<div>', {
        class: 'mask'
      }),
      text: $('<div>', {
        class: 'text'
      }).text('拖动滑块完成拼图'),
      canvasText: $('<div>', {
        class: 'canvas-text'
      }),
      sliderText: $('<span>', {
        class: 'iconfont icongengduo'
      }),
      actionBar: $('<div>', {
        class: 'action-bar'
      }),
      closeBtn: $('<span>', {
        class: 'action-bar-item iconfont iconicon-test1'
      }),
      refreshBtn: $('<span>', {
        class: 'action-bar-item iconfont iconicon-test'
      }),
      question: $('<span>', {
        class: 'action-bar-item iconfont iconicon-test2'
      }),
      crossText: $('<div>', {
        class: 'valid-wraper-cross-text'
      }).append('<index class="iconfont icon-tongguoyanzheng"></index><span>通过验证</span>')
    }
    this._setup()
  }

  _setup() {
    this._processCanvas()
    this._fillCanvas()
    this._processeOverlayCanvas()
    this._fillOverlay()
    this._processEvent()
    this._display()
    this._processSuccessAnimationChain()
  }

  _processSuccessAnimationChain() {
    this._successAnimationChain.push((resolve) => {
      const { componentWraper, crossText } = this._DOM
      componentWraper.empty().append(crossText)
      componentWraper.animate(
        {
          width: toPx(250),
          height: toPx(150),
          padding: 0
        },
        500,
        crossText.fadeIn.bind(crossText, 500, resolve)
      )
    })
    this._successAnimationChain.push((resolve) => {
      this._DOM.componentWraper.fadeOut(resolve)
      this._destory!()
    })
  }

  _callAnimationChain(chain: ((resolve: (value?: unknown) => void) => void)[]): Promise<unknown> {
    let promise: Promise<unknown>
    chain.forEach((animateFn) => {
      promise = promise ? promise.then(() => new Promise(animateFn)) : new Promise(animateFn)
    })
    return promise!
  }

  // 初始化CANVAS
  _processCanvas(): void {
    const { imgWidth, imgHeight } = this._options.data
    const { canvas, canvasContainer, sliderContainer } = this._DOM
    canvas
      .attr({
        width: imgWidth,
        height: imgHeight
      })
      .css({
        width: toPx(imgWidth),
        height: toPx(imgHeight)
      })
    canvasContainer.css({
      width: toPx(imgWidth),
      height: toPx(imgHeight)
    })
    sliderContainer.css({
      width: toPx(imgWidth)
    })
  }

  updateComponentData(data : JqsvData) : void {
    this._options.data = data 
    this._processCanvas()
    this._fillCanvas()
    this._processeOverlayCanvas()
    this._fillOverlay()
  }

  _fillCanvas() {
    const image = $('<img>', {
      src: this._options.data.normal
    })
    image.on('load', () => {
      const ctx = (this._DOM.canvas.get(0) as HTMLCanvasElement).getContext('2d')!
      const randomArray = this._options.data.array
      const length = randomArray.length
      const halfLengh = Math.floor(length / 2)
      // 计算裁剪量 默认上下1张 共20张
      const cutWidth = Math.floor(this._options.data.imgWidth / halfLengh)
      const cutHeight = Math.floor(this._options.data.imgHeight / 2)
      // 开始拼接图片
      for (let index = 0; index < length; index++) {
        // 计算横坐标
        const disorderedPicturePositionX =
          randomArray[index] >= halfLengh ? (randomArray[index] - halfLengh) * cutWidth : randomArray[index] * cutWidth
        const disorderedPicturePositionY = randomArray[index] >= halfLengh ? cutHeight : 0
        const canvasPositionX = index >= halfLengh ? (index - halfLengh) * cutWidth : index * cutWidth
        const canvasPositionY = index >= halfLengh ? cutHeight : 0
        ctx.drawImage(
          image.get(0) as HTMLImageElement,
          canvasPositionX,
          canvasPositionY,
          cutWidth,
          cutHeight,
          disorderedPicturePositionX,
          disorderedPicturePositionY,
          cutWidth,
          cutHeight
        )
      }
    })
  }

  _fillOverlay() {
    this._DOM.blockImage.on('load', (e: any) => {
      this._blockMeta.height = e.target.height
      this._blockMeta.width = e.target.width
      this.moveOverlayCanvas(globalConfig.initialX)
      this._DOM.canvasContainer.append(this._DOM.overlayCanvas)
    })
  }

  moveOverlayCanvas(disorderedPicturePositionX: number) {
    const ctx = (this._DOM.overlayCanvas.get(0) as HTMLCanvasElement).getContext('2d')!
    ctx.clearRect(0, 0, this._options.data.imgWidth, this._options.data.imgHeight)
    ctx.drawImage(
      this._DOM.blockImage.get(0) as HTMLImageElement,
      0,
      0,
      this._blockMeta.width,
      this._blockMeta.height,
      disorderedPicturePositionX,
      this._options.data.locationY,
      this._blockMeta.width,
      this._blockMeta.height
    )
  }

  _processeOverlayCanvas(): void {
    const { imgWidth, imgHeight } = this._options.data
    this._DOM.overlayCanvas
      .attr({
        width: imgWidth,
        height: imgHeight
      })
      .css({
        position: 'absolute',
        left: 0,
        top: 0
      })
  }

  _dragStart(e: any) {
    this._moveState.originX = e.clientX || e.touches[0].clientX
    this._moveState.isTouching = true
    this._DOM.text.fadeOut('normal')
    this._DOM.sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o')
  }

  _dragMove(e: any) {
    if (!this._moveState.isTouching) return
    const moveX = (e.clientX || e.touches[0].clientX) - this._moveState.originX
    // 如果移动距离X小于0? 或者加40 >= w ? 直接退出
    if (moveX < 0 || moveX + 40 >= this._options.data.imgWidth) {
      return false
    }
    this._DOM.slider.css({ transform: `translateX(${toPx(moveX)})` })
    this.moveOverlayCanvas(moveX + globalConfig.initialX)
    this._DOM.sliderContainer.addClass('sliderContainer_active')
    this._DOM.mask.css({ width: moveX + 'px' })
  }

  _dragEnd(e: any) {
    if (!this._moveState.isTouching) return
    this._moveState.isTouching = false
    this._DOM.sliderContainer.removeClass('sliderContainer_active')
    this._DOM.sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o')
    this._options.submit(
      {
        validToken: this._options.data.validToken,
        requestToken: this._options.data.sTime,
        timespan: 1000,
        point: Math.round((e.clientX || e.touches[0].clientX) - this._moveState.originX + globalConfig.initialX),
        datelist: []
      },
      (errorMessage) => {
        return errorMessage === undefined ? this._callAnimationChain(this._successAnimationChain) : Promise.resolve(this._failValidHandler(errorMessage))
      }
    )
  }

  // 绑定事件
  _processEvent(): void {
    const { componentWraper, slider } = this._DOM
    this._el.on('selectstart', () => false)

    this._DOM.closeBtn.on('click', (e: any) => {
      e.stopPropagation()
      componentWraper.fadeOut('normal')
      this._options.close ? this._options.close() : void 0
    })

    this._DOM.refreshBtn.on('click', (e: any) => {
      e.stopPropagation()
      this._options.refresh ? this._options.refresh(this.updateComponentData.bind(this)) : void 0
    })
    const _dragStart = this._dragStart.bind(this)
    const _dragMove = this._dragMove.bind(this)
    const _dragEnd = this._dragEnd.bind(this)

    this._DOM.slider.on('mousedown', _dragStart)
    this._DOM.slider.on('touchstart', _dragStart)
    document.addEventListener('mousemove', _dragMove)
    document.addEventListener('touchmove', _dragMove)
    document.addEventListener('mouseup', _dragEnd)
    document.addEventListener('touchend', _dragEnd)
    this._destory = () => {
      this._el.empty()
      document.removeEventListener('mousemove', _dragMove)
      document.removeEventListener('touchmove', _dragMove)
      document.removeEventListener('mouseup', _dragEnd)
      document.removeEventListener('touchend', _dragEnd)
      this.state = 'destory'
    }
  }

  show(): void {
    this._DOM.componentWraper.fadeIn()
  }

  // 展示组件
  _display(): void {
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
      canvasText,
      text,
      sliderText
    } = this._DOM
    slider.append(sliderText)
    canvasContainer.append(canvas)
    canvasContainer.append(canvasText)
    sliderContainer.append(slider)
    sliderContainer.append(text)
    closeBtn.append(`<div class='tooltip'>关闭验证</div>`)
    refreshBtn.append(`<div class='tooltip'>刷新</div>`)
    question.append(`<div class='tooltip'>帮助反馈</div>`)
    actionBar.append(closeBtn)
    actionBar.append(refreshBtn)
    // this.actionBar.append(this.question)
    componentWraper.append(canvasContainer)
    componentWraper.append(sliderContainer)
    componentWraper.append(actionBar)
    this._el.append(componentWraper)
  }

  /**
   * 在canvas下方弹出文字
   * @param {string} text 显示文字
   * @param {boolean} isSuccess 成功样式 or 失败样式
   * @param {number} animateTime 动画时间(毫秒)
   * @param {number} waitTime 静止时间(毫秒)
   */
  _showCanvasText(text: string, isSuccess: boolean, animateTime = 1000, waitTime = 1000) {
    return new Promise((resolve) => {
      const { canvasText } = this._DOM
      const { successColor, failColor } = globalConfig
      const heigth = canvasText
        .text(text)
        .css({
          background: isSuccess ? successColor : failColor
        })
        .animate({ bottom: 0 }, animateTime)
        .css('height')
      setTimeout(() => {
        canvasText.animate({ bottom: `-${heigth}` }, animateTime, resolve)
      }, waitTime)
    })
  }
  // 验证失败时重置拼图与显示提示信息
  _failValidHandler(errorMessage: string) {
    this._showCanvasText(errorMessage, false)
    shake(this._DOM.componentWraper, 2, 10, 400)
    this._DOM.slider.css({ transform: `translateX(0px)` }) // 重置滚动条
    this.moveOverlayCanvas(globalConfig.initialX)
  }
}

export default Jqsv
