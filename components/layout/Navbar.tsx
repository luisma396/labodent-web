import Link from "next/link";

import { NAVIGATION } from "@/constants";
import {
  Container,
  WhatsAppButton,
} from "@/components/ui";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-border)] bg-white/95 shadow-sm backdrop-blur">
      <Container className="flex h-24 items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-sm font-medium text-slate-700
                transition-colors
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-0.5
                after:w-0
                after:bg-[var(--brand-primary)]
                after:transition-all
                hover:text-[var(--brand-primary)]
                hover:after:w-full
                focus-visible:outline-none
                focus-visible:text-[var(--brand-primary)]
                focus-visible:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <WhatsAppButton
            label="Solicitar consulta"
            message="Hola, quisiera solicitar una consulta en LABODENT."
            className="px-5 py-2.5"
          />
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}