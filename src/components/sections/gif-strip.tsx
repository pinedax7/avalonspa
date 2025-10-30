/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";

type GifStripProps = {
  src: string;                      // ruta del GIF
  alt?: string;                     // texto alternativo
  heightClass?: string;             // ej: "h-[50vh] md:h-[60vh]"
  className?: string;
  overlay?: boolean;
  overlayClass?: string;            // ej: "bg-black/25"
  vignette?: boolean;               // viñeta en bordes
  objectPosition?: string;          // ej: "center 40%"
};

export function GifStrip({
  src,
  alt = "Animated scene",
  heightClass = "h-[40vh] md:h-[52vh] lg:h-[60vh]",
  className,
  overlay = false,
  overlayClass = "bg-black/20",
  vignette = false,
  objectPosition = "center",
}: GifStripProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <div className={cn("relative w-full", heightClass)}>
        {/* GIF como <img> para preservar animación */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />

        {overlay && (
          <div className={cn("pointer-events-none absolute inset-0", overlayClass)} />
        )}

        {vignette && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(85% 70% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        )}
      </div>
    </section>
  );
}
