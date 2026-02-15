import { AxiosInstance, AxiosResponse } from 'axios'

import { AxiosRequestConfigExtended } from './client'

export interface AxiosInstancePureDataExtended extends AxiosInstance {
  request<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    config: AxiosRequestConfigExtended<D>
  ): Promise<R>

  get<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  delete<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  head<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  options<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>

  post<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  put<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  patch<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>

  postForm<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  putForm<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  patchForm<T = any, R = AxiosResponse<SuccessBody<T>>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
}

export interface AxiosInstanceExtractDataExtended extends AxiosInstance {
  request<T = any, R = T, D = any>(config: AxiosRequestConfigExtended<D>): Promise<R>

  get<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfigExtended<D>): Promise<R>
  delete<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfigExtended<D>): Promise<R>
  head<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfigExtended<D>): Promise<R>
  options<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfigExtended<D>): Promise<R>

  post<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  put<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  patch<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>

  postForm<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  putForm<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
  patchForm<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfigExtended<D>
  ): Promise<R>
}
