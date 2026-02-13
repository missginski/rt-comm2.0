import { getHomepage } from "@/sanity/sanity.query";
import { HomepageType } from "@/types";
import { getIcon } from "@/sanity/lib/lucideIcons";
import { urlFor } from "@/sanity/lib/image";

export default async function ValueProps() {
  const homepage: HomepageType = await getHomepage();

  const imgSrc = homepage.valProps.image
  ? urlFor(homepage.valProps.image)
      .width(1200)
      .height(900) 
      .fit("crop")
      .auto("format")
      .url()
  : homepage.valProps.imageUrl;

  const imgAlt = homepage.valProps.imageAlt ?? "";

  return (
    <section className="bg-charcoal-mid">
      <div className="mx-auto container max-w-xl p-standard-mobile md:p-standard">
        <div className="flex items-center gap-8 lg:flex-row flex-col-reverse">
          {/* Left: Value props list */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-display md:text-4xl font-semibold text-grey-100 mb-4">
              {homepage.valProps.title}
            </h2>
            <p className="text-base md:text-lg text-grey-400 mb-14 max-w-xl">
              {homepage.valProps.description}
            </p>
            <ul className="space-y-4 text-base md:text-lg grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-full m-auto lg:m-0">
              {homepage.valProps.valPropItems.map((prop) => (
              <li key={prop.description} className="flex items-center gap-3 text-grey-400 mb-0">
                {(() => {
                  const Icon = getIcon(prop.icon);
                  return (
                    <span className="inline-flex h-10 w-10 items-center justify-center">
                      {Icon ? (
                        <Icon className="h-6 w-6 text-red" aria-hidden="true" />
                      ) : (
                        <span className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  );
                })()}
                <span className="text-lg">{prop.description}</span>
              </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative lg:w-1/2 w-full">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={imgSrc}
                alt={imgAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}