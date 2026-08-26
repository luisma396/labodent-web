import {
    LABORATORY_PROCESS,
  } from "@/constants";
  
  import {
    Section,
    SectionHeader,
  } from "@/components/ui";
  
  import {
    LaboratoryProcessCard,
  } from "@/components/cards";
  
  export function LaboratoryProcessSection() {
    return (
      <Section className="bg-[var(--lab-background)] py-16 text-white sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Proceso"
          title="Cómo trabajamos"
          description="Nuestro flujo digital integra la recepción de registros, validación, diseño, fabricación y entrega del trabajo finalizado."
          align="center"
          variant="dark"
        />
  
        <div
          className="
            mx-auto mt-12
            grid max-w-7xl gap-5
            md:grid-cols-2
            lg:grid-cols-5
            lg:gap-4
          "
        >
          {LABORATORY_PROCESS.map((process) => (
            <div
              key={process.id}
              className="
                relative
                lg:after:pointer-events-none
                lg:after:absolute
                lg:after:left-full
                lg:after:top-10
                lg:after:z-10
                lg:after:h-px
                lg:after:w-4
                lg:after:bg-[var(--lab-gold)]/40
                last:lg:after:hidden
              "
            >
              <LaboratoryProcessCard
                process={process}
              />
            </div>
          ))}
        </div>
      </Section>
    );
  }