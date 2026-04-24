import { programmes } from "@/data/site";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ProgrammePage({
  params,
}: {
  params: { slug: string };
}) {
  const programme = programmes.find((p) => slugify(p.title) === params.slug);

  if (!programme) return <div className="p-10">Programme not found</div>;

  return (
    <main className="pt-28 pb-20">
      <section className="mx-auto max-w-5xl px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
          KPMU Programme
        </p>

        <h1 className="text-4xl font-bold text-slate-950">
          {programme.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          {programme.description}
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            What you will study
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {programme.items.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-slate-50 p-4 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-semibold">Why choose KPMU?</h2>
          <p className="mt-4 leading-7 text-slate-200">
            KPMU University College combines academic quality, practical
            learning, AI-powered student support, and career-focused preparation
            for Zambia&apos;s next generation of professionals.
          </p>

          <a
            href="/admissions"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
