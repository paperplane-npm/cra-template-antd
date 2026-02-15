import { message } from 'antd'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { AxiosInstanceExtractDataExtended, AxiosInstancePureDataExtended } from './client-types'

// axios 自定义客户端
// 文档： https://axios-http.com/zh/

/** 本项目在 axios 请求配置扩展的额外字段 */
export interface AxiosRequestConfigExtended<D = any> extends AxiosRequestConfig<D> {
  /** 设为 true 可以禁用全局错误响应提示，默认 false */
  quiet?: boolean
}

/** 请求的全局默认配置 */
const requestDefaultConfig: AxiosRequestConfigExtended = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 60000,
  quiet: false,
}

function createAxiosPureDataClient() {
  const client = axios.create(requestDefaultConfig)
  client.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

  client.interceptors.response.use(
    // 响应拦截器，处理错误
    function handleResponseError(response: AxiosResponse) {
      const config = response.config as AxiosRequestConfigExtended
      const reponseBody: ResponseBody = response.data

      // 如果响应的 body 不为对象，此处不认为是错误，直接返回
      if (typeof reponseBody !== 'object') {
        return Promise.resolve(response)
      }

      // 处理后端返回的业务报错，让请求失败
      if (reponseBody.success === false) {
        // 配置了 quiet 的请求不会触发全局请求报错提示
        if (!config.quiet) {
          globalErrorHandle(response)
        }

        return Promise.reject(reponseBody)
      }

      return response
    },

    // 处理原生请求错误，注意这不是后端返回的业务报错
    // 例如：网络错误、跨域错误、非 200 结果等
    function handleError(errorResponse: any) {
      // 配置了 quiet 的请求不会触发全局请求报错提示
      if (!errorResponse.config?.quiet) {
        globalErrorHandle(errorResponse)
      }

      return Promise.reject({
        success: false,
        data: errorResponse?.response?.data,
        message: errorResponse?.message,
        code: errorResponse?.response?.status || -1,
      })
    }
  )

  /** 全局错误处理 */
  function globalErrorHandle(error?: AxiosResponse<ErrorBody<any>> | AxiosError) {
    // 这里是右上角弹出错误提示
    if (typeof (error as AxiosResponse<ErrorBody>)?.data?.message === 'string') {
      message.error((error as AxiosResponse<ErrorBody>)?.data?.message)
    } else if (typeof (error as AxiosError)?.message === 'string') {
      message.error((error as AxiosError)?.message)
    }
  }

  return client as AxiosInstancePureDataExtended
}

/** 未对相应数据拆包的 axios 客户端 */
export const pureClient = createAxiosPureDataClient()

function createAxiosExtractDataClient() {
  const client = createAxiosPureDataClient()
  client.interceptors.response.use(
    // 响应拦截器，对响应进行 .data.data 数据拆包
    function extractData(response: AxiosResponse) {
      console.log(response)

      return response?.data?.data
    }
  )

  return client as AxiosInstanceExtractDataExtended
}

/** 默认封装的 axios 客户端 */
export const client = createAxiosExtractDataClient()
