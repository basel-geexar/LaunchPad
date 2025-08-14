import { create } from 'zustand';

interface NavigationState {
  isMenuOpen: boolean;
  activeSection: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  setActiveSection: (section: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isMenuOpen: false,
  activeSection: 'home',
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  setActiveSection: (section) => set({ activeSection: section }),
}));