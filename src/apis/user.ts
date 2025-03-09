import { client } from '@/utils/client'

/** 拉取当前用户信息，仅用作模拟 */
export async function fetchUserInfoApi(): Promise<IUserInfo> {
  return client.get('/user')
}
