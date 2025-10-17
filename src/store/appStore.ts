import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '@/lib/types';

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;
  searchDates: {
    pickup?: string;
    dropoff?: string;
  };
  setSearchDates: (dates: { pickup?: string; dropoff?: string }) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'ro',
      setLanguage: (lang) => set({ language: lang }),
      searchDates: {},
      setSearchDates: (dates) => set({ searchDates: dates }),
    }),
    {
      name: 'davidan-rentcar-storage',
    }
  )
);
