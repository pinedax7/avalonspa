"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LockedScale from "../common/locked-scale"; // ⬅️ import

type SocialLinks = {
  youtube?: string;
  discord?: string;
  x?: string; // Twitter/X
};

type Props = {
  className?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  partnerEmail?: string;
  pressKitHref?: string;
  socials?: SocialLinks;
  bgSrc?: string;
  logoSrc?: string;
};

export function StayConnectedFooter({
  className,
  titleLine1 = "STAY",
  titleLine2 = "CONNECTED",
  subtitle = "AVALON - A universe powered by AI and Players",
  partnerEmail = "sean@playavalon.com",
  pressKitHref = "#",
  socials = { youtube: "#", discord: "#", x: "#" },
  bgSrc = "/images/footer-bg.png",
  logoSrc = "/images/AVALON-Avatar-01-Single-Neg-S.png",
}: Props) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      {/* Fondo fuera del lock */}
      <Image
        src={bgSrc}
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover"
        sizes="100vw"
      />

      {/* Contenido bloqueado a 1351px y escalado proporcional */}
      <LockedScale designWidth={1351}>
        <div className="relative mx-auto w-full max-w-7xl px-6 py-10 md:py-9">
          {/* Header: logo + título */}
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[420px_1fr]">
            {/* Logo */}
            <div className="mx-auto md:mx-0 pl-20">
              <div className="relative w-[140px] h-[140px] md:w-[250px] md:h-[250px]">
                <Image
                  src={logoSrc}
                  alt="Avalon Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width:768px) 140px, 250px"
                  priority
                />
              </div>
            </div>

            {/* Título y subtítulo */}
            <div className="text-center md:text-left">
              <h2 className="font-pirulen font-bold text-black leading-[0.9] text-[56px] md:text-[86px] tracking-[-0.08em]">
                <span className="block">{titleLine1}</span>
                <span className="block">{titleLine2}</span>
              </h2>
              <p className="mt-4 font-eurostile text-black/80 text-[16px] md:text-[22px] tracking-[-0.03em]">
                {subtitle}
              </p>
              <p className="mt-2 font-masiva text-[10px] leading-4 tracking-[-0.01em] whitespace-pre-line">
                (C) 2025 CREATE AVALON CORP. AVALON, and the AVALON logo are TM,
                and (R) where applicable.
                <br /> All other copyrights and trademarks are the property of
                their respective owners. All other rights reserved.
              </p>
            </div>
          </div>

          {/* Divider con puntitos a los extremos */}
          <div className="relative mt-8 md:mt-10">
            <div className="h-0.5 w-full bg-black/70" />
            <span className="absolute -left-3 -bottom-[3px] h-[7px] w-[7px] bg-black" />
            <span className="absolute left-0 -bottom-0.5 h-1.5 w-1.5 bg-black" />
            <span className="absolute -right-3 -bottom-[3px] h-[7px] w-[7px] bg-black" />
            <span className="absolute right-0 -bottom-0.5 h-1.5 w-1.5 bg-black" />
          </div>

          {/* Bottom Row: Partner | Socials | Press Kit */}
          <div className="mt-6 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            {/* Partner */}
            <div className="text-center md:text-left">
              <div className="font-pirulen font-bold text-[22px] md:text-[29px] tracking-[-0.02em] text-black">
                PARTNER
              </div>
              <a
                href={`mailto:${partnerEmail}`}
                className="font-masiva text-black/80 text-[16px] md:text-[16px] underline-offset-4 hover:underline tracking-[-0.03em]"
              >
                {partnerEmail}
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-6 md:gap-8">
              {socials.youtube && (
                <Link
                  href={socials.youtube}
                  aria-label="YouTube"
                  target="_blank"
                >
                  <YouTubeIcon className="h-9 w-9 md:h-11 md:w-11 text-black hover:opacity-80 transition-opacity" />
                </Link>
              )}
              {socials.discord && (
                <Link
                  href={socials.discord}
                  aria-label="Discord"
                  target="_blank"
                >
                  <DiscordIcon className="h-9 w-9 md:h-11 md:w-11 text-black hover:opacity-80 transition-opacity" />
                </Link>
              )}
              {socials.x && (
                <Link href={socials.x} aria-label="X" target="_blank">
                  <XIcon className="h-9 w-9 md:h-11 md:w-11 text-black hover:opacity-80 transition-opacity" />
                </Link>
              )}
            </div>

            {/* Press Kit */}
            <div className="text-center md:text-right">
              <Link href={pressKitHref} className="inline-block">
                <div className="font-pirulen font-bold text-[22px] md:text-[29px] tracking-[-0.02em] text-[#3C23C8]">
                  PRESS KIT
                </div>
                <div className="font-masiva text-[14px] md:text-[16px] text-[#3C23C8] tracking-[-0.03em] text-center">
                  Click Here
                </div>
              </Link>
            </div>
          </div>
        </div>
      </LockedScale>
    </section>
  );
}

/* ----------------------- SVG Icons ----------------------- */

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.4-1.9.5-3.8.5-5.8 0-2-.1-3.9-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.3 4.6A17 17 0 0 0 16.7 3l-.2.4a15 15 0 0 1 3.7 1.9c-1.6-.8-3.1-1.3-4.6-1.6a14 14 0 0 0-6.6 0c-1.5.3-3 .8-4.6 1.6.9-.6 2.3-1.4 3.7-1.9L7.3 3a17 17 0 0 0-3.6 1.6C1.5 7.9.7 11 .9 14.1v.1c1.3 1.9 3.3 3.3 5.4 4.2l.6-.9c-1-.4-2-.9-2.8-1.6l.7.3.1.1c2 1 4.2 1.6 6.4 1.6s4.4-.5 6.4-1.6l.1-.1.7-.3c-.8.7-1.8 1.2-2.8 1.6l.6.9c2.1-.9 4.1-2.3 5.4-4.2v-.1c.3-3.2-.6-6.2-2.6-9.5ZM9.2 13.8c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Zm5.6 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.2 2H21l-6.3 7.2L22 22h-6.8l-5.3-7-6 7H2l6.7-7.8L2 2h6.9l4.8 6.4L18.2 2Zm-1.2 18h1.9L7.1 4H5.2l11.8 16Z" />
    </svg>
  );
}
