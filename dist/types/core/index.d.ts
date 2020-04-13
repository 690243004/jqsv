/// <reference types="jquery" />
import { JqsvConfig, JqsvData, JqsvDOM } from "../types";
declare class Jqsv {
    readonly config: JqsvConfig;
    readonly el: JQuery;
    sTime?: number;
    data?: JqsvData;
    DOM?: JqsvDOM;
    state?: string;
    constructor(config: JqsvConfig, el: HTMLElement);
    processData(): Promise<any>;
    init(): Promise<this>;
    destory(): void;
    processDOM(): void;
    processCanvas(): void;
    processEvent(): void;
    show(): void;
    display(): void;
    /**
     * 在canvas下方弹出文字
     * @param {string} text 显示文字
     * @param {boolean} isSuccess 成功样式 or 失败样式
     * @param {number} animateTime 动画时间(毫秒)
     * @param {number} waitTime 静止时间(毫秒)
     */
    showCanvasText(text: string, isSuccess: boolean, animateTime?: number, waitTime?: number): Promise<unknown>;
    successAnimation(): Promise<unknown>;
}
export default function (opt: JqsvConfig, el: HTMLElement): Promise<Jqsv>;
export {};
