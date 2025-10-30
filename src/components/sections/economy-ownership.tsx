"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import LockedScale from "../common/locked-scale";

export function EconomyOwnershipSection({
  className,
  bgSrc = "/images/economy-ownership-gradient-bg.png",
  gemSrc = "/images/bluegemavalontransparent.png",
}: {
  className?: string;
  bgSrc?: string;
  gemSrc?: string;
}) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-2 py-6 md:py-2 text-white",
        className
      )}
    >
      <Image
        src={bgSrc}
        alt="Economy & Ownership background"
        fill
        priority
        className="absolute inset-0 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/10" />

      <LockedScale designWidth={1351}>
        <div
          className="
          relative mx-auto w-full max-w-[1200px] px-2 md:px-6
          grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_310px]
          items-center gap-8 md:gap-8
        "
        >
          {/* TEXT */}
          <div className="mx-auto max-w-[820px] text-right flex flex-col items-end">
            <h3
              className="
              font-pirulen font-semibold tracking-[0.01em]
              text-[22px] md:text-[27px]
              leading-[35px] md:leading-tight
              md:whitespace-nowrap
            "
            >
              PLAYER OWNED ECONOMY
            </h3>

            <div className="mt-8 space-y-4 font-eurostile text-[15px] md:text-[17.5px] text-white/90 leading-relaxed text-right">
              <p>More than just a game, it&apos;s a player created universe.</p>
              <p>Player owned assets and fair creator royalties.</p>
              <p>Rare skins and items with genuine scarcity.</p>
              <p>
                Marketplace where players and guilds trade, build, and thrive.
              </p>
            </div>
          </div>

          {/* GEM */}
          <div className="relative mx-auto md:mx-0 mt-6 md:mt-0">
            <div className="relative h-[220px] w-[220px] md:h-[309.78px] md:w-[309.78px]">
              <Image
                src={gemSrc}
                alt="Avalon blue gem"
                fill
                className="object-contain pointer-events-none select-none"
                sizes="(max-width: 768px) 220px, 310px"
                priority
              />
            </div>
          </div>
        </div>
      </LockedScale>
    </section>
  );
}
