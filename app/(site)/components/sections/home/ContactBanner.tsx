import Link from "next/link";
import { getHomepage } from "@/sanity/sanity.query";
import { HomepageType } from "@/types";

export default async function ContactBanner() {
  const homepage: HomepageType = await getHomepage();

  return(
    <section 
      className="bg-charcoal-mid bg-cover relative h-[285px]"
      style={{
        backgroundImage: `url(${homepage.contact.imageUrl})`,
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[3px] bg-black/40">
        <div className="mx-auto container max-w-xl px-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-grey-100 mb-3">
                {homepage.contact.title}
              </h3>
              <p className="text-grey-400 max-w-lg">
                {homepage.contact.description}
              </p>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                bg-[var(--color-primary)]
                hover:bg-[var(--color-primary-soft)]
                text-white font-semibold
                rounded-full px-6 py-3
                transition-colors
                whitespace-nowrap"
            >
              {homepage.contact.btnText}
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}