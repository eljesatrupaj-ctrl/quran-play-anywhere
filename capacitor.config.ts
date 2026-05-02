import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6f7ff882168f4b5596a99c29ef134930',
  appName: 'Nur al-Quran',
  webDir: 'dist',
  server: {
    url: 'https://6f7ff882-168f-4b55-96a9-9c29ef134930.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  android: {
    backgroundColor: '#0a1f17',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#0a1f17',
      androidSplashResourceName: 'splash',
    },
    AdMob: {
      appId: 'ca-app-pub-3940256099942544~3347511713', // TEST App ID
      initializeForTesting: true,
    },
  },
};

export default config;
