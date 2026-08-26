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
      <Container className="py-5 sm:py-6 lg:py-7">
        <div
          className="
            relative
            min-h-[520px]
            overflow-hidden
            rounded-3xl
            bg-[var(--brand-cream)]
            sm:min-h-[calc(100svh-8.5rem)]
            lg:min-h-[520px]
          "
        >
          <Image
            src={IMAGES.hero.main}
            alt="Clínica dental LABODENT"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-white
              via-white/95
              to-white/55
              sm:via-white/90
              sm:to-white/25
              lg:via-white/80
              lg:to-transparent
            "
          />

          <div
            className="
              relative z-10
              flex min-h-[520px]
              items-center
              px-4 py-8
              sm:min-h-[calc(100svh-8.5rem)]
              sm:px-10 sm:py-10
              lg:min-h-[520px]
              lg:px-16 lg:py-10
            "
          >
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-primary)]">
                Clínica Dental
              </span>

              <h1 className="mt-4 text-[2rem] leading-[1.08] sm:mt-5 sm:text-5xl lg:text-[3.25rem]">
                <span className="block text-[var(--brand-primary)]">
                  Cuidamos tu sonrisa
                </span>

                <span className="mt-2 block text-slate-900">
                  con profesionalismo y tecnología
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg">
                En {COMPANY.name} combinamos experiencia, tecnología y una
                atención cercana para cuidar la salud y estética de tu sonrisa.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
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