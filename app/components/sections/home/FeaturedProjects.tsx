import { getProjectsPreview } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import Link from "next/link";

export default async function FeaturedProjects() {
  const projects: ProjectType[] = await getProjectsPreview();

  return (
    <section className="bg-charcoal-dark py-20">
      <div className="mx-auto container max-w-xl px-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display md:text-4xl font-semibold text-grey-100">
            Recent Projects
          </h2>
          <Link
            href="/projects"
            className="text-lg text-grey-100 transition group-hover:text-primary transition duration-500">
              View All Projects →
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p._id}
              href={`/projects/${p.slug}`}
              className="
                group block border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-red hover:bg-charcoal-mid hover:border-red hover:bg-charcoal-mid hover:shadow-[0_0_30px_rgba(232,66,58,0.15)]
              "
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-500 group-hover:scale-105
                  "
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-grey-100">
                  {p.title}
                </h3>
                <p className="mb-3 text-sm">
                  <span>{p.location}</span> | <span>{p.client}</span>
                </p>
                <p className="text-grey-400 text-base leading-relaxed mb-5">
                  {p.excerpt}
                </p>
                <span className="text-red text-sm font-medium inline-flex items-center group-hover:text-red transition-colors">
                  View Project
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}