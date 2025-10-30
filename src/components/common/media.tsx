import Image from "next/image";
export function Media({
  src,
  alt,
  priority = false,
  video = false,
  className = "",
}: {
  src: string;
  alt?: string;
  priority?: boolean;
  video?: boolean;
  className?: string;
}) {
  if (video) {
    return (
      <div className={`relative ${className}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-xl"
        >
          <source src={src} />
        </video>
      </div>
    );
  }
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt ?? ""}
        width={1920}
        height={1080}
        className="w-full h-auto rounded-xl"
        priority={priority}
      />
    </div>
  );
}
