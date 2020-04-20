/// <reference types="jquery" />
export interface JqsvOption {
    data: JqsvData;
    refresh(callback: (data: JqsvData) => void): void;
    close?(): void;
    submit(data: SubmitData, callback: (errorMessage: string | undefined) => void): void;
}
export interface SubmitData {
    validToken: string;
    requestToken: number;
    timespan: number;
    point: number;
    datelist: number[];
}
export interface JqsvOnloadResponse {
    code: number;
    data: JqsvData;
}
export interface JqsvData {
    imgWidth: number;
    imgHeight: number;
    normal: string;
    small: string;
    array: number[];
    locationY: number;
    validToken: string;
    sTime: number;
}
export interface JqsvDOM {
    componentWraper: JQuery;
    canvasContainer: JQuery;
    canvas: JQuery;
    overlayCanvas: JQuery;
    sliderContainer: JQuery;
    slider: JQuery;
    sliderText: JQuery;
    mask: JQuery;
    text: JQuery;
    canvasText: JQuery;
    actionBar: JQuery;
    closeBtn: JQuery;
    refreshBtn: JQuery;
    question: JQuery;
    crossText: JQuery;
    blockImage: JQuery;
}
