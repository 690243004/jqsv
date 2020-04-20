/// <reference types="jquery" />
import { JqsvOption, JqsvDOM, JqsvData } from '../types';
declare class Jqsv {
    readonly _options: JqsvOption;
    readonly _el: JQuery;
    readonly _DOM: JqsvDOM;
    readonly _blockMeta: {
        width: number;
        height: number;
        imageCache: HTMLElement | null;
    };
    readonly _moveState: {
        originX: number;
        isTouching: boolean;
    };
    readonly _successAnimationChain: ((resolve: (value?: unknown) => void) => void)[];
    _destory?: () => void;
    state: string;
    constructor(options: JqsvOption, el: HTMLElement);
    _setup(): void;
    _processSuccessAnimationChain(): void;
    _callAnimationChain(chain: ((resolve: (value?: unknown) => void) => void)[]): Promise<unknown>;
    _processCanvas(): void;
    updateComponentData(data: JqsvData): void;
    _fillCanvas(): void;
    _fillOverlay(): void;
    moveOverlayCanvas(disorderedPicturePositionX: number): void;
    _processeOverlayCanvas(): void;
    _dragStart(e: any): void;
    _dragMove(e: any): false | undefined;
    _dragEnd(e: any): void;
    _processEvent(): void;
    show(): void;
    _display(): void;
    /**
     * 在canvas下方弹出文字
     * @param {string} text 显示文字
     * @param {boolean} isSuccess 成功样式 or 失败样式
     * @param {number} animateTime 动画时间(毫秒)
     * @param {number} waitTime 静止时间(毫秒)
     */
    _showCanvasText(text: string, isSuccess: boolean, animateTime?: number, waitTime?: number): Promise<unknown>;
    _failValidHandler(errorMessage: string): void;
}
export default Jqsv;
