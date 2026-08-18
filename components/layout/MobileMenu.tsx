"use client";

import { useState } from "react";
import Link from "next/link";

import { NAVIGATION } from "@/constants";
import { WhatsAppButton } from "@/components/ui";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="
          inline-flex h-10 w-10 items-center justify-center
          rounded-lg
          border border-[var(--brand-border)]
          bg-white
          text-slate-700
          transition-colors
          hover:border-[var(--brand-primary)]
          hover:text-[var(--brand-primary)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--brand-primary)]
          focus-visible:ring-offset-2
        "
      >
        <span
          aria-hidden="true"
          className="text-xl leading-none"
        >
          {open ? "×" : "☰"}
        </span>
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="
            absolute left-0 right-0 top-24
            border-b border-[var(--brand-border)]
            bg-white
            shadow-lg
          "
        >
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6">
            <nav
              aria-label="Navegación móvil"
              className="flex flex-col gap-1"
            >
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg
                    px-4 py-3
                    text-sm font-medium text-slate-700
                    transition-colors
                    hover:bg-[var(--brand-cream)]
                    hover:text-[var(--brand-primary)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--brand-primary)]
                    focus-visible:ring-inset
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 border-t border-[var(--brand-border)] pt-5">
              <WhatsAppButton
                label="Solicitar consulta"
                message="Hola, quisiera solicitar una consulta en LABODENT."
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}