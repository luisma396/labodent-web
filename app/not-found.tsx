import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
          Error 404
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          No encontramos la página que buscas
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          La dirección puede haber cambiado o la página ya no está disponible.
          Puedes volver al inicio o consultar nuestros tratamientos.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[var(--brand-primary)]
              px-6 py-3
              text-sm font-semibold text-white
              transition-colors duration-200
              hover:bg-[var(--brand-primary-dark)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--brand-primary)]
              focus-visible:ring-offset-2
            "
          >
            Volver al inicio
          </Link>

          <Link
            href="/tratamientos"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-[var(--brand-primary)]
              bg-white
              px-6 py-3
              text-sm font-semibold
              text-[var(--brand-primary)]
              transition-colors duration-200
              hover:bg-[var(--brand-primary)]
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--brand-primary)]
              focus-visible:ring-offset-2
            "
          >
            Ver tratamientos
          </Link>
        </div>
      </div>
    </section>
  );
}