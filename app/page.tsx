import {
  CTA,
  Hero,
  Locations,
  Professionals,
  Services,
  Technology,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Professionals />
      <Technology />
      <Locations />
      <CTA/>
    </>
  );
}