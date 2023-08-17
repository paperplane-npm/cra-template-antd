import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosDefaultConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 60000,
}

const rawClient = axios.create(axiosDefaultConfig)
rawClient.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

export { rawClient }

export interface IAxiosClient extends AxiosInstance {
  request<T = any>(config: AxiosRequestConfig): Promise<T>

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
}

const client: IAxiosClient = axios.create(axiosDefaultConfig)
client.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
client.interceptors.response.use(
  function (response) {
    return response?.data?.data || null
  },
  function (error) {
    return error?.data || {}
  }
)

export { client }
