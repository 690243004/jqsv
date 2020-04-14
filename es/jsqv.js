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
/* harmony default export */ var src_config = (globalConfig);

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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var core_Jqsv = /** @class */ (function () {
    function Jqsv(config, el) {
        this.config = config;
        this.el = external_jQuery_default()(el);
    }
    // 初始化
    Jqsv.prototype.processData = function () {
        var _this = this;
        var onLoad = this.config.onLoad;
        return new Promise(function (resolve) {
            _this.sTime = Date.now();
            onLoad(_this.sTime).then(function (response) {
                if (response.code === 10000) {
                    _this.data = response.data;
                    resolve();
                }
            });
        });
    };
    Jqsv.prototype.init = function () {
        var _this = this;
        return this.processData().then(function () {
            _this.processDOM();
            _this.processCanvas();
            _this.processeOverlayCanvas();
            _this.processEvent();
            _this.display();
            _this.state = 'loaded';
            return _this;
        });
    };
    // 初始化DOM
    Jqsv.prototype.processDOM = function () {
        var componentWraper = external_jQuery_default()('<div>', { class: 'valid-wraper' }).css({
            width: toPx(this.data.imgWidth, src_config.padding),
            height: toPx(this.data.imgHeight, src_config.sliderContainerHeight, src_config.actionBarHeight, src_config.padding)
        });
        // 创建画布容器
        var canvasContainer = external_jQuery_default()('<div>', {
            class: 'canvas-container'
        });
        // 创建画布
        var canvas = external_jQuery_default()('<canvas>', {
            class: 'canvas'
        });
        // 创建滑块容器
        var sliderContainer = external_jQuery_default()('<div>', {
            class: 'sliderContainer'
        });
        // 创建滑块
        var slider = external_jQuery_default()('<div>', {
            class: 'slider'
        });
        // 创建滑块文字
        var sliderText = external_jQuery_default()('<span>', {
            class: 'iconfont icongengduo'
        });
        // 创建滑块遮罩
        var mask = external_jQuery_default()('<div>', {
            class: 'mask'
        });
        // 创建提示文字(滑动条内部)
        var text = external_jQuery_default()('<div>', {
            class: 'text'
        }).text('拖动滑块完成拼图');
        var canvasText = external_jQuery_default()('<div>', {
            class: 'canvas-text'
        });
        // 创建工作栏
        var actionBar = external_jQuery_default()('<div>', {
            class: 'action-bar'
        });
        // 创建关闭验证按钮
        var closeBtn = external_jQuery_default()('<span>', {
            class: 'action-bar-item iconfont iconicon-test1'
        });
        var refreshBtn = external_jQuery_default()('<span>', {
            class: 'action-bar-item iconfont iconicon-test'
        });
        var question = external_jQuery_default()('<span>', {
            class: 'action-bar-item iconfont iconicon-test2'
        });
        // 创建通过验证文案
        var crossText = external_jQuery_default()('<div>', {
            class: 'valid-wraper-cross-text'
        }).append('<i class="iconfont icon-tongguoyanzheng"></i><span>通过验证</span>');
        this.DOM = {
            componentWraper: componentWraper,
            canvasContainer: canvasContainer,
            canvas: canvas,
            sliderContainer: sliderContainer,
            slider: slider,
            mask: mask,
            text: text,
            canvasText: canvasText,
            sliderText: sliderText,
            actionBar: actionBar,
            closeBtn: closeBtn,
            refreshBtn: refreshBtn,
            question: question,
            crossText: crossText
        };
    };
    // 初始化CANVAS
    Jqsv.prototype.processCanvas = function () {
        var _this = this;
        var _a = this.data, imgWidth = _a.imgWidth, imgHeight = _a.imgHeight;
        var _b = this.DOM, canvas = _b.canvas, canvasContainer = _b.canvasContainer, sliderContainer = _b.sliderContainer;
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
        var image = external_jQuery_default()('<img>', {
            src: this.data.normal
        });
        image.on('load', function () {
            var ctx = canvas.get(0).getContext('2d');
            var arr = _this.data.array;
            var length = arr.length;
            var avg = Math.floor(length / 2);
            // 计算裁剪量 默认上下1张 共20张
            var cutX = Math.floor(imgWidth / avg);
            var cutY = Math.floor(imgHeight / 2);
            // 开始拼接图片
            for (var i = 0; i < length; i++) {
                // 计算横坐标
                var x = arr[i] >= avg ? (arr[i] - avg) * cutX : arr[i] * cutX;
                var y = arr[i] >= avg ? cutY : 0;
                var xx = i >= avg ? (i - avg) * cutX : i * cutX;
                var yy = i >= avg ? cutY : 0;
                ctx.drawImage(image.get(0), xx, yy, cutX, cutY, x, y, cutX, cutY);
            }
        });
    };
    Jqsv.prototype.processeOverlayCanvas = function () {
        var _this = this;
        var _a = this.data, small = _a.small, locationY = _a.locationY, imgWidth = _a.imgWidth, imgHeight = _a.imgHeight;
        var image = external_jQuery_default()('<img>', {
            src: small
        });
        var canvas = external_jQuery_default()('<canvas>', {
            class: 'canvas'
        })
            .attr({
            width: imgWidth,
            height: imgHeight
        })
            .css({
            position: 'absolute',
            left: 0,
            top: 0
        });
        image.on('load', function (e) {
            var ctx = canvas.get(0).getContext('2d');
            var height = e.target.height;
            var width = e.target.width;
            ctx.drawImage(image.get(0), 0, 0, width, height, src_config.initialX, locationY, width, height);
            _this.DOM.canvasContainer.append(canvas);
            _this.moveOverlayCanvas = function (x) {
                ctx.clearRect(0, 0, imgWidth, imgHeight);
                ctx.drawImage(image.get(0), 0, 0, width, height, x, locationY, width, height);
            };
        });
    };
    // 绑定事件
    Jqsv.prototype.processEvent = function () {
        var _this = this;
        var _a = this.DOM, closeBtn = _a.closeBtn, componentWraper = _a.componentWraper, refreshBtn = _a.refreshBtn, slider = _a.slider;
        this.el.on('selectstart', function () { return false; });
        closeBtn.on('click', function (e) {
            e.stopPropagation();
            componentWraper.fadeOut('normal');
            _this.config.close ? _this.config.close() : void 0;
        });
        refreshBtn.on('click', function (e) {
            e.stopPropagation();
            _this.processData().then(_this.processCanvas.bind(_this));
            _this.config.refresh ? _this.config.refresh() : void 0;
        });
        var originX;
        var isTouch = false;
        // originY: number,
        var dragStart = function (e) {
            var _a = _this.DOM, text = _a.text, sliderText = _a.sliderText;
            // 记录鼠标移动元素位置
            originX = e.clientX || e.touches[0].clientX;
            // originY = e.clientY || e.touches[0].clientY
            isTouch = true;
            // 文字渐渐消失
            text.fadeOut('normal');
            // 滑块文字切换样式改变
            sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o');
        };
        var dragMove = function (e) {
            if (!isTouch)
                return;
            var _a = _this.DOM, sliderContainer = _a.sliderContainer, mask = _a.mask, slider = _a.slider;
            // 记录鼠标移动位置
            var eventX = e.clientX || e.touches[0].clientX;
            // const eventY = e.clientY || e.touches[0].clientY
            // 计算移动距离
            var moveX = eventX - originX;
            // const moveY = eventY - originY
            var imgWidth = _this.data.imgWidth;
            // 如果移动距离X小于0? 或者加38 >= w ? 直接退出
            if (moveX < 0 || moveX + 40 >= imgWidth) {
                return false;
            }
            slider.css({ transform: "translateX(" + toPx(moveX) + ")" });
            _this.moveOverlayCanvas(moveX + src_config.initialX);
            sliderContainer.addClass('sliderContainer_active');
            mask.css({ width: moveX + 'px' });
        };
        var dragEnd = function (e) {
            if (!isTouch)
                return;
            isTouch = false;
            var eventX = e.clientX || e.touches[0].clientX;
            var _a = _this.DOM, componentWraper = _a.componentWraper, sliderContainer = _a.sliderContainer, sliderText = _a.sliderText, slider = _a.slider;
            var onSubmit = _this.config.onSubmit;
            sliderContainer.removeClass('sliderContainer_active');
            sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o');
            onSubmit(_this.data.validToken, _this.sTime, 1000, Math.round(eventX - originX + src_config.initialX), [])
                .then(function (_a) {
                var code = _a.code, data = _a.data, msg = _a.msg;
                if (code === 10000) {
                    _this.showCanvasText(msg, true, 200)
                        .then(_this.successAnimation.bind(_this))
                        .then(function () {
                        componentWraper.fadeOut();
                        _this.config.success ? _this.config.success(data) : void 0;
                    });
                }
                else {
                    _this.showCanvasText(msg, false);
                    shake(componentWraper, 2, 10, 400);
                    slider.css({ transform: "translateX(0px)" }); // 重置滚动条
                    _this.moveOverlayCanvas(src_config.initialX);
                    _this.config.fail ? _this.config.fail() : void 0;
                }
            })
                .catch(function () {
                _this.showCanvasText('网络错误', false);
                slider.css({
                    transform: "translateX(" + toPx(src_config.initialX) + ")"
                }); // 重置滚动条
                _this.moveOverlayCanvas(src_config.initialX);
            });
        };
        slider.on('mousedown', dragStart);
        slider.on('touchstart', dragStart);
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('touchmove', dragMove);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchend', dragEnd);
        this.destory = function () {
            _this.el.empty();
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('touchmove', dragMove);
            document.removeEventListener('mouseup', dragEnd);
            document.removeEventListener('touchend', dragEnd);
            _this.state = 'destory';
        };
    };
    Jqsv.prototype.show = function () {
        this.DOM.componentWraper.fadeIn();
    };
    // 展示组件
    Jqsv.prototype.display = function () {
        var _a = this.DOM, slider = _a.slider, canvasContainer = _a.canvasContainer, sliderContainer = _a.sliderContainer, closeBtn = _a.closeBtn, refreshBtn = _a.refreshBtn, question = _a.question, actionBar = _a.actionBar, componentWraper = _a.componentWraper, canvas = _a.canvas, canvasText = _a.canvasText, text = _a.text, sliderText = _a.sliderText;
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
        this.el.append(componentWraper);
    };
    /**
     * 在canvas下方弹出文字
     * @param {string} text 显示文字
     * @param {boolean} isSuccess 成功样式 or 失败样式
     * @param {number} animateTime 动画时间(毫秒)
     * @param {number} waitTime 静止时间(毫秒)
     */
    Jqsv.prototype.showCanvasText = function (text, isSuccess, animateTime, waitTime) {
        var _this = this;
        if (animateTime === void 0) { animateTime = 1000; }
        if (waitTime === void 0) { waitTime = 1000; }
        return new Promise(function (resolve) {
            var canvasText = _this.DOM.canvasText;
            var successColor = src_config.successColor, failColor = src_config.failColor;
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
    // 验证成功时调用的动画事件
    Jqsv.prototype.successAnimation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = _this.DOM, componentWraper = _a.componentWraper, crossText = _a.crossText;
            componentWraper.empty().append(crossText);
            componentWraper.animate({
                width: toPx(250),
                height: toPx(150),
                padding: 0
            }, 500, crossText.fadeIn.bind(crossText, 500, resolve));
        });
    };
    return Jqsv;
}());
/* harmony default export */ var core = (function (opt, el) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new core_Jqsv(opt, el).init()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
});

// CONCATENATED MODULE: ./src/index.ts



/* harmony default export */ var src = __webpack_exports__["default"] = (core);


/***/ })
/******/ ]);
});