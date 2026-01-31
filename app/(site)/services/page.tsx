import { getServices } from "@/sanity/sanity.query"
import { ServiceType } from "@/types"
import { urlFor } from "@/sanity/lib/image";

export default async function ServicesPage() {
  const services: ServiceType[] = await getServices();

  return(
    <section className="mx-auto container max-w-xl px-10 py-34">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          Our Services
        </h1>
        <p className="mt-3 text-base opacity-80">
          A selection of work and recent highlights.
        </p>
      </div>

      <ul className="space-y-6">

        {services.map((s) => {
          const imgSrc = urlFor(s.image)
            .width(600)
            .height(450)
            .fit("crop")
            .auto("format")
            .url();

          return (
            <li 
              key={s._id} 
              className="rounded-2xl bg-white/[0.02] transition hover:bg-white/[0.04] p-[1.5rem]"
            >
              <div className="aspect-[4/3] overflow-hidden max-w-[600px] rounded-2xl border border-white/10 bg-white/5 m-auto">
                <img 
                  src={imgSrc} 
                  alt={s.title} 
                  className="h-full w-full object-cover" 
                  loading="lazy" />
              </div>
              <h2 className="text-2xl my-2">{s.title}</h2>
              <p className="text-base">
                {s.bodyText}
              </p>
            </li>
          );
        })}

      </ul>
    </section>
  )
}