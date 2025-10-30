import { cn } from "@/lib/utils";

type DividerProps = {
  /** horizontal | vertical */
  orientation?: "horizontal" | "vertical";
  /** Tailwind para el largo: w-* (horizontal) u h-* (vertical). Default: w-4/5 */
  lengthClass?: string;
  /** Tailwind para el grosor: h-px (horizontal) o w-px (vertical) */
  thicknessClass?: string;
  /** Clase de color/fondo. Default: bg-white/20 (ajústalo a tu tema) */
  colorClass?: string;
  /** Clases extra */
  className?: string;
  /** Etiqueta accesible opcional */
  ariaLabel?: string;
};

export function Divider({
  orientation = "horizontal",
  lengthClass,
  thicknessClass,
  colorClass = "transparent",
  className,
  ariaLabel,
}: DividerProps) {
  const isVertical = orientation === "vertical";

  const length = lengthClass ?? (isVertical ? "h-8" : "w-4/5");
  const thickness =
    thicknessClass ?? (isVertical ? "w-px" : "h-px");

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      aria-label={ariaLabel}
      className={cn(
        // espaciado por defecto (solo para horizontal)
        !isVertical && "my-6 md:my-5",
        // centrado por defecto
        "mx-auto",
        // tamaño y color
        length,
        thickness,
        colorClass,
        className
      )}
    />
  );
}
