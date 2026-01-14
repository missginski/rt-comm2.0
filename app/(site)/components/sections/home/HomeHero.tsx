import { getHomepage } from "@/sanity/sanity.query";
import type { HomepageType } from "@/types";
import Link from "next/link";

export default async function HomeHero() {
  const homepage: HomepageType = await getHomepage();

  if (!homepage) return null;

  return (
    <main className="bg-charcoal-dark">
      <div 
        className="h-[850px] relative bg-cover"
        style={{
          backgroundImage: `url(${homepage.hero.heroImageUrl})`,
        }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent backdrop-blur-[3px] bg-black/40">
          <div className="h-full flex items-center justify-end flex-col text-text-main">
            <div className="container max-w-xl p-standard mx-auto">
              <h1 className="font-display text-6xl py-6 font-semibold tracking-tight whitespace-pre-line">
                {homepage.hero.heroHeadline}
              </h1>
              <p className="pb-12 text-2xl whitespace-pre-line">
                {homepage.hero.heroSubhead}
              </p>
              <Link 
                href="/contact">
                <button className="
                  bg-[var(--color-primary)]
                  hover:bg-[var(--color-primary-soft)]
                  text-white
                  font-semibold
                  rounded-full px-6 py-2.5
                  transition-colors
                ">
                  {homepage.hero.heroBtnText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}