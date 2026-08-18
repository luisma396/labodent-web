import type { HTMLAttributes, ReactNode } from "react";

import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={className} {...props}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}