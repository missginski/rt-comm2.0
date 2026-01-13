import Link from "next/link";
import { getProject } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";

export default async function ProjectsPage() {
  const project: ProjectType[] = await getProject();

  return (
    <section className="mx-auto container max-w-xl px-10 py-34">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          Project Spotlight
        </h1>
        <p className="mt-3 text-base opacity-80">
          A selection of work and recent highlights.
        </p>
      </header>

      <ul className="space-y-6">
        {project.map((p) => (
          <li
            key={p._id}
            className="rounded-2xl bg-white/[0.02] transition hover:bg-white/[0.04]"
          >
            <Link 
              href={`/projects/${p.slug}`}
              className="group block">

              <div className="flex items-stretch">
                {/* Left: Image */}
                <div className="relative w-1/2">
                  <div className="aspect-[5/3] w-full rounded-l-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={p.imageUrl}
                      alt={p.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Right: Text */}
                <div className="p-12 w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-medium">
                    {p.title}
                  </h2>
                  <p>
                    <span>{p.location}</span> | <span>{p.client}</span>
                  </p>
                  {p.description ? (
                    <p className="my-3 text-lg opacity-80">
                      {p.excerpt}
                    </p>
                  ) : null}
                  <span className="block text-lg opacity-60 transition group-hover:opacity-90">
                    View Project →
                  </span>
                </div>
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
