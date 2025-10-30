"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero({
  onSignUpHref = "#connect",
  className,
}: {
  onSignUpHref?: string;
  className?: string;
}) {
  return (
    <section id="hero" className={cn("relative w-full", className)}>
      {/* Stage: full-height en mobile, 16:9 en desktop */}
      <div className="relative h-dvh md:h-auto md:aspect-video">
        {/* Fondo de video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          poster="/images/hero-poster.jpg"
        >
          <source
            src="https://res.cloudinary.com/dzfajfr7g/video/upload/v1761782639/avalon-showcase_ojzvu6.mp4"
            type="video/mp4"
          />
          {/* Fallback simple por si el navegador no soporta video */}
          Tu navegador no soporta video HTML5.
        </video>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/70" />

        {/* Contenido */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-between px-4 pt-5 md:px-6">
          {/* Logo */}
          <div className="flex items-start justify-center md:justify-end">
            <Image
              src="/images/avalon-logo-horizontal.png"
              alt="AVALON"
              width={502}
              height={129}
              className="h-auto w-80 md:w-[502px]"
              priority
            />
          </div>

          {/* CTA central */}
          <div className="pb-24 md:pb-9 text-center">
            <p className="text-white/95 font-pirulen text-[22px] md:text-[26px] tracking-[0.01em] leading-tight">
              BETA STARTING Q1
              <br className="sm:hidden" /> 2026
            </p>

            <div className="my-2 flex justify-center">
              <Image
                src="/images/Line_CTA.png"
                alt=""
                aria-hidden="true"
                width={480}
                height={24}
                className="h-auto w-[86vw] max-w-[480px] md:w-[720px]"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href={onSignUpHref}
                aria-label="Sign up now"
                className="group inline-block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <Image
                  src="/images/CTAButton_SignUp.png"
                  alt="Sign up now"
                  width={420}
                  height={120}
                  priority
                  sizes="(min-width: 768px) 420px, 76vw"
                  className="h-auto w-[76vw] max-w-[420px] select-none transition-transform duration-200 group-hover:scale-[1.02] group-active:scale-[0.98] drop-shadow-[0_0_24px_rgba(60,255,171,0.25)]"
                />
              </Link>
            </div>

            <p className="text-white/85 font-eurostile font-semibold text-[12px] md:text-[22px] tracking-[-0.01em]">
              TO PARTICIPATE
            </p>
          </div>
        </div>
        {/* Redes sociales */}
        <div
          className="
    absolute left-1/2
    bottom-[calc(env(safe-area-inset-bottom,0px)+36px)]
    -translate-x-1/2 flex flex-row items-center gap-6
    md:translate-x-0 md:left-auto md:right-9 md:bottom-12
    md:flex-col
  "
        >
          <SocialIcon href="https://x.com/playavalon" label="X / Twitter">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-white transition-opacity hover:opacity-80"
              aria-hidden
            >
              <path d="M18.9 2H22l-7 8.1L23.4 22H16l-5-6.4L5 22H2l7.6-8.8L.9 2H8l4.6 6L18.9 2Zm-2.1 18h2.1L7.4 4H5.2L16.8 20Z" />
            </svg>
          </SocialIcon>

          <SocialIcon href="https://discord.gg/avalon" label="Discord">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-white transition-opacity hover:opacity-80"
              aria-hidden
            >
              <path d="M20.3 4.4A17.4 17.4 0 0 0 15.6 3l-.2.4c1.2.4 2.2 1 3.1 1.7-1.3-.6-2.6-1-4-1.2a15.7 15.7 0 0 0-4.7 0 15 15 0 0 0-4 1.2c.9-.8 2-1.3 3.2-1.7l-.2-.4C7.2 3 5.8 3.2 3.8 4.4 1.6 8 .9 11.4 1.1 14.9c1.8 1.3 3.6 2 5.3 2.5l1.1-1.8c-.6-.2-1.2-.5-1.7-.8.2-.1.4-.2.6-.3 3.3 1.5 6.9 1.5 10.2 0l.6.3c-.5.3-1.1.6-1.7.8l1.1 1.8c1.7-.5 3.5-1.2 5.3-2.5.4-3.8-.6-7.2-2.6-10.5ZM8.8 13.6c-.9 0-1.7-.8-1.7-1.8s.8-1.8 1.7-1.8 1.7.8 1.7 1.8-.8 1.8-1.7 1.8Zm6.4 0c-.9 0-1.7-.8-1.7-1.8s.8-1.8 1.7-1.8 1.7.8 1.7 1.8-.8 1.8-1.7 1.8Z" />
            </svg>
          </SocialIcon>

          <SocialIcon href="https://youtube.com/@avalon" label="YouTube">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-white transition-opacity hover:opacity-80"
              aria-hidden
            >
              <path d="M23.5 6.2a3.5 3.5 0 0 0-2.5-2.5C19 3.2 12 3.2 12 3.2s-7 0-9 .5A3.5 3.5 0 0 0 .5 6.2 36.2 36.2 0 0 0 0 12a36.2 36.2 0 0 0 .5 5.8 3.5 3.5 0 0 0 2.5 2.5c2 .5 9 .5 9 .5s7 0 9-.5a3.5 3.5 0 0 0 2.5-2.5A36.2 36.2 0 0 0 24 12a36.2 36.2 0 0 0-.5-5.8Z" />
              <path
                d="M9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
                className="fill-black"
              />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="transition-opacity hover:opacity-80 focus:opacity-80"
    >
      {children}
    </Link>
  );
}
