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


        {/* <div className="grid gap-8 md:grid-cols-3">
          {homepage.services.serviceItems.map((item) => (
            <div
              key={item.title}
              className="
                group border border-white/10 rounded-xl p-8 
                transition-all duration-300 
                hover:border-red hover:bg-charcoal-mid 
                hover:-translate-y-1 cursor-pointer
                hover:shadow-[0_0_30px_rgba(232,66,58,0.15)]">
              <h3 className="text-xl font-semibold text-grey-100 mb-4">
                {item.title}
              </h3>

              <p className="text-grey-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <span className="text-red text-sm font-medium inline-flex items-center group-hover:text-red transition-colors">
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          ))}
        </div> */}
        

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