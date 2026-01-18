"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = { label: string; value: string | number };

function AnimatedNumber({ end, duration = 1200 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              setValue(Math.floor(end * progress));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={spanRef}>{value.toLocaleString()}</span>;
}

export default function StatsStripClient({ statItems }: { statItems: StatItem[] }) {
  return (
    <section className="bg-charcoal-mid">
      <div className="mx-auto container max-w-xl px-10 py-6 md:py-8">
        <div className="flex items-center flex-wrap lg:justify-between justify-center">
          {statItems.length ? (
            statItems.map((stat) => (
              <div key={stat.label} className="flex flex-col flex-wrap items-center w-[305px] py-8">
                <span className="text-4xl font-display font-semibold text-grey-100">
                  <AnimatedNumber end={Number(stat.value) || 0} />+
                </span>
                <span className="mt-1 text-[14px] font-medium tracking-[0.18em] uppercase text-red">
                  {stat.label}
                </span>
              </div>
            ))
          ) : (
            <span className="text-sm opacity-60">No stats found.</span>
          )}
        </div>
      </div>
    </section>
  );
}