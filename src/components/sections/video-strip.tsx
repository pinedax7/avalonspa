"use client";

import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  heightClass?: string;
  className?: string;
  poster?: string;
  showBars?: boolean;

  /** --- overlay opcional --- */
  overlay?: boolean;               // activa overlay
  overlayClass?: string;           // ej: "bg-black/40" o un gradient
  vignette?: boolean;              // añade viñeta sutil
  children?: React.ReactNode;      // contenido encima del video
};

export function VideoStrip({
  src = "https://res.cloudinary.com/dzfajfr7g/video/upload/v1761837846/meadows_tafrkg.mp4",
  heightClass = "h-[28vh] md:h-[34vh] lg:h-[38vh]",
  className,
  poster,
  showBars = false,
  overlay = false,
  overlayClass = "bg-black/40",
  vignette = false,
  children,
}: Props) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      {showBars && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-linear-to-r from-[#6b1f5f] to-[#b84c44] z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-linear-to-r from-[#c9ffd6] to-[#62ff8a] z-10" />
        </>
      )}

      <div className={cn("relative w-full", heightClass)}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Overlay opcional */}
        {overlay && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              overlayClass
            )}
          />
        )}

        {/* Viñeta opcional */}
        {vignette && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 65% at 50% 50%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        )}

        {/* Contenido encima del video (opcional) */}
        {children && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
