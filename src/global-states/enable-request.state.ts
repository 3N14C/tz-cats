import { create } from 'zustand';

interface IEnableRequestState {
  isEnabled: boolean;
  setEnabled: (value: boolean) => void;
}

export const useEnableRequestState = create<IEnableRequestState>((set) => ({
  isEnabled: false,
  setEnabled: (value) => set({ isEnabled: value }),
}));
