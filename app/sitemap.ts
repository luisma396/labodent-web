import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/config";
import {
  PROFESSIONALS,
  SERVICES,
} from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tratamientos",
    "/profesionales",
    "/tecnologia",
    "/laboratorio-digital",
    "/ubicaciones",
    "/contacto",
  ];

  const treatmentRoutes = SERVICES.map(
    (service) => `/tratamientos/${service.id}`,
  );

  const professionalRoutes = PROFESSIONALS.map(
    (professional) =>
      `/profesionales/${professional.id}`,
  );

  const routes = [
    ...staticRoutes,
    ...treatmentRoutes,
    ...professionalRoutes,
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === ""
        ? 1
        : route === "/tratamientos" ||
            route === "/profesionales"
          ? 0.9
          : route.startsWith("/tratamientos/") ||
              route.startsWith("/profesionales/")
            ? 0.8
            : 0.7,
  }));
}