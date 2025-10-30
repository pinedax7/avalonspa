import { Container } from "./container";

export function Section({
  id,
  className,
  children,
  bg,
  bleed = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`section ${bg ?? ""}`}>
      <div className={bleed ? "" : ""}>
        <Container className={`py-14 md:py-20 ${className ?? ""}`}>
          {children}
        </Container>
      </div>
    </section>
  );
}
