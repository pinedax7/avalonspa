"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import LockedScale from "../common/locked-scale";

export function CommunityCreationsSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-10 md:py-10 text-white",
        className
      )}
    >
      <LockedScale designWidth={1351}>
        <div
          className="
          relative mx-auto max-w-[1200px] px-2 md:px-6
          grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)_140px]
          items-center gap-8 md:gap-6
        "
        >
          {/* Izquierda (arriba en mobile): Tower */}
          <SideIcon src="/images/icons/tower.png" alt="Tower icon" />

          {/* Centro: textos */}
          <div className="text-center max-w-[720px] mx-auto">
            <h3 className="font-pirulen font-semibold text-[28.5px] md:text-[28.5px] tracking-[0.01em] leading-[46px] mb-3 md:mb-4">
              COMMUNITY CREATIONS
            </h3>
            <h4 className="font-eurostile text-[24.5px] md:text-[24.5px] font-semibold leading-10 mb-3 md:mb-4">
              Avalon Grows With Its Players
            </h4>
            <p className="font-eurostile text-[18px] md:text-[17.3px] text-white/85 leading-relaxed">
              From massive castles to neon cityscapes, <br /> player-built
              worlds become part of the universe
            </p>
          </div>

          {/* Derecha (abajo en mobile): Dragon */}
          <SideIcon src="/images/icons/dragon.png" alt="Dragon icon" />
        </div>
      </LockedScale>

      <Image
        src="/images/community-gradient-bg.png"
        alt="community background gradient"
        fill
        priority
        className="absolute inset-0 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
}

/** Ícono lateral: más chico en mobile, tamaño exacto en md+ */
/** Ícono lateral con tamaño fijo (mismo en mobile y desktop) */
function SideIcon({
  src,
  alt,
  w = 139.92,
  h = 163.56,
}: {
  src: string;
  alt: string;
  w?: number; // ancho en px
  h?: number; // alto en px
}) {
  return (
    <div className="mx-auto">
      <div className="relative" style={{ width: `${w}px`, height: `${h}px` }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain pointer-events-none select-none"
          sizes={`${w}px`}
          priority
        />
      </div>
    </div>
  );
}
