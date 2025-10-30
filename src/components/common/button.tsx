"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "icon";
type BgDetails = 1 | 2 | 3 | 4 | 5;
type Size = "lg" | "md" | "sm";

interface BaseProps {
  title: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  bgDetails?: BgDetails; // opcional con fallback
  size?: Size; // tamaño
  fullWidth?: boolean; // ocupar ancho completo
  loading?: boolean;
  className?: string;
  "aria-label"?: string;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    title,
    variant = "secondary",
    icon,
    bgDetails = 1,
    size = "lg",
    fullWidth = false,
    loading = false,
    className,
    ...rest
  } = props as ButtonProps;

  const container = cn(
    "relative inline-flex items-center justify-center select-none",
    fullWidth ? "w-full" : "w-auto"
  );

  const bgUrl = `/images/Button_Details_00${bgDetails}.png`;

  const sizes: Record<Size, string> = {
    lg: "min-h-[64px] px-8 text-[22px]",
    md: "min-h-[56px] px-7 text-[18px]",
    sm: "min-h-[44px] px-5 text-[16px]",
  };

  const base =
    "relative flex items-center gap-3 font-pirulen tracking-[0.07em] rounded-tr-[20px] rounded-bl-[20px] border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-neonGreen/70 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantMap: Record<ButtonVariant, string> = {
    primary:
      "bg-[#00354126] border-2 border-neonGreen text-white hover:shadow-[0_0_24px_rgba(60,255,171,0.35)]",
    secondary:
      "bg-transparent border border-neonGreen text-neonGreen hover:text-white hover:shadow-[0_0_18px_rgba(60,255,171,0.25)]",
    icon: "bg-transparent border border-neonGreen text-neonGreen justify-between hover:text-white",
  };

  const corner = cn(
    "pointer-events-none absolute w-2 h-2 border border-neonGreen"
  );

  const content = (
    <>
      {/* título + icono */}
      <span className="whitespace-nowrap">
        {loading ? "Loading..." : title}
      </span>
      {icon && <span className="ml-auto">{icon}</span>}

      {/* esquinas */}
      <span className={cn(corner, "top-0 left-0 border-b border-r")} />
      <span className={cn(corner, "bottom-0 right-0 border-t border-l")} />

      {/* puntos verdes (solo primary) */}
      {variant === "primary" && (
        <>
          <span className="absolute top-0 left-0 h-2 w-2 bg-neonGreen" />
          <span className="absolute bottom-0 right-0 h-2 w-2 bg-neonGreen" />
        </>
      )}
    </>
  );

  const innerClass = cn(
    base,
    sizes[size],
    variantMap[variant],
    icon && "justify-between",
    className
  );

  const innerStyle: React.CSSProperties = {
    backgroundImage: `url(${bgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const commonA11y = {
    "aria-busy": loading || undefined,
    "aria-label": props["aria-label"] ?? title,
  };

  return (
    <div className={container}>
      {"href" in props && props.href ? (
        <Link
          href={props.href}
          className={cn(innerClass, fullWidth && "w-full")}
          style={innerStyle}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          {...commonA11y}
        >
          {content}
        </Link>
      ) : (
        <button
          type={
            (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ??
            "button"
          }
          disabled={
            (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled ||
            loading
          }
          className={cn(innerClass, fullWidth && "w-full")}
          style={innerStyle}
          {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
          {...commonA11y}
        >
          {content}
        </button>
      )}
    </div>
  );
}
