export interface JqsvConfig {
  success?(): void
  refresh?(): void
  fail?(): void
  close?(): void
  onLoad(token: number): Promise<JqsvOnloadResponse>
  onSubmit(
    vaildToken: string,
    requestToken: number,
    timespan: number,
    point: number,
    datelist: number[]
  ): Promise<JqsvOnSubmitReponse>
  onSuccess(data: any): void
  onFail?(): void
}

export interface JqsvOnSubmitReponse {
  msg: string
  code: number
  data: any
}

export interface JqsvOnloadResponse {
  code: number
  data: JqsvData
}

export interface JqsvData {
  imgWidth: number
  imgHeight: number
  normal: string
  small: string
  array: number[]
  locationY: number
  validToken: string
}

export interface JqsvDOM {
  componentWraper: JQuery
  canvasContainer: JQuery
  canvas: JQuery
  sliderContainer: JQuery
  slider: JQuery
  sliderText: JQuery
  mask: JQuery
  text: JQuery
  canvasText: JQuery
  actionBar: JQuery
  closeBtn: JQuery
  refreshBtn: JQuery
  question: JQuery
  crossText: JQuery
}
