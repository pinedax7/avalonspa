"use client";

import { cn } from "@/lib/utils";
import LockedScale from "../common/locked-scale";

type Props = {
  text?: string;
  heightClass?: string;
  className?: string;
  showBars?: boolean;
};

export function CtaGradientStrip({
  text = "Discover a realm where every player is a creator. Your journey starts here.",
  heightClass = "h-[72px] md:h-[72px]",
  className,
  showBars = false,
}: Props) {
  return (
    <section
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        backgroundImage: "url('/images/cta-gradient-journey.png')", // ⬅️ fondo fuera del lock
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LockedScale designWidth={1351}>
        {/* Solo bloqueamos la franja (alto) y el contenido */}
        <div className={cn("relative w-full", heightClass)}>
          {/* Líneas decorativas (opcionales) */}
          {showBars && (
            <>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-[linear-gradient(90deg,#b6ffcc_0%,#9cc7ff_100%)]" />
            </>
          )}

          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="font-eurostile text-white/95 text-[16px] md:text-[22px] text-center">
              {text}
            </p>
          </div>
        </div>
      </LockedScale>
    </section>
  );
}
