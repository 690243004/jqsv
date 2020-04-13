/// <reference types="jquery" />
export interface JqsvConfig {
    success?(): void;
    refresh?(): void;
    fail?(): void;
    close?(): void;
    onLoad(token: number): Promise<JqsvOnloadResponse>;
    onSubmit(vaildToken: string, requestToken: number, timespan: number, point: number, datelist: number[]): Promise<JqsvOnSubmitReponse>;
    onSuccess(data: any): void;
    onFail?(): void;
}
export interface JqsvOnSubmitReponse {
    msg: string;
    code: number;
    data: any;
}
export interface JqsvOnloadResponse {
    code: number;
    data: JqsvData;
}
export interface JqsvData {
    img_X: number;
    img_Y: number;
    normal: string;
    small: string;
    array: number[];
    location_Y: number;
    validToken: string;
}
export interface JqsvDOM {
    componentWraper: JQuery;
    canvasContainer: JQuery;
    canvas: JQuery;
    sliderContainer: JQuery;
    slider: JQuery;
    sliderText: JQuery;
    mask: JQuery;
    block: JQuery;
    text: JQuery;
    canvasText: JQuery;
    actionBar: JQuery;
    closeBtn: JQuery;
    refreshBtn: JQuery;
    question: JQuery;
    crossText: JQuery;
}
