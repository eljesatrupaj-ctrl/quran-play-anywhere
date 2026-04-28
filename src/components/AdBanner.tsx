// Banner reklamash — placeholder për AdMob/AdSense.
// Në ueb tregohet një banner placeholder.
// Në Android (Capacitor) këtu mund të integrohet @capacitor-community/admob.
export const AdBanner = () => {
  return (
    <div
      id="ad-banner-slot"
      className="w-full border-t border-accent/20 bg-card/40 backdrop-blur-sm"
      data-ad-slot="banner-bottom"
    >
      <div className="mx-auto max-w-5xl h-[60px] flex items-center justify-center px-4">
        <div className="w-full h-full rounded-lg border border-dashed border-accent/30 flex items-center justify-center bg-background/30">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Hapësirë për Reklamë · 320×50
          </span>
        </div>
      </div>
    </div>
  );
};
