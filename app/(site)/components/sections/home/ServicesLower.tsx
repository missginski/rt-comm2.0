"use client";

import { useMemo, useState } from "react";

export default function ServicesLower({
  items,
}: {
  items: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex ?? openIndex ?? 0;

  const activeImage = items[activeIndex]?.imageUrl;
  const activeAlt = items[activeIndex]?.imageAlt ?? items[activeIndex]?.title ?? "";

  return (
    <div className="flex items-center gap-8 lg:flex-row flex-col">
      {/* Left: Image */}
      <div className="relative w-full">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {activeImage ? (
            <img
              key={activeImage}
              src={activeImage}
              alt={activeAlt}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full grid place-items-center text-grey-400">
              No image
            </div>
          )}
        </div>
      </div>

      {/* Right: Accordion */}
      <div className="w-full space-y-4 h-[550px] flex flex-col justify-center">
        {items.map((item, idx) => { 
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="rounded-xl overflow-hidden hover:bg-charcoal-mid transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left p-4"
              >
                <h3 className="text-xl font-semibold text-grey-100">
                  {item.title}
                </h3>

                <span
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-red"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-grey-400 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
