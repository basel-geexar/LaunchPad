import { create } from 'zustand';

interface UIState {
  isContactModalOpen: boolean;
  isLoading: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isContactModalOpen: false,
  isLoading: false,
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
</bortAction>