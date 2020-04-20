(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/assets/index.scss
var assets = __webpack_require__(1);

// EXTERNAL MODULE: ./src/assets/iconfont/iconfont.css
var iconfont = __webpack_require__(2);

// CONCATENATED MODULE: ./src/config/index.ts
var globalConfig = {
    padding: 20,
    sliderContainerHeight: 55,
    actionBarHeight: 45,
    initialX: 5,
    successColor: '#67C23A',
    failColor: '#F56C6C',
    animateTime: 500
};
/* harmony default export */ var config = (globalConfig);

// CONCATENATED MODULE: ./src/helper/util.ts
function toPx() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length > 1 ? args.reduce(function (pre, next) { return pre + next; }) + 'px' : args[0] + 'px';
}

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(0);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./src/extend/shake.ts

/* harmony default export */ var shake = (function (element, intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
    element.each(function () {
        var jqNode = external_jQuery_default()(element);
        jqNode.css({ position: 'relative' });
        for (var x = 1; x <= intShakes; x++) {
            jqNode
                .animate({ left: intDistance * -1 }, intDuration / intShakes / 4)
                .animate({ left: intDistance }, intDuration / intShakes / 2)
                .animate({ left: 0 }, intDuration / intShakes / 4);
        }
    });
    return element;
});

// CONCATENATED MODULE: ./src/core/index.ts




