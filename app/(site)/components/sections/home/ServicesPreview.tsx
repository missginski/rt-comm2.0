import { getHomepage } from "@/sanity/sanity.query";
import { HomepageType } from "@/types";
import Link from "next/link";
import ServicesAccordion from "./ServicesAccordion";

export async function ServicesPreview() {
  const homepage: HomepageType = await getHomepage();

  return (
    <section className="bg-charcoal-dark py-20">
      <div className="mx-auto container max-w-xl px-10">

        <h2 className="text-3xl font-display md:text-4xl font-semibold text-grey-100 mb-4">
          {homepage.services.title}
        </h2>
        <p className="text-sm md:text-base text-grey-400 w-1/2">
          {homepage.services.description}
        </p>
        
        <ServicesAccordion
          items={homepage.services.serviceItems}
        />

        <Link href="/services">
          <button className="
            bg-[var(--color-primary)]
            hover:bg-[var(--color-primary-soft)]
            mx-auto
            mt-12
            block
            text-white
            font-semibold
            rounded-full px-6 py-2.5
            transition-colors">
            {homepage.services.btnText}
          </button>
        </Link>
        
      </div>
    </section>
  );
}