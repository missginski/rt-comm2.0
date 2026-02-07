import { ContactType } from "@/types";
import ContactForm from "./ContactForm";

export default function ContactSectionClient({
  contactPage,
}: {
  contactPage: ContactType | null;
}) {
  if (!contactPage) return null;

  return (
    <section className="bg-charcoal-mid">
      <div className="mx-auto container max-w-xl p-standard-mobile md:p-standard">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          <div>
            {/* <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
              Contact
            </p> */}
            <h1 className="text-3xl font-display md:text-4xl font-semibold text-grey-100 mb-4">
              {contactPage.title}
            </h1>
            <p className="text-sm md:text-base text-grey-200 max-w-xl">
              {contactPage.description}
            </p>

            <div className="contact-info">
              <div className="contacts flex justify-between">
                {contactPage.contactItems.map((contact) => (
                  <div key={contact.name} className="mt-8 text-sm text-grey-200 space-y-1">
                    <p className="text-xl font-bold text-grey-200">
                      {contact.name}
                    </p>
                    <p className="text-grey-200 text-sm">
                      <a className="hover:underline transition duration-500" href={`tel:${contact.phone}`}>
                        {contact.phone}
                      </a>
                    </p>
                    <p className="text-grey-200 text-sm">
                      <a className="hover:underline transition duration-500" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              <div className="address">
                {contactPage.address.map((item) => (
                  <div key={item.street} className="mt-8 text-sm text-grey-400 space-y-1">
                    <p className="text-xl font-bold text-grey-200">
                      Address:
                    </p>
                    <p className="text-grey-200 text-sm">
                      {item.street}
                    </p>
                    <p>
                      {item.line2}
                    </p>
                    <p className="text-grey-200 text-sm">{item.city}, {item.state} {item.zipcode}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <ContactForm />
          </div>

          {/* Right: Image */}
          <div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={contactPage.imageUrl}
                  alt={contactPage.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}