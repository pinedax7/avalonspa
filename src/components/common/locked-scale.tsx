"use client";

import {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type LockedScaleProps = {
  designWidth?: number; // ej: 1351
  className?: string;
  children: React.ReactNode;
  debug?: boolean;
  disableBelow?: number; // opcional: desactiva lock en <= px (por si luego quieres)
};

export default function LockedScale({
  designWidth = 1351,
  className,
  children,
  debug = false,
  disableBelow,
}: LockedScaleProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [naturalHeight, setNaturalHeight] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);

  // ——— helpers ———
  const measure = () => {
    const node = innerRef.current;
    if (!node) return;

    // quitar transform para medir altura real
    const prevTransform = node.style.transform;
    const prevVis = node.style.visibility;
    node.style.transform = "none";
    node.style.visibility = "hidden";

    // scrollHeight no se ve afectado por transform y capta imágenes ya cargadas
    const h = Math.ceil(node.scrollHeight);

    node.style.transform = prevTransform;
    node.style.visibility = prevVis;

    if (h > 0) setNaturalHeight(h);
  };

  const updateScale = () => {
    const outer = outerRef.current;
    if (!outer) return;
    const available = outer.clientWidth;

    const shouldDisable =
      typeof disableBelow === "number" ? available <= disableBelow : false;
    setDisabled(shouldDisable);

    if (!shouldDisable) {
      const s = Math.min(1, available / designWidth);
      setScale(s);
    }
  };

  // ——— medir y escalar en mount + redimensionado del contenedor ———
  useLayoutEffect(() => {
    updateScale();
    const roOuter = new ResizeObserver(() => {
      updateScale();
    });
    if (outerRef.current) roOuter.observe(outerRef.current);

    return () => {
      roOuter.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designWidth, disableBelow]);

  // ——— observar cambios de tamaño del contenido (imágenes, etc.) ———
  useEffect(() => {
    measure();

    const node = innerRef.current;
    if (!node) return;

    // 1) ResizeObserver sobre el contenido (border-box) -> re-medir
    const roInner = new ResizeObserver(() => {
      // pequeño debounce para evitar ráfagas durante carga múltiple
      queueMicrotask(measure);
    });
    roInner.observe(node);

    // 2) Re-medir cuando terminen las fuentes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let fontsDone = false;
    if (typeof document.fonts?.ready === "object") {
      document.fonts.ready.then(() => {
        fontsDone = true;
        measure();
      });
    }

    // 3) Re-medir al cargar imágenes dentro del bloque
    const imgs = node.querySelectorAll("img");
    const listeners: Array<() => void> = [];
    imgs.forEach((img) => {
      if (!(img as HTMLImageElement).complete) {
        const onLoad = () => {
          measure();
        };
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
        listeners.push(() => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onLoad);
        });
      }
    });

    // 4) Fallback: medir tras la carga de ventana por si algo quedó pendiente
    const onWindowLoad = () => measure();
    window.addEventListener("load", onWindowLoad);

    return () => {
      roInner.disconnect();
      listeners.forEach((off) => off());
      window.removeEventListener("load", onWindowLoad);
    };
  }, [children]);

  // ——— desactivado (modo móvil) ———
  if (disabled) {
    return (
      <div ref={outerRef} className={`relative w-full ${className ?? ""}`}>
        {/* Render tal cual, sin lock */}
        <div>{children}</div>
      </div>
    );
  }

  const spacerH = naturalHeight * scale;

  const frameStyles: CSSProperties = {
    width: designWidth,
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    position: "absolute",
    left: "50%",
    translate: "-50% 0",
    zIndex: 10,
    ...(debug && {
      outline: "2px dashed #00e5ff88",
      background: "transparent",
    }),
  };

  return (
    <div ref={outerRef} className={`relative w-full ${className ?? ""}`}>
      <div ref={innerRef} style={frameStyles}>
        {children}
      </div>
      <div
        style={{
          height: spacerH,
          ...(debug && { outline: "2px dotted #ffab00aa" }),
        }}
      />
    </div>
  );
}
