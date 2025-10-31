"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import LockedScale from "../common/locked-scale";

/* ----------------------------- data ----------------------------- */
const videoItems = [
  {
    title: "RUBY ARCHIPELAGO",
    src: "/video/ruby-archipelago.mp4",
    bleed: 1.06,
  },
  {
    title: "MEADOWS",
    src: "https://res.cloudinary.com/dzfajfr7g/video/upload/v1761837846/meadows_tafrkg.mp4",
    bleed: 1.06,
  },
  { title: "ENDLESS FALLS", src: "/video/endless-falls.mp4", bleed: 1.06 },
];

type GalleryItem = {
  title: string;
  img: string;
  /** Modo exacto (usa width/height/translate) o recorte vertical tipo portada */
  mode?: "transform" | "cover";
  /** --- transform mode --- */
  w?: number;
  h?: number;
  tx?: number; // px
  ty?: number; // px
  scale?: number;
  /** --- cover mode --- */
  objectPosition?: string; // e.g. "60% center"
};

const galleryItems: GalleryItem[] = [
  {
    title: "CASTLE",
    img: "/images/gallery/gallery-1.png",
    mode: "cover",
    objectPosition: "70% center",
  },
  {
    title: "DUNGEON",
    img: "/images/gallery/gallery-2.png",
    mode: "cover",
    objectPosition: "70% center",
  },
  {
    title: "TOWER",
    img: "/images/gallery/gallery-3.png",

    mode: "cover",
    objectPosition: "70% center",
  },
  {
    title: "VILLAGE",
    img: "/images/gallery/gallery-4.png",
    // en el diseño es más “vertical”; usamos cover y
    // ajustamos el recorte hacia la derecha para el balcón.
    mode: "cover",
    objectPosition: "70% center",
  },
  {
    title: "CYBERCITY",
    img: "/images/gallery/gallery-5.png",
    mode: "cover",
    objectPosition: "70% center",
  },
];

/* --------------------------- component -------------------------- */
export function BuildUniverseSection({
  className,
  bgSrc = "/images/green-bg.png",
}: {
  className?: string;
  bgSrc?: string;
}) {
  return (
    <section
      id="build-universe"
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        backgroundImage: `url('${bgSrc}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LockedScale designWidth={1351}>
        <div className="mx-auto w-full max-w-[1400px] py-12 md:py-14">
          {/* ─────────────── Top Row: Title + Description ─────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start  px-4 md:px-24 ">
            {/* Left side */}
            <div className="w-fit md:self-center">
              <h2
                className="
                inline-block
                font-pirulen font-bold text-black
                leading-none tracking-[0.02em]
                text-[42px] md:text-[62px]
              "
              >
                <span className="block">BUILD YOUR</span>
                <span className="block mt-1 text-[42px] md:text-[53px]">
                  OWN WORLDS
                </span>
              </h2>

              {/* Línea decorativa del ancho del H2 */}
              <div className="mt-3 h-[18px] w-full relative select-none">
                <Image
                  src="/images/Line_BuildYourOwnUniverse.png"
                  alt="Line decoration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Subtítulo */}
              <p className="mt-3 font-eurostile font-bold text-[18px] text-black">
                PLATFORMS COMING TO PC &amp; CONSOLES
              </p>
            </div>

            {/* Right side */}
            <div className="text-black space-y-5 pr-0">
              <p className="font-eurostile font-bold text-[25px] leading-[30px]">
                AVALON is a new kind of game, a boundless realm where players
                and AI forge their own worlds.
              </p>
              <p className="font-eurostile text-[17.3px] leading-[25px]">
                Explore epic realms, conquer dungeons, or create entire worlds
                of your own.
              </p>
              <p className="font-eurostile text-[17.3px] leading-[25px]">
                Forge and own every quest, item, and adventure alongside the
                community.
              </p>
              <p className="font-eurostile text-[17.3px] leading-[25px]">
                Carry your character&apos;s story seamlessly across every new
                world you explore.
              </p>
            </div>
          </div>

          {/* ─────────────── Video Cards Row ─────────────── */}
          <div className="mt-4 md:mt-12 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1.5">
            {videoItems.map((v) => (
              <VideoCard key={v.title} title={v.title} src={v.src} />
            ))}
          </div>

          {/* ─────────────── Gallery Strip (5 imágenes) ─────────────── */}
          <div className="mt-0 grid grid-cols-1 gap-9 sm:grid-cols-5 sm:gap-[5px] lg:grid-cols-5">
            {galleryItems.map((g) => (
              <GalleryCard key={g.title} {...g} />
            ))}
          </div>

          {/* Nueva sección de pilares */}
          <CorePillarsSection3Col className="mt-7" />
        </div>
      </LockedScale>
    </section>
  );
}

/* ------------------------- Subcomponents ------------------------ */
function VideoCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className="
          relative w-full max-w-[460px]
          h-[294px] md:h-[294px] lg:h-[294px]
          overflow-hidden rounded-2xl
          shadow-[0_8px_28px_rgba(0,0,0,0.28)]
          bg-black/30
        "
      >
        <video
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          // Leve zoom para evitar letterboxing negro
          style={{ transform: "scale(1.4)", transformOrigin: "center" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <PlateLabel plateHeight={115}>{title}</PlateLabel>
    </div>
  );
}

/** Card de galería con recorte/posición específica */
function GalleryCard({
  title,
  img,
  mode = "transform",
  w,
  h,
  tx = 0,
  ty = 0,
  scale = 1,
  objectPosition = "center",
}: GalleryItem) {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className="
          relative w-full h-[650px]
          overflow-hidden rounded-2xl
          bg-black/10
          shadow-[0_10px_28px_rgba(0,0,0,.25)]
        "
      >
        {mode === "transform" ? (
          /* POSICIÓN ABSOLUTA: respeta w/h + translate exactos */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={title}
            className="absolute top-0 left-0 pointer-events-none select-none will-change-transform"
            style={{
              width: `${w ?? 1200}px`,
              height: `${h ?? 650}px`,
              transform: `translate(${tx}px, ${ty}px) rotate(0deg) scale(${scale})`,
            }}
            draggable={false}
          />
        ) : (
          /* Portada vertical (VILLAGE) */
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            style={{ objectPosition }}
            priority={title === "VILLAGE"}
          />
        )}
      </div>

      {/* Plate centrado y ligeramente solapado */}
      <PlateLabel className="w-[80%]" plateHeight={85}>
        {title}
      </PlateLabel>
    </div>
  );
}

/** Placa de título inferior: muestra SOLO la base del UIContainer */
function PlateLabel({
  children,
  className,
  frameSrc = "/images/UIContainers/UIContainer_GreenLarge.png",
  /** Alto visible del “botón” (la franja) */
  plateHeight = 64,
  /** Alto real aproximado del PNG del frame (para posicionar la base) */
  frameHeight = 380,
}: {
  children: React.ReactNode;
  className?: string;
  frameSrc?: string;
  plateHeight?: number;
  frameHeight?: number;
}) {
  return (
    <div
      className={cn("relative mx-auto w-[360px] select-none", className)}
      style={{ height: `${plateHeight}px`, overflow: "hidden" }}
    >
      {/* Fondo: frame completo, anclado abajo. 
          Solo se ve la parte inferior gracias al overflow-hidden del contenedor */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: `${frameHeight}px`, // alto total del PNG
          backgroundImage: `url('${frameSrc}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom", // ¡clave! anclar a la base
          backgroundSize: "100% auto", // respeta proporción
          filter: "drop-shadow(0 6px 16px rgba(0,0,0,.35))",
        }}
      />

      {/* Texto centrado sobre la “placa” */}
      <div className="absolute inset-0 flex items-start pt-4 justify-center pointer-events-none">
        <span className="font-pirulen font-bold tracking-[0.01em] text-white text-[13px] md:text-[14px] leading-none">
          {children}
        </span>
      </div>
    </div>
  );
}

function CorePillarsSection3Col({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div
        className="
          mx-auto px-2 md:px-12
          grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)_250px]
          items-center gap-0
        "
      >
        {/* Izquierda: Espada */}
        <div
          className="
    justify-self-center self-center          
    grid place-items-center                   
    w-[199px] h-[197px]                      
  "
        >
          <Image
            src="/images/icons/GreatSword.png"
            alt="Great Sword"
            width={199}
            height={197}
            className="
      block w-[199px] h-[197px]               
      object-contain opacity-50 -scale-x-100
      pointer-events-none select-none
    "
            sizes="199px"
            quality={90}
          />
        </div>

        {/* Centro: Texto */}
        <div className="text-center text-white px-2 space-y-8">
          <Pillar
            title="CREATE WITHOUT LIMITS"
            text="Build an RPG, battle royale, dungeon or something we haven't imagined yet with powerful but easy tools"
          />

          <Pillar
            title="PLAYER ECONOMY"
            text="Own, trade, create, sell items, skins, and even worlds
Players earn real value from their engagement"
          />

          <Pillar
            title="IP AGNOSTIC"
            text="AVALON is a stage where iconic IPs, fan creations, and original worlds can coexist, cross over, and evolve together"
          />
        </div>

        {/* Derecha: Arco (abajo en mobile) */}
        <div
          className="
    justify-self-center self-center
    grid place-items-center
    w-[229px] h-[210px]
  "
        >
          <Image
            src="/images/icons/BowArrow.png"
            alt="Bow and Arrow"
            width={229}
            height={210}
            className="block w-[229px] h-[210px] object-contain opacity-50 -scale-x-100 pointer-events-none select-none"
            sizes="229px"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-2 md:space-y-3">
      <h3 className="font-pirulen font-bold tracking-[0.01em] text-[24px] md:text-[27px] leading-[54px] md:leading-none">
        {title}
      </h3>
      <p className="mx-auto max-w-[720px] font-eurostile text-[15px] md:text-[17px]  leading-relaxed text-white/90">
        {text}
      </p>
    </div>
  );
}
