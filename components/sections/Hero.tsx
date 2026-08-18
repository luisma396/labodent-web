import Image from "next/image";

import { COMPANY, IMAGES } from "@/constants";
import {
  Container,
  ScrollLink,
  WhatsAppButton,
} from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="py-6 lg:py-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-3xl bg-[var(--brand-cream)] sm:min-h-[calc(100svh-9rem)]">
          <Image
            src={IMAGES.hero.main}
            alt="Clínica dental LABODENT"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 sm:via-white/90 sm:to-white/30 lg:to-white/10" />

          <div className="relative z-10 flex min-h-[560px] items-center px-4 py-10 sm:min-h-[calc(100svh-9rem)] sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-primary)]">
                Clínica Dental
              </span>

              <h1 className="mt-5 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                <span className="block text-[var(--brand-primary)]">
                  Cuidamos tu sonrisa
                </span>

                <span className="mt-2 block text-slate-900">
                  con profesionalismo y tecnología
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                En {COMPANY.name} combinamos experiencia, tecnología y una
                atención cercana para cuidar la salud y estética de tu sonrisa.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton
                  label="Solicitar consulta"
                  message="Hola, quisiera solicitar una consulta en LABODENT."
                />

                <ScrollLink
                  targetId="tratamientos"
                  variant="outline"
                >
                  Ver tratamientos
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}