import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ── 【保存のチャンク】 ──────────────────────────────────────────
// 仕組み：persistで囲むことで、中身が自動的にlocalStorageに書き写される
export const useUserStore = create(
  persist(
    (set) => ({
     username: '', rank: 'E', exp: 0,

      setUsername: (name) => set({ username: name }),
      addExp: (points) => set((state) => ({ exp: state.exp + points })),
      
      reset: () => set({ username: '', rank: 'E', exp: 0 }),
    }),
    {name: 'gouroku-user-storage'}
  )
);