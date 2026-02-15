import { create, ExtractState } from 'zustand'
import { combine } from 'zustand/middleware'

// zustand 是 React 生态最好的状态管理工具之一
// 文档： https://zustand.docs.pmnd.rs/

export const useUserState = create(
  combine(
    {
      user: null as User | null,
    },

    set => ({
      signIn: (user: User) => void set({ user }),
      signOut: () => void set({ user: null }),
    })
  )
)

// 将数据和方法分开定义，并通过 combine 组合，这样 zustand 创建的状态支持类型推断
// 如果你需要把状态作为一个类型导出来，那么使用 ExtractState 即可
export type UserInfoState = ExtractState<typeof useUserState>
