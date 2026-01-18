import { getHomepage } from "@/sanity/sanity.query";
import { HomepageType } from "@/types";
import Link from "next/link";
import ServicesLower from "./ServicesLower";

export async function ServicesPreview() {
  const homepage: HomepageType = await getHomepage();

  return (
    <section className="bg-charcoal-dark">
      <div className="mx-auto container max-w-xl p-standard-mobile md:p-standard">

        <h2 className="font-display text-3xl md:text-4xl font-semibold text-grey-100 mb-4">
          {homepage.services.title}
        </h2>
        <p className="text-base md:text-lg text-grey-400 w-full md:w-1/2 lg:mb-0 mb-4">
          {homepage.services.description}
        </p>
        
        <ServicesLower
          items={homepage.services.serviceItems}
        />

        <Link href="/services">
          <button className="
            bg-[var(--color-primary)]
            hover:bg-[var(--color-primary-soft)]
            mx-auto
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