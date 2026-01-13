"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getHomepage } from "@/sanity/sanity.query";
import { HomepageType } from "@/types";

export default function ContactSection() {
  const [homepage, setHomepage] = useState<HomepageType | null>(null);
    useEffect(() => {
      getHomepage().then(setHomepage);
    }, []);

  return (
    <section
      id="contact"
      className="bg-charcoal-mid py-16 md:py-20"
    >
      <div className="mx-auto container max-w-xl px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          <div>
            {/* <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
              Contact
            </p> */}
            <h2 className="text-3xl font-display md:text-4xl font-semibold text-grey-100 mb-4">
              {homepage?.contact.title}
            </h2>
            <p className="text-sm md:text-base text-grey-200 max-w-xl">
              {homepage?.contact.description}
            </p>

            <div className="contact-info">
              <div className="contacts flex justify-between">
                {homepage?.contact.contactItems.map((contact) => (
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
                {homepage?.contact.address.map((item) => (
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
            <div className="mt-12 rounded-2xl bg-white/[0.03] p-6 md:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // wire this up later to an API route / form service
                }}
                className="space-y-5"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
                      placeholder="Acme Networks"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
                    What do you need help with?
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white focus:border-white/50 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-black">
                      Select a service
                    </option>
                    <option value="installation" className="bg-black">
                      Installation
                    </option>
                    <option value="splicing" className="bg-black">
                      Splicing
                    </option>
                    <option value="testing" className="bg-black">
                      Testing
                    </option>
                    <option value="other" className="bg-black">
                      Multiple / Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none resize-none"
                    placeholder="Location, timeline, and any details about your fiber project."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors"
                >
                  Submit request
                </button>
              </form>
            </div>
          </div>

          {/* Right: Image */}
          <div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={homepage?.contact.imageUrl}
                  alt="Technician working with fiber infrastructure"
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