import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "odontologia-general",
    name: "Odontología General",
    description:
      "Atención odontológica integral para el cuidado y mantenimiento de la salud bucal.",
    category: "Odontología General",
    featured: true,
    icon: "general",

    longDescription:
      "La odontología general constituye la base del cuidado de la salud bucal. En LABODENT realizamos evaluaciones, controles y tratamientos orientados a prevenir problemas dentales, mantener una buena salud oral y detectar oportunamente situaciones que puedan requerir atención especializada.",

    benefits: [
      "Prevención y detección temprana de problemas bucales",
      "Mantenimiento de una adecuada salud dental",
      "Evaluación integral del estado de dientes y encías",
      "Orientación personalizada sobre cuidado e higiene bucal",
    ],

    idealFor: [
      "Personas que desean realizar controles odontológicos periódicos",
      "Pacientes que presentan molestias o cambios en su salud bucal",
      "Personas que buscan prevenir problemas dentales",
    ],
  },

  {
    id: "ortodoncia",
    name: "Ortodoncia",
    description:
      "Tratamientos orientados a mejorar la posición dental y la armonía de la sonrisa.",
    category: "Especialidades",
    featured: true,
    icon: "orthodontics",

    longDescription:
      "La ortodoncia permite corregir alteraciones en la posición de los dientes y mejorar su relación dentro de la boca. Cada tratamiento requiere una evaluación individual para planificar una alternativa que favorezca tanto la función como la armonía de la sonrisa.",

    benefits: [
      "Mejora de la alineación dental",
      "Mejora funcional de la mordida",
      "Mayor armonía de la sonrisa",
      "Planificación adaptada a las necesidades de cada paciente",
    ],

    idealFor: [
      "Pacientes con dientes desalineados o apiñados",
      "Personas con alteraciones en la mordida",
      "Jóvenes y adultos que desean mejorar la posición de sus dientes",
    ],
  },

  {
    id: "endodoncia",
    name: "Endodoncia",
    description:
      "Tratamientos especializados destinados a conservar las piezas dentales.",
    category: "Especialidades",
    featured: true,
    icon: "endodontics",

    longDescription:
      "La endodoncia está orientada al tratamiento del interior del diente cuando la pulpa dental se encuentra afectada. Su objetivo es tratar la pieza comprometida y, cuando las condiciones clínicas lo permiten, favorecer su conservación y posterior rehabilitación.",

    benefits: [
      "Tratamiento de piezas dentales con afectación pulpar",
      "Posibilidad de conservar el diente natural",
      "Control de molestias asociadas a la pieza afectada",
      "Preparación del diente para su posterior rehabilitación cuando sea necesaria",
    ],

    idealFor: [
      "Pacientes con dolor dental que requiere evaluación profesional",
      "Piezas dentales con lesiones profundas",
      "Dientes que han sufrido traumatismos o daños importantes",
    ],
  },

  {
    id: "implantes",
    name: "Implantología",
    description:
      "Tratamientos de implantes dentales para recuperar función y estética.",
    category: "Especialidades",
    featured: true,
    icon: "implants",

    longDescription:
      "La implantología ofrece alternativas para reemplazar piezas dentales ausentes mediante soluciones planificadas de acuerdo con las condiciones de cada paciente. El tratamiento busca recuperar la función, estabilidad y estética de la rehabilitación dental.",

    benefits: [
      "Recuperación de la función masticatoria",
      "Reemplazo de piezas dentales ausentes",
      "Mayor estabilidad para determinados tipos de rehabilitación",
      "Recuperación de la estética de la sonrisa",
    ],

    idealFor: [
      "Pacientes con una o más piezas dentales ausentes",
      "Personas que requieren alternativas de rehabilitación dental",
      "Pacientes que buscan recuperar función y estética después de la pérdida dental",
    ],
  },

  {
    id: "estetica-dental",
    name: "Estética Dental",
    description:
      "Tratamientos orientados a mejorar la estética y armonía de la sonrisa.",
    category: "Estética Dental",
    featured: true,
    icon: "aesthetics",

    longDescription:
      "La estética dental comprende diferentes procedimientos destinados a mejorar la apariencia de la sonrisa respetando la salud y características particulares de cada paciente. La planificación comienza con una evaluación para determinar las alternativas apropiadas para cada caso.",

    benefits: [
      "Mejora de la apariencia de la sonrisa",
      "Planificación personalizada según las características del paciente",
      "Mejora de aspectos relacionados con forma, color o armonía dental",
      "Integración de criterios estéticos y funcionales",
    ],

    idealFor: [
      "Personas interesadas en mejorar la apariencia de su sonrisa",
      "Pacientes que desean evaluar alternativas de estética dental",
      "Personas con cambios de color, forma o armonía en sus dientes",
    ],
  },

  {
    id: "rehabilitacion-oral",
    name: "Rehabilitación Oral",
    description:
      "Tratamientos destinados a recuperar la función y estética de la boca.",
    category: "Rehabilitación",
  
    longDescription:
      "La rehabilitación oral reúne distintos procedimientos orientados a recuperar la función, estabilidad y estética del sistema dental. La planificación depende de las condiciones particulares de cada paciente y puede combinar diferentes alternativas terapéuticas según las necesidades detectadas en la evaluación clínica.",
  
    benefits: [
      "Recuperación de la función masticatoria",
      "Mejora de la estabilidad y comodidad al comer",
      "Restablecimiento de la armonía estética",
      "Planificación integral según las necesidades del paciente",
    ],
  
    idealFor: [
      "Pacientes con desgaste o pérdida de varias piezas dentales",
      "Personas que requieren recuperar función y estética de forma integral",
      "Casos que necesitan combinar distintas alternativas de tratamiento",
    ],
  },

  {
    id: "prostodoncia",
    name: "Prostodoncia",
    description:
      "Tratamientos para la rehabilitación y recuperación de estructuras dentales.",
    category: "Rehabilitación",
  
    longDescription:
      "La prostodoncia se enfoca en la restauración o reemplazo de estructuras dentales mediante soluciones protésicas. Su objetivo es favorecer la recuperación de la función y la estética, utilizando alternativas seleccionadas de acuerdo con la evaluación y las necesidades de cada paciente.",
  
    benefits: [
      "Recuperación de piezas o estructuras dentales comprometidas",
      "Mejora de la función oral",
      "Restablecimiento de la estética dental",
      "Adaptación del tratamiento a las condiciones clínicas de cada paciente",
    ],
  
    idealFor: [
      "Pacientes que han perdido una o más piezas dentales",
      "Personas con estructuras dentales deterioradas",
      "Casos que requieren soluciones protésicas para recuperar función y estética",
    ],
  },

  {
    id: "periodoncia",
    name: "Periodoncia",
    description:
      "Atención especializada de los tejidos que sostienen los dientes.",
    category: "Especialidades",
  
    longDescription:
      "La periodoncia está orientada al diagnóstico, prevención y tratamiento de alteraciones que afectan las encías y los tejidos que sostienen los dientes. Una evaluación periodontal permite determinar el estado de estos tejidos y definir las medidas de cuidado o tratamiento apropiadas para cada caso.",
  
    benefits: [
      "Evaluación del estado de las encías y tejidos de soporte",
      "Prevención y control de alteraciones periodontales",
      "Mejora de las condiciones de higiene y cuidado periodontal",
      "Acompañamiento para mantener la estabilidad de los tejidos de soporte",
    ],
  
    idealFor: [
      "Pacientes con sangrado o inflamación de encías",
      "Personas con sensibilidad o cambios en los tejidos periodontales",
      "Pacientes que requieren control y seguimiento de la salud de sus encías",
    ],
  },

  {
    id: "odontopediatria",
    name: "Odontopediatría",
    description:
      "Atención odontológica orientada a niños y adolescentes.",
    category: "Odontología General",
    featured: true,
    icon: "pediatric",

    longDescription:
      "La odontopediatría está orientada al cuidado de la salud bucal de niños y adolescentes. La atención busca acompañar las distintas etapas del desarrollo, fomentar hábitos saludables y detectar de manera temprana posibles alteraciones dentales.",

    benefits: [
      "Seguimiento de la salud bucal durante el crecimiento",
      "Prevención y detección temprana de problemas dentales",
      "Orientación sobre hábitos de higiene bucal",
      "Atención adaptada a niños y adolescentes",
    ],

    idealFor: [
      "Niños que necesitan iniciar o mantener controles odontológicos",
      "Adolescentes que requieren seguimiento de su salud bucal",
      "Familias que buscan establecer hábitos preventivos desde edades tempranas",
    ],
  },

  {
    id: "patologia-bucal",
    name: "Patología Bucal",
    description:
      "Evaluación especializada de alteraciones y patologías de la cavidad bucal.",
    category: "Especialidades",
  
    longDescription:
      "La patología bucal se ocupa de la evaluación de alteraciones que pueden presentarse en los tejidos de la cavidad oral. Su abordaje comienza con una valoración clínica orientada a identificar cambios, lesiones o signos que requieran seguimiento, estudios complementarios o derivación especializada.",
  
    benefits: [
      "Evaluación clínica de alteraciones en la cavidad bucal",
      "Detección temprana de cambios que requieren seguimiento",
      "Orientación sobre estudios o controles complementarios cuando sean necesarios",
      "Derivación especializada en casos que requieran una evaluación adicional",
    ],
  
    idealFor: [
      "Pacientes que presentan lesiones o cambios persistentes en la boca",
      "Personas con alteraciones en mucosas, lengua, encías u otras estructuras orales",
      "Casos que requieren evaluación profesional y seguimiento de cambios bucales",
    ],
  },

];