"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { VideoStrip } from "./video-strip";
import LockedScale from "../common/locked-scale";

/* ============================================================
   Sección completa (incluye: agentes + avatar strip + callout)
   ============================================================ */
export function AgentsAndInteropSection({
  className,
  bgSrc = "/images/gray-bg.png",
}: {
  className?: string;
  /** Puedes cambiar el degradado si lo necesitas */
  bgSrc?: string;
}) {
  return (
    <section className={cn("relative w-full", className)}>
      <div
        className={cn("w-full py-14 md:py-12")}
        style={{
          backgroundImage: `url('${bgSrc}')`,
          backgroundSize: "cover",
          backgroundPosition: "top top",
        }}
      >
        <LockedScale designWidth={1351}>
          <div className="mx-auto w-full max-w-[1200px] px-6 text-center text-white">
            {/* Row de iconos */}
            <div className="mx-auto mb-9 flex max-w-[680px] items-center justify-center gap-6 md:gap-8">
              <IconTile iconSrc="/images/icons/icon-1.png" />
              <IconTile iconSrc="/images/icons/icon-2.png" />
              <IconTile iconSrc="/images/icons/icon-3.png" />
            </div>

            {/* Bloque 1 */}
            <Block
              title="PLAY WITH REAL LIFELIKE NPCS"
              text="Converse, create, battle, & group with NPCs who adapt, remember, & react"
            />
          </div>
        </LockedScale>
      </div>

      {/* ---------- Tira con la imagen del avatar (ojos) ---------- */}
      <AvatarStrip
        src="/images/avatar.jpg"
        className="bg-[#3f3f3f]" // fondo de seguridad detrás del recorte
        heightClass="h-[160px] md:h-[390px] lg:h-[390px]"
        objectPosition="50% 50%" // mueve la ventana para centrar los ojos
        vignette
      />

      {/* ---------- Callout: CRAFT A UNIQUE AVATAR ---------- */}
      <CraftUniqueAvatarCallout
        text="CRAFT A UNIQUE AVATAR"
        className="py-8 md:py-7 bg-[#3f3f3f]" // mismo tono que la tira inferior
      />

      <VideoStrip
        src="/video/uri_ifs___V_Rjrw7dqyj1J81AmxmtnPwaQD698bfvLQnRdvxra8Tw4.mp4"
        heightClass="h-[26vh] md:h-[53vh] lg:h-[53vh]"
        overlay
        overlayClass="bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.35)_100%)]"
        vignette
      />
    </section>
  );
}

/* ======================= Subcomponentes ======================= */

function IconTile({ iconSrc }: { iconSrc: string }) {
  return (
    <div className="relative h-[84px] w-24 md:h-[92px] md:w-[104px] shrink-0">
      {/* Marco blanco */}
      <Image
        src="/images/UIContainers/UIContainer_White.png"
        alt=""
        fill
        className="object-contain select-none pointer-events-none"
        priority
        sizes="104px"
      />
      {/* Ícono centrado dentro del marco */}
      <div className="absolute inset-0 flex items-center justify-center p-3">
        <Image
          src={iconSrc}
          alt="feature icon"
          width={64}
          height={64}
          className="max-h-full max-w-full object-contain select-none pointer-events-none"
          sizes="64px"
        />
      </div>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <h3 className="font-pirulen font-bold tracking-[0.01em]  text-[22px] md:text-[27px] leading-[54px] md:leading-none">
        {title}
      </h3>
      <p className="mx-auto font-eurostile text-[15px] md:text-[17.5px] leading-relaxed text-white/90">
        {text}
      </p>
    </div>
  );
}

/* --- tira de avatar (recorte tipo banda) --- */
function AvatarStrip({
  src,
  className,
  heightClass = "h-[190px]",
  objectPosition = "center",
  vignette = false,
}: {
  src: string;
  className?: string;
  heightClass?: string;
  /** Ajusta el recorte del avatar (e.g. "50% 40%" para subir hacia los ojos) */
  objectPosition?: string;
  /** Viñeta sutil en bordes */
  vignette?: boolean;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className={cn("relative w-full", heightClass)}>
        <Image
          src={src}
          alt="avatar"
          fill
          className="object-cover"
          style={{ objectPosition }}
          priority
          sizes="100vw"
        />
        {vignette && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.00) 25%, rgba(0,0,0,0.00) 75%, rgba(0,0,0,0.35) 100%)",
            }}
          />
        )}
      </div>
    </div>
  );
}

/* --- callout con marco (desktop) y líneas (mobile) --- */
function CraftUniqueAvatarCallout({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {/* MOBILE: líneas + texto (sin imagen de fondo) */}
      <div className="md:hidden mx-auto w-full max-w-[1200px] px-2">
        <div className="mx-auto w-[92%] max-w-[380px]">
          {/* Línea superior */}
          <div className="h-px w-full bg-white/50" />
          {/* Texto */}
          <div className="py-3 text-center">
            <span className="font-pirulen font-bold text-white text-[38px] leading-none tracking-[0.01em]">
              {text}
            </span>
          </div>
          {/* Línea inferior */}
          <div className="h-px w-full bg-white/50" />
        </div>
      </div>

      {/* DESKTOP: marco original */}
      <div className="hidden md:block mx-auto w-full max-w-[1200px] px-6">
        <div className="relative mx-auto w-[92%] max-w-[980px] h-[78px]">
          {/* Marco */}
          <Image
            src="/images/UIContainers/UIContainer_CraftUniqueAvatar.png"
            alt=""
            fill
            className="object-contain select-none pointer-events-none"
            sizes="980px"
            priority
          />
          {/* Texto */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="font-pirulen font-bold text-white text-[47px] leading-none tracking-[0.01em]">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
