"use client";

import { useMemo, useState } from "react";
import type { ServiceType } from "@/types";
import { urlFor } from "@/sanity/lib/image";

export default function ServicesIndexDetail({
  services,
}: {
  services: ServiceType[];
}) {
  const firstId = useMemo(() => services?.[0]?._id ?? null, [services]);
  const [activeId, setActiveId] = useState<string | null>(firstId);

  const active = useMemo(
    () => services.find((s) => s._id === activeId) ?? services?.[0] ?? null,
    [services, activeId]
  );

  if (!services?.length || !active) return null;

  const imgUrl = active.image
    ? urlFor(active.image)
    .width(1200)
    .height(700)
    .fit("crop")
    .auto("format")
    .url()
    : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[480px_1fr]">

      {/* Service List */}
      <div className="rounded-2xl bg-charcoal-mid/30">
        <div className="flex flex-col">
          {services.map((s) => {
            const isActive = s._id === active._id;

            return (
              <button
                key={s._id}
                type="button"
                onClick={() => setActiveId(s._id)}
                className={[
                  "text-left w-full px-5 py-5 md:px-6 md:py-6 transition",
                  isActive
                    ? "bg-white/[0.05]"
                    : "bg-transparent hover:bg-white/[0.03]",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span
                        className={[
                          "h-3.5 w-3.5 rounded-full",
                          isActive ? "bg-[var(--color-primary)]" : "bg-primary/50",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                      <div className="text-width-xs text-grey-100 font-semibold text-base md:text-2xl leading-snug sm:max-w-[1000px] md:max-w-[1000px] lg:max-w-[400px]">
                        {s.title}
                      </div>
                    </div>
                  </div>
                </div>
              </button>

            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="rounded-2xl bg-charcoal-mid/30 overflow-hidden h-[1050px] sm:h-[850px]">

        {imgUrl && (
          <div className="h-56 md:h-72 w-full overflow-hidden">
            <img
              src={imgUrl}
              alt={active.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-grey-100">
            {active.title}
          </h3>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-grey-100/90 leading-relaxed whitespace-pre-line">
              {active.bodyText}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}