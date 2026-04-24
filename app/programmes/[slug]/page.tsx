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
  const programme = programmes.find(
    (p) => slugify(p.title) === params.slug
  );

  if (!programme) {
    return <div className="p-10">Programme not found</div>;
  }

  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <section className="max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
          KPMU Programme
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          {programme.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          {programme.description}
        </p>

        {/* WHAT YOU WILL STUDY */}
        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            What you will study
          </h2>

          <ul className="grid gap-4 md:grid-cols-2">
            {programme.items.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* WHY KPMU */}
        <div className="mt-12 rounded-3xl bg-[#0B3D5C] p-8 text-white shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Why choose KPMU?
          </h2>

          <p className="leading-7 text-white/90">
            KPMU University College combines academic quality, practical learning,
            AI-powered student support, and career-focused preparation for Zambia’s
            next generation of professionals.
          </p>

          <a
            href="/admissions"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition"
          >
            Apply Now →
          </a>
        </div>
      </section>
    </main>
  );
}
