import { getHomepage } from "@/sanity/sanity.query";
import { HomepageType } from "@/types";
import { getIcon } from "@/sanity/lib/lucideIcons";

export default async function ValueProps() {
  const homepage: HomepageType = await getHomepage();

  return (
    <section className="bg-charcoal-mid">
      <div className="mx-auto mx-auto container max-w-xl p-standard-mobile md:p-standard">
        <div className="flex items-center gap-8 lg:flex-row flex-col">
          {/* Left: Value props list */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-display md:text-4xl font-semibold text-grey-100 mb-4">
              {homepage.valProps.title}
            </h2>
            <p className="text-base md:text-lg text-grey-400 mb-8 max-w-xl">
              {homepage.valProps.description}
            </p>
            <ul  className="space-y-4 text-base md:text-lg grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-8 max-w-[542px] m-auto lg:m-0">
              {homepage.valProps.valPropItems.map((prop) => (
              <li key={prop.description} className="flex items-center gap-3 text-grey-400">
                {(() => {
                  const Icon = getIcon(prop.icon);
                  return (
                    <span className="mt-[2px] inline-flex h-10 w-10 items-center justify-center">
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
                src={homepage.valProps.imageUrl}
                alt={homepage.valProps.image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}