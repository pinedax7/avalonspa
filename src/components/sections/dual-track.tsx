"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function DualTrackGTMSection({
  className,
  bgSrc = "/images/black-bg.png",
  characterSrc = "/images/videoframe_4240.png",
  frameSrc = "/images/UIContainers/UIContainer_Blue.png",
}: {
  className?: string;
  bgSrc?: string;
  characterSrc?: string;
  frameSrc?: string;
}) {
  return (
    <section
      className={cn("relative w-full overflow-hidden py-8 md:py-16", className)}
       style={{ backgroundImage: `url('${bgSrc}')` }}
    >
      <div className="relative mx-auto max-w-7xl">

        {/* Personaje ABSOLUTO (386×687 en md+) */}
        <div
          className="
          pointer-events-none select-none
          absolute left-0 bottom-[-53px]
          w-[220px] h-[360px]
          md:w-[386px] md:h-[687px]
        "
        >
          <Image
            src={characterSrc}
            alt="Hero character"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 220px, 386px"
          />
        </div>

        {/* Layout real: 2 columnas (título + frame) */}
        <div
          className="
          relative mx-auto w-full max-w-[1800px]
          px-3 md:px-6
          grid items-center gap-5 md:gap-6
          grid-cols-1
          md:grid-cols-[485px_453px]          /* tablet/desktop: anchos exactos */
          md:pl-[clamp(280px,26vw,360px)]     /* espacio para personaje (tablet) */
          lg:pl-[386px]                       /* desktop: igual al personaje */
          2xl:pl-[420px]                      /* opcional: igual al up-scale 2K */
        "
        >
          {/* Headline */}
          <div className="relative -ml-4 md:-ml-10 lg:-ml-16 xl:-ml- max-w-[485px]">
            <h2
              className="
              font-pirulen font-semibold text-white leading-[0.92]
              text-[38px] sm:text-[46px] md:text-[57.3px]
              text-center md:text-left
            "
            >
              BUILD THE <br />
              MULTIVERSE <br />
              TOGETHER
            </h2>
          </div>

          {/* Frame derecha */}
          <div className="relative justify-self-center md:justify-self-end">
            <div className="relative w-[min(92vw,553px)] aspect-553/563 md:w-[553px] md:h-[563px] md:aspect-auto">
              <Image
                src={frameSrc}
                alt="UI frame"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 92vw, 553px"
              />
              <div className="absolute inset-0 z-10 pl-10 py-8 md:pl-20 md:py-12 text-white">
                <Block title="INTENSE GAMEPLAY">
                  <p>Action Oriented, Fast Paced,</p>
                  <p>and Skill Based Gameplay.</p>
                </Block>
                <Block title="CREATOR PROGRAM">
                  <p>Modders, Streamers, Builders,</p>
                  <p>Creator Spotlights, Rev Share</p>
                </Block>
                <Block title="GUILDS & SOCIAL">
                  <p>Community Events, Guild Rewards,</p>
                  <p>Server Wide Initiatives</p>
                </Block>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-8 md:mt-9">
      {children && (
        <div className="mt-2 space-y-1 font-eurostile text-white/85 text-[15px] md:text-[17px] leading-relaxed">
          {children}
        </div>
      )}
      <h3 className="mt-2 md:mt-3 font-pirulen font-semibold text-[16px] md:text-[27px] tracking-[-0.03em]">
        {title}
      </h3>
    </div>
  );
}
