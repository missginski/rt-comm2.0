import ServiceHero from "./ServiceHero";
import ContactBanner from "../components/sections/home/ContactBanner";
import ServiceClient from "./ServiceClient"
import { getServicesPage, getServices } from "@/sanity/sanity.query";
import type { ServicesPageType, ServiceType } from "@/types";

export const metadata = {
  title: "Fiber Splicing & Testing Services",
  description:
    "Professional fiber optic splicing, OTDR testing, and emergency repair services for enterprise infrastructure.",
};

export default async function ServicesPage() {
  const servicesPage: ServicesPageType | null = await getServicesPage();
  const services: ServiceType[] = await getServices();
  if (!servicesPage) return null;
  
  return(
    <main className="min-h-screen bg-charcoal-dark">
      <ServiceHero />

      <section className="bg-charcoal-dark">
        <div className="container max-w-xl p-standard-mobile md:p-standard mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-grey-100">
              Services
            </h2>
            <p className="mt-2 text-grey-400 text-sm md:text-base">
              Click a service to view details.
            </p>
          </div>

          <ServiceClient services={services} />
        </div>
      </section>

      <ContactBanner />
    </main>
  )
}