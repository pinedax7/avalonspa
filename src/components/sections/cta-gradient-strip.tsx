"use client";

import { cn } from "@/lib/utils";

type Props = {
  /** Texto del CTA */
  text?: string;
  /** Altura de la franja (Tailwind) */
  heightClass?: string;
  /** Clase extra para el <section> */
  className?: string;
  /** Mostrar líneas decorativas superior/inferior */
  showBars?: boolean;
};

export function CtaGradientStrip({
  text = "Discover a realm where every player is a creator. Your journey starts here.",
  heightClass = "h-[72px] md:h-[72px]",
  className,
  showBars = false,
}: Props) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      {/* Fondo con imagen */}
      <div
        className={cn("relative w-full", heightClass)}
        style={{
          backgroundImage: "url('/images/cta-gradient-journey.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
    </section>
  );
}
