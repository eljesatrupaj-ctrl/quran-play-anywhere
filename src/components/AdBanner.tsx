import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import {
  AdMob,
  BannerAdPosition,
  BannerAdSize,
} from "@capacitor-community/admob";

// 🔑 Google's official TEST IDs (safe to use during development).
// Zëvendësoji me ID-të e tua reale para publikimit në Play Store.
const ADMOB_APP_ID_TEST = "ca-app-pub-3940256099942544~3347511713";
const BANNER_AD_UNIT_ID_TEST = "ca-app-pub-3940256099942544/6300978111";

export const AdBanner = () => {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    const native = Capacitor.isNativePlatform();
    setIsNative(native);
    if (!native) return;

    let mounted = true;

    const initAds = async () => {
      try {
        await AdMob.initialize({
          testingDevices: [],
          initializeForTesting: true, // tregon vetëm reklama testuese
        });

        if (!mounted) return;

        await AdMob.showBanner({
          adId: BANNER_AD_UNIT_ID_TEST,
          adSize: BannerAdSize.ADAPTIVE_BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
          isTesting: true,
        });
      } catch (err) {
        console.error("AdMob init/banner error:", err);
      }
    };

    initAds();

    return () => {
      mounted = false;
      AdMob.removeBanner().catch(() => {});
    };
  }, []);

  // Në native, banneri shfaqet nga vetë AdMob (overlay nativ) — fshi placeholderin.
  if (isNative) {
    // Lëmë një hapësirë të barabartë me lartësinë e banner-it adaptive (~60px).
    return <div className="w-full h-[60px]" aria-hidden="true" />;
  }

  // Në ueb: placeholder vizual.
  return (
    <div
      id="ad-banner-slot"
      className="w-full border-t border-accent/20 bg-card/40 backdrop-blur-sm"
      data-ad-slot="banner-bottom"
    >
      <div className="mx-auto max-w-5xl h-[60px] flex items-center justify-center px-4">
        <div className="w-full h-full rounded-lg border border-dashed border-accent/30 flex items-center justify-center bg-background/30">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            AdMob Test Banner · 320×50 (shfaqet vetëm në Android)
          </span>
        </div>
      </div>
    </div>
  );
};