var core_Jqsv = /** @class */ (function () {
    function Jqsv(options, el) {
        this._options = options;
        this._el = external_jQuery_default()(el);
        this.state = 'loaded';
        this._successAnimationChain = [];
        this._blockMeta = {
            width: 0,
            height: 0,
            imageCache: null
        };
        this._moveState = {
            originX: 0,
            isTouching: false
        };
        this._DOM = {
            componentWraper: external_jQuery_default()('<div>', { class: 'valid-wraper' }).css({
                width: toPx(this._options.data.imgWidth, config.padding),
                height: toPx(this._options.data.imgHeight, config.sliderContainerHeight, config.actionBarHeight, config.padding)
            }),
            blockImage: external_jQuery_default()('<img>', {
                src: this._options.data.small
            }),
            canvasContainer: external_jQuery_default()('<div>', {
                class: 'canvas-container'
            }),
            canvas: external_jQuery_default()('<canvas>', {
                class: 'canvas'
            }),
            overlayCanvas: external_jQuery_default()('<canvas>', {
                class: 'canvas'
            }),
            sliderContainer: external_jQuery_default()('<div>', {
                class: 'sliderContainer'
            }),
            slider: external_jQuery_default()('<div>', {
                class: 'slider'
            }),
            mask: external_jQuery_default()('<div>', {
                class: 'mask'
            }),
            text: external_jQuery_default()('<div>', {
                class: 'text'
            }).text('拖动滑块完成拼图'),
            canvasText: external_jQuery_default()('<div>', {
                class: 'canvas-text'
            }),
            sliderText: external_jQuery_default()('<span>', {
                class: 'iconfont icongengduo'
            }),
            actionBar: external_jQuery_default()('<div>', {
                class: 'action-bar'
            }),
            closeBtn: external_jQuery_default()('<span>', {
                class: 'action-bar-item iconfont iconicon-test1'
            }),
            refreshBtn: external_jQuery_default()('<span>', {
                class: 'action-bar-item iconfont iconicon-test'
            }),
            question: external_jQuery_default()('<span>', {
                class: 'action-bar-item iconfont iconicon-test2'
            }),
            crossText: external_jQuery_default()('<div>', {
                class: 'valid-wraper-cross-text'
            }).append('<index class="iconfont icon-tongguoyanzheng"></index><span>通过验证</span>')
        };
        this._setup();
    }
    Jqsv.prototype._setup = function () {
        this._processCanvas();
        this._fillCanvas();
        this._processeOverlayCanvas();
        this._fillOverlay();
        this._processEvent();
        this._display();
        this._processSuccessAnimationChain();
    };
    Jqsv.prototype._processSuccessAnimationChain = function () {
        var _this = this;
        this._successAnimationChain.push(function (resolve) {
            var _a = _this._DOM, componentWraper = _a.componentWraper, crossText = _a.crossText;
            componentWraper.empty().append(crossText);
            componentWraper.animate({
                width: toPx(250),
                height: toPx(150),
                padding: 0
            }, 500, crossText.fadeIn.bind(crossText, 500, resolve));
        });
        this._successAnimationChain.push(function (resolve) {
            _this._DOM.componentWraper.fadeOut(resolve);
            _this._destory();
        });
    };
    Jqsv.prototype._callAnimationChain = function (chain) {
        var promise;
        chain.forEach(function (animateFn) {
            promise = promise ? promise.then(function () { return new Promise(animateFn); }) : new Promise(animateFn);
        });
        return promise;
    };
    // 初始化CANVAS
    Jqsv.prototype._processCanvas = function () {
        var _a = this._options.data, imgWidth = _a.imgWidth, imgHeight = _a.imgHeight;
        var _b = this._DOM, canvas = _b.canvas, canvasContainer = _b.canvasContainer, sliderContainer = _b.sliderContainer;
        canvas
            .attr({
            width: imgWidth,
            height: imgHeight
        })
            .css({
            width: toPx(imgWidth),
            height: toPx(imgHeight)
        });
        canvasContainer.css({
            width: toPx(imgWidth),
            height: toPx(imgHeight)
        });
        sliderContainer.css({
            width: toPx(imgWidth)
        });
    };
    Jqsv.prototype.updateComponentData = function (data) {
        this._options.data = data;
        this._processCanvas();
        this._fillCanvas();
        this._processeOverlayCanvas();
        this._fillOverlay();
    };
    Jqsv.prototype._fillCanvas = function () {
        var _this = this;
        var image = external_jQuery_default()('<img>', {
            src: this._options.data.normal
        });
        image.on('load', function () {
            var ctx = _this._DOM.canvas.get(0).getContext('2d');
            var randomArray = _this._options.data.array;
            var length = randomArray.length;
            var halfLengh = Math.floor(length / 2);
            // 计算裁剪量 默认上下1张 共20张
            var cutWidth = Math.floor(_this._options.data.imgWidth / halfLengh);
            var cutHeight = Math.floor(_this._options.data.imgHeight / 2);
            // 开始拼接图片
            for (var index = 0; index < length; index++) {
                // 计算横坐标
                var disorderedPicturePositionX = randomArray[index] >= halfLengh ? (randomArray[index] - halfLengh) * cutWidth : randomArray[index] * cutWidth;
                var disorderedPicturePositionY = randomArray[index] >= halfLengh ? cutHeight : 0;
                var canvasPositionX = index >= halfLengh ? (index - halfLengh) * cutWidth : index * cutWidth;
                var canvasPositionY = index >= halfLengh ? cutHeight : 0;
                ctx.drawImage(image.get(0), canvasPositionX, canvasPositionY, cutWidth, cutHeight, disorderedPicturePositionX, disorderedPicturePositionY, cutWidth, cutHeight);
            }
        });
    };
    Jqsv.prototype._fillOverlay = function () {
        var _this = this;
        this._DOM.blockImage.on('load', function (e) {
            _this._blockMeta.height = e.target.height;
            _this._blockMeta.width = e.target.width;
            _this.moveOverlayCanvas(config.initialX);
            _this._DOM.canvasContainer.append(_this._DOM.overlayCanvas);
        });
    };
    Jqsv.prototype.moveOverlayCanvas = function (disorderedPicturePositionX) {
        var ctx = this._DOM.overlayCanvas.get(0).getContext('2d');
        ctx.clearRect(0, 0, this._options.data.imgWidth, this._options.data.imgHeight);
        ctx.drawImage(this._DOM.blockImage.get(0), 0, 0, this._blockMeta.width, this._blockMeta.height, disorderedPicturePositionX, this._options.data.locationY, this._blockMeta.width, this._blockMeta.height);
    };
    Jqsv.prototype._processeOverlayCanvas = function () {
        var _a = this._options.data, imgWidth = _a.imgWidth, imgHeight = _a.imgHeight;
        this._DOM.overlayCanvas
            .attr({
            width: imgWidth,
            height: imgHeight
        })
            .css({
            position: 'absolute',
            left: 0,
            top: 0
        });
    };
    Jqsv.prototype._dragStart = function (e) {
        this._moveState.originX = e.clientX || e.touches[0].clientX;
        this._moveState.isTouching = true;
        this._DOM.text.fadeOut('normal');
        this._DOM.sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o');
    };
    Jqsv.prototype._dragMove = function (e) {
        if (!this._moveState.isTouching)
            return;
        var moveX = (e.clientX || e.touches[0].clientX) - this._moveState.originX;
        // 如果移动距离X小于0? 或者加40 >= w ? 直接退出
        if (moveX < 0 || moveX + 40 >= this._options.data.imgWidth) {
            return false;
        }
        this._DOM.slider.css({ transform: "translateX(" + toPx(moveX) + ")" });
        this.moveOverlayCanvas(moveX + config.initialX);
        this._DOM.sliderContainer.addClass('sliderContainer_active');
        this._DOM.mask.css({ width: moveX + 'px' });
    };
    Jqsv.prototype._dragEnd = function (e) {
        var _this = this;
        if (!this._moveState.isTouching)
            return;
        this._moveState.isTouching = false;
        this._DOM.sliderContainer.removeClass('sliderContainer_active');
        this._DOM.sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o');
        this._options.submit({
            validToken: this._options.data.validToken,
            requestToken: this._options.data.sTime,
            timespan: 1000,
            point: Math.round((e.clientX || e.touches[0].clientX) - this._moveState.originX + config.initialX),
            datelist: []
        }, function (errorMessage) {
            return errorMessage === undefined ? _this._callAnimationChain(_this._successAnimationChain) : Promise.resolve(_this._failValidHandler(errorMessage));
        });
    };
    // 绑定事件
    Jqsv.prototype._processEvent = function () {
        var _this = this;
        var _a = this._DOM, componentWraper = _a.componentWraper, slider = _a.slider;
        this._el.on('selectstart', function () { return false; });
        this._DOM.closeBtn.on('click', function (e) {
            e.stopPropagation();
            componentWraper.fadeOut('normal');
            _this._options.close ? _this._options.close() : void 0;
        });
        this._DOM.refreshBtn.on('click', function (e) {
            e.stopPropagation();
            _this._options.refresh ? _this._options.refresh(_this.updateComponentData.bind(_this)) : void 0;
        });
        var _dragStart = this._dragStart.bind(this);
        var _dragMove = this._dragMove.bind(this);
        var _dragEnd = this._dragEnd.bind(this);
        this._DOM.slider.on('mousedown', _dragStart);
        this._DOM.slider.on('touchstart', _dragStart);
        document.addEventListener('mousemove', _dragMove);
        document.addEventListener('touchmove', _dragMove);
        document.addEventListener('mouseup', _dragEnd);
        document.addEventListener('touchend', _dragEnd);
        this._destory = function () {
            _this._el.empty();
            document.removeEventListener('mousemove', _dragMove);
            document.removeEventListener('touchmove', _dragMove);
            document.removeEventListener('mouseup', _dragEnd);
            document.removeEventListener('touchend', _dragEnd);
            _this.state = 'destory';
        };
    };
    Jqsv.prototype.show = function () {
        this._DOM.componentWraper.fadeIn();
    };
    // 展示组件
    Jqsv.prototype._display = function () {
        var _a = this._DOM, slider = _a.slider, canvasContainer = _a.canvasContainer, sliderContainer = _a.sliderContainer, closeBtn = _a.closeBtn, refreshBtn = _a.refreshBtn, question = _a.question, actionBar = _a.actionBar, componentWraper = _a.componentWraper, canvas = _a.canvas, canvasText = _a.canvasText, text = _a.text, sliderText = _a.sliderText;
        slider.append(sliderText);
        canvasContainer.append(canvas);
        canvasContainer.append(canvasText);
        sliderContainer.append(slider);
        sliderContainer.append(text);
        closeBtn.append("<div class='tooltip'>\u5173\u95ED\u9A8C\u8BC1</div>");
        refreshBtn.append("<div class='tooltip'>\u5237\u65B0</div>");
        question.append("<div class='tooltip'>\u5E2E\u52A9\u53CD\u9988</div>");
        actionBar.append(closeBtn);
        actionBar.append(refreshBtn);
        // this.actionBar.append(this.question)
        componentWraper.append(canvasContainer);
        componentWraper.append(sliderContainer);
        componentWraper.append(actionBar);
        this._el.append(componentWraper);
    };
    /**
     * 在canvas下方弹出文字
     * @param {string} text 显示文字
     * @param {boolean} isSuccess 成功样式 or 失败样式
     * @param {number} animateTime 动画时间(毫秒)
     * @param {number} waitTime 静止时间(毫秒)
     */
    Jqsv.prototype._showCanvasText = function (text, isSuccess, animateTime, waitTime) {
        var _this = this;
        if (animateTime === void 0) { animateTime = 1000; }
        if (waitTime === void 0) { waitTime = 1000; }
        return new Promise(function (resolve) {
            var canvasText = _this._DOM.canvasText;
            var successColor = config.successColor, failColor = config.failColor;
            var heigth = canvasText
                .text(text)
                .css({
                background: isSuccess ? successColor : failColor
            })
                .animate({ bottom: 0 }, animateTime)
                .css('height');
            setTimeout(function () {
                canvasText.animate({ bottom: "-" + heigth }, animateTime, resolve);
            }, waitTime);
        });
    };
    // 验证失败时重置拼图与显示提示信息
    Jqsv.prototype._failValidHandler = function (errorMessage) {
        this._showCanvasText(errorMessage, false);
        shake(this._DOM.componentWraper, 2, 10, 400);
        this._DOM.slider.css({ transform: "translateX(0px)" }); // 重置滚动条
        this.moveOverlayCanvas(config.initialX);
    };
    return Jqsv;
}());
/* harmony default export */ var core = (core_Jqsv);

// CONCATENATED MODULE: ./src/index.ts



/* harmony default export */ var src = __webpack_exports__["default"] = (core);


/***/ })
/******/ ]);
});