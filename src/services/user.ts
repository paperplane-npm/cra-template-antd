import { create } from 'zustand'

export interface IUserStore {
  userInfo: IUserInfo | null

  signIn(userInfo: IUserInfo): void
  logout(): void
}

export const useUserStore = create<IUserStore>(set => ({
  userInfo: null,

  signIn: userInfo => void set({ userInfo }),
  logout: () => void set({ userInfo: null }),
}))
