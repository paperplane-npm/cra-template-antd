import store from 'store2'

function uuid(len: number = 8): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const uuid = []
  const radix = 16

  for (let i = 0; i < len; i++) {
    uuid[i] = chars[0 | (Math.random() * radix)]
  }

  return uuid.join('')
}

export const SK_CLIENT_ID = 'client_id'

/** 获取客户端 ID */
export function ensureClientId() {
  const storagedClientId = store.get(SK_CLIENT_ID)

  if (storagedClientId) {
    return storagedClientId
  }

  const newClientId = uuid()
  store.set(SK_CLIENT_ID, newClientId)

  return newClientId
}
