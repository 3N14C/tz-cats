import { create } from 'zustand';

interface IEnableRefetchState {
  isRefetchEnabled: boolean;
  setRefetchEnabled: (value: boolean) => void;
}

export const useEnableRefetchState = create<IEnableRefetchState>((set) => ({
  isRefetchEnabled: false,
  setRefetchEnabled: (value) => set({ isRefetchEnabled: value }),
}));
