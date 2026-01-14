import { getHomepage } from "@/sanity/sanity.query";
import type { HomepageType } from "@/types";
import Link from "next/link";

export default async function HomeAbout() {
  const homepage: HomepageType = await getHomepage();

  return (
    <section className="bg-charcoal-dark about mx-auto container max-w-xl p-20">
      <h2 className="text-center text-3xl font-display md:text-4xl font-semibold mb-8">
        {homepage.about.aboutHeadline}
      </h2>
      <p className="text-center text-lg text-grey-400 mb-8 w-4xl mx-auto whitespace-pre-line">
        {homepage.about.aboutText}
      </p>
      <Link href="/About">
        <button className="
          bg-[var(--color-primary)]
          hover:bg-[var(--color-primary-soft)]
          text-white
          font-semibold
          rounded-full px-6 py-2.5
          transition-colors
          block mx-auto">
          {homepage.about.aboutBtnText}
        </button>
      </Link>
    </section>
  );
}