import Link from "next/link";

import {
  COMPANY,
  LOCATIONS,
  NAVIGATION,
  SERVICES,
} from "@/constants";

import { Container } from "@/components/ui";

export function Footer() {
  const featuredServices = SERVICES.filter(
    (service) => service.featured,
  );

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">
              {COMPANY.name}
            </h2>

            <p className="mt-2 text-sm font-medium text-[var(--brand-gold-light)]">
              {COMPANY.tagline}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {COMPANY.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Navegación
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition-colors hover:text-[var(--brand-gold-light)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Tratamientos
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {featuredServices.map((service) => (
                <Link
                  key={service.id}
                  href="/#tratamientos"
                  className="text-sm text-slate-400 transition-colors hover:text-[var(--brand-gold-light)]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Ubicaciones
            </h3>

            <div className="mt-5 space-y-5">
              {LOCATIONS.map((location) => (
                <div key={location.id}>
                  <p className="text-sm font-semibold text-white">
                    {location.city}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {location.neighborhood}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white">
                WhatsApp
              </p>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-slate-400 transition-colors hover:text-[var(--brand-gold-light)]"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}