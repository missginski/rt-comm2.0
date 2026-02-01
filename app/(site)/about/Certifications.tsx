import { getAboutPage } from "@/sanity/sanity.query";
import { AboutPageType } from "@/types";

export default async function Certifications() {
  const aboutPage: AboutPageType = await getAboutPage();
  const certs = aboutPage?.certification?.certItems ?? [];

  return(
    <section className="bg-charcoal-mid">

      <div className="container max-w-[920px] p-standard-mobile md:p-standard mx-auto">
        <div className="cert-wrapper flex justify-evenly flex-wrap">
          {certs.map((cert) => (
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