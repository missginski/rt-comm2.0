import { getAboutPage } from "@/sanity/sanity.query";
import { AboutPageType } from "@/types";

export default async function Certifications() {
  const aboutPage: AboutPageType = await getAboutPage();

  return(
    <section className="bg-charcoal-mid">
      <div className="container max-w-xl p-standard-mobile md:p-standard mx-auto">
        <h2 className="text-center font-display text-3xl md:text-4xl font-semibold mb-4 md:mb-8">
          {aboutPage.certification.headline}
        </h2>
        <div className="cert-wrapper flex justify-evenly flex-wrap gap-x-40 gap-y-15 items-center">
          {aboutPage.certification.certItems.map((cert) => (
            <div key={cert.title} className="cert w-[220px] p-2">
              <img src={cert.logoImageUrl} alt={cert.title} />
              <h3 className="text-center pt-4 text-xl">{cert.title} </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}