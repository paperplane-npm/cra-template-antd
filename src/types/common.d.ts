/** 响应体 */
interface ResponseBody {
  success: boolean
  message: string
  code: number
}

/** 成功的响应 */
interface SuccessBody<Data = any> extends ResponseBody {
  success: true
  data: Data
  code: 0
}

/** 业务报错的响应   */
interface ErrorBody<E = void> extends ResponseBody {
  success: false
  data?: E
}
