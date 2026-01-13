import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/sanity/sanity.query";

function ProjectHero({
  title,
  imageUrl,
  imageAlt,
}: {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
}) {
  return (
    <header>
      <Link
        href="/projects"
        className="inline-flex text-sm opacity-70 hover:opacity-100"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight">{title}</h1>

      {imageUrl ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-[16/9] w-full">
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ProjectMeta({
  client,
  location,
}: {
  client?: string;
  location?: string;
}) {
  if (!client && !location) return null;

  return (
    <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-2">
      {client ? (
        <div>
          <dt className="text-sm opacity-60">Client</dt>
          <dd className="mt-1 text-lg">{client}</dd>
        </div>
      ) : null}

      {location ? (
        <div>
          <dt className="text-sm opacity-60">Location</dt>
          <dd className="mt-1 text-lg">{location}</dd>
        </div>
      ) : null}
    </dl>
  );
}

function ProjectBody({ text }: { text?: string }) {
  if (!text) return null;

  const paragraphs = text
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="space-y-5 text-lg leading-relaxed opacity-90">
      {paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </section>
  );
}

function ProjectCta() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h2 className="text-2xl font-medium">Want something similar?</h2>
      <p className="mt-2 opacity-80">
        Let’s talk about your goals and build a site that’s easy to maintain.
      </p>
      <Link
        href="/contact"
        className="mt-4 inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm hover:bg-white/[0.06]"
      >
        Contact →
      </Link>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <ProjectHero
        title={project.title}
        imageUrl={project.imageUrl}
        imageAlt={project.imageAlt}
      />

      <div className="mt-10 space-y-10">
        <ProjectMeta client={project.client} location={project.location} />
        <ProjectBody text={project.description} />
        <ProjectCta />
      </div>
    </main>
  );
}
