import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MetaConfig {
  // Site Information
  siteName: string;
  defaultImage: string;
  faviconPath: string;
  
  // Social Media
  facebookPageUrl: string;
  twitterHandle: string;
  socialProfileUrl: string;
  
  // Search Engine Verification
  googleVerification: string;
  bingVerification: string;
  pinterestVerification: string;
  yandexVerification: string;
}

interface MetaConfigStore {
  config: MetaConfig;
  updateConfig: (updates: Partial<MetaConfig>) => void;
  resetConfig: () => void;
}

const defaultConfig: MetaConfig = {
  siteName: 'Cart Battery Nation',
  defaultImage: '/cbn-logo.png',
  faviconPath: '/favicon.ico',
  facebookPageUrl: '',
  twitterHandle: '@CartBatteryNation',
  socialProfileUrl: '',
  googleVerification: '',
  bingVerification: '',
  pinterestVerification: '',
  yandexVerification: '',
};

export const useMetaConfig = create<MetaConfigStore>()(
  persist(
    (set) => ({
      config: defaultConfig,
      updateConfig: (updates) =>
        set((state) => ({
          config: { ...state.config, ...updates },
        })),
      resetConfig: () => set({ config: defaultConfig }),
    }),
    {
      name: 'meta-config-storage',
    }
  )
);
