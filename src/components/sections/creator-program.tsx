"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LockedScale from "../common/locked-scale";

type Item = {
  title: string;
  img: string;
  container: string;
  offsetY?: number; // negativo = sangra hacia arriba
  offsetX?: number; // negativo = sangra hacia arriba
  scale?: number; // 1 = 100%
};

// Nota: mantengo escalas muy leves para que no rebase el marco
// 1) Ajusta los items (más pequeños los modelos)
const items: Item[] = [
  {
    title: "MARKETPLACE",
    img: "/images/marketplace.png",
    container: "/images/UIContainers/UIContainer_Purple.png",
    offsetY: -50,
    offsetX: -60,
    scale: 0.8, // antes ~1.01
  },
  {
    title: "CRAFTING",
    img: "/images/crafting.png",
    container: "/images/UIContainers/UIContainer_Red.png",
    offsetY: -60,
    scale: 0.8, // antes 1.0
  },
  {
    title: "GATHERING",
    img: "/images/gathering.png",
    container: "/images/UIContainers/UIContainer_Magenta.png",
    offsetY: -30,
    offsetX: -30,
    scale: 0.98, // un poco más contenida
  },
];

export function CreatorProgram({
  className,
  bgSrc = "/images/creator-program-bg.png",
  ctaBase = 230,
  ctaLg = 320,
}: {
  className?: string;
  bgSrc?: string;
  ctaBase?: number;
  ctaLg?: number;
}) {
  return (
    <section
      id="creator"
      className={cn(
        "relative w-full overflow-hidden bg-cover bg-center",
        className
      )}
      style={{ backgroundImage: `url('${bgSrc}')` }}
    >
      <LockedScale designWidth={1351}>
        <div className="relative mx-auto px-5 md:px-9 pt-6 md:pt-12 pb-4">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-[375px_minmax(0,1fr)] md:items-start">
            <div className="md:mx-0 md:mb-0 mb-9 flex flex-col items-center md:items-start text-left md:text-left">
              <div
                style={{ width: `${ctaBase}px`, height: `${ctaBase}px` }}
                className="md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-80 self-center"
              >
                <Image
                  src="/images/CTAButton_JoinOurCreatorProgram.png"
                  alt="Join our Creator Program"
                  width={ctaLg}
                  height={ctaLg}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <p className="mt-4 text-white/85 font-eurostile text-[16px] leading-none">
                Dream. Create. Own. Play. Evolve.
              </p>

              {/* Título (dos líneas como tu captura) */}
              <h2 className="mt-4 text-white font-pirulen tracking-[0.14em] leading-[0.95]">
                <span className="block text-[24px] md:text-[25.6px] lg:text-[30.4px] tracking-[0.02em] leading-10">
                  UNLOCK INFINITE
                </span>
                <span className="block text-[24px] md:text-[32px] lg:text-[38px] tracking-[0.02em] leading-[29px]">
                  POSSIBILITIES
                </span>
              </h2>
            </div>

            <div
              className={cn(
                "grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8",
                "overflow-visible pb-2"
              )}
            >
              {items.map((it) => (
                <CreatorCard key={it.title} {...it} />
              ))}
            </div>
          </div>
        </div>
      </LockedScale>
    </section>
  );
}

/**
 * Card con marco + área de modelo + título.
 * - Marco: proporción fija (aspect-[340/500]) para calzar la textura PNG.
 * - Área del modelo: deja ~64–72px libres abajo para el título, y respeta offsetY.
 */

function CreatorCard({
  title,
  img,
  container,
  offsetY = -4,
  offsetX = -4,
  scale = 0.96,
}: Item) {
  // ratio del container (w/h). Hasta cargar: 1/1 para evitar layout shift grande
  const [ratio, setRatio] = useState<{ w: number; h: number } | null>(null);

  return (
    <div className="place-self-center sm:place-self-auto">
      <div
        className={cn(
          "relative rounded-xl overflow-visible",
          // ancho fijo por breakpoint, la altura sale de aspect-ratio (abajo)
          "w-[99vw] max-w-[340px] sm:w-[308px] md:w-[320px] lg:w-[340px]"
        )}
        // Aplica la proporción real del PNG (fallback: cuadrado mientras carga)
        style={{ aspectRatio: ratio ? `${ratio.w} / ${ratio.h}` : "1 / 1" }}
      >
        {/* UI container (marco + glow) como imagen, sin deformar */}
        <Image
          src={container}
          alt={`${title} frame`}
          fill
          className="object-fill" // ocupamos TODO, pero como el wrapper ya respeta el ratio, no se estira mal
          priority={false}
          onLoadingComplete={(img) => {
            // Lee dimensiones reales del asset
            setRatio({ w: img.naturalWidth, h: img.naturalHeight });
          }}
        />

        {/* Área del modelo: dejamos hueco para el label dentro del marco */}
        <div
          className="absolute left-[18px] right-[18px]"
          style={{
            top: `${offsetY}px`,
            left: `${offsetX}px`,
            bottom: "70px",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain"
              sizes="(min-width:1280px) 21rem, (min-width:640px) 19rem, 18rem"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>

        {/* Label dentro del marco */}
        <div className="absolute left-[70px] bottom-[60px]">
          <span className="inline-block font-pirulen tracking-[0.12em] text-white text-[13px] md:text-[14px]">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
