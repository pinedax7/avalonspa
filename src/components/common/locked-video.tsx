"use client";

import { CSSProperties, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  designWidth?: number;   // 1351
  designHeight?: number;  // 399.66
  src: string;
  poster?: string;
  className?: string;
  showBars?: boolean;
  overlay?: boolean;
  overlayClass?: string;
  vignette?: boolean;
  children?: React.ReactNode;
};

export function LockedVideoStrip({
  designWidth = 1351,
  designHeight = 399.66,
  src,
  poster,
  className,
  showBars = false,
  overlay = false,
  overlayClass = "bg-black/40",
  vignette = false,
  children,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isFluid, setIsFluid] = useState(true); // full-bleed por default

  const update = () => {
    const el = outerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    // Si el contenedor es más angosto que el diseño → lock (escala hacia abajo)
    if (w < designWidth) {
      setIsFluid(false);
      setScale(Math.max(0.01, w / designWidth));
    } else {
      setIsFluid(true); // arriba del diseño → fluido (100% ancho)
      setScale(1);
    }
  };

  useLayoutEffect(() => {
    update();
    const ro = new ResizeObserver(() => requestAnimationFrame(update));
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designWidth, designHeight]);

  // ====== FLUID (full-bleed) ======
  if (isFluid) {
    return (
      <section ref={outerRef} className={cn("relative w-full overflow-hidden", className)}>
        {showBars && (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-linear-to-r from-[#6b1f5f] to-[#b84c44] z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-linear-to-r from-[#c9ffd6] to-[#62ff8a] z-10" />
          </>
        )}

        {/* Mantiene la proporción del diseño en cualquier ancho */}
        <div className="relative w-full" style={{ aspectRatio: `${designWidth} / ${designHeight}` }}>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
          </video>

          {overlay && <div className={cn("pointer-events-none absolute inset-0", overlayClass)} />}
          {vignette && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 65% at 50% 50%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)",
              }}
            />
          )}
          {children && <div className="absolute inset-0 z-10 flex items-center justify-center">{children}</div>}
        </div>
      </section>
    );
  }

  // ====== LOCKED (escala <= 1) ======
  const frameStyles: CSSProperties = {
    width: designWidth,
    height: designHeight,
    position: "absolute",
    left: "50%",
    transform: `translate(-50%, 0) scale(${scale})`,
    transformOrigin: "top center",
    willChange: "transform",
    zIndex: 10,
  };

  return (
    <section ref={outerRef} className={cn("relative w-full overflow-hidden", className)}>
      {showBars && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-linear-to-r from-[#6b1f5f] to-[#b84c44] z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-linear-to-r from-[#c9ffd6] to-[#62ff8a] z-10" />
        </>
      )}

      <div style={frameStyles}>
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={poster} preload="metadata">
          <source src={src} type="video/mp4" />
        </video>

        {overlay && <div className={cn("pointer-events-none absolute inset-0", overlayClass)} />}
        {vignette && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 65% at 50% 50%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        )}
        {children && <div className="absolute inset-0 z-10 flex items-center justify-center">{children}</div>}
      </div>

      {/* reserva de altura escalada */}
      <div style={{ height: designHeight * scale }} />
    </section>
  );
}
