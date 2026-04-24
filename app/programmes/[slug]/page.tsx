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

  if (!programme) {
    return <div className="p-10">Programme not found</div>;
  }

  const facts =
    programme.title === "BSc Agriculture"
      ? [
          { label: "Duration", value: "4 Years" },
          { label: "Study Mode", value: "Full-Time / Blended Learning" },
          { label: "Intake", value: "2027 Intake" },
          { label: "Qualification Level", value: "Undergraduate Degree" },
        ]
      : [
          { label: "Duration", value: "4 Years" },
          { label: "Study Mode", value: "Full-Time / Blended Learning" },
          { label: "Intake", value: "2027 Intake" },
          { label: "Qualification Level", value: "Undergraduate Degree" },
        ];

  const careerOutcomes =
    programme.title === "BSc Agriculture"
      ? [
          "Farm Manager",
          "Agribusiness Officer",
          "Crop Production Specialist",
          "Agricultural Extension Officer",
          "Sustainable Farming Entrepreneur",
        ]
      : [
          "Graduate Trainee",
          "Project Officer",
          "Operations Assistant",
          "Entrepreneur",
        ];

  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <section className="max-w-6xl mx-auto px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
          KPMU Programme
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          {programme.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          {programme.description}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {fact.label}
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            What you will study
          </h2>

          <ul className="grid gap-4 md:grid-cols-2">
            {programme.items.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700 shadow-sm hover:shadow-md transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg border border-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Career outcomes
          </h2>

          <ul className="grid gap-4 md:grid-cols-2">
            {careerOutcomes.map((career) => (
              <li
                key={career}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm"
              >
                {career}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl bg-[#0B3D5C] p-10 text-white shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Why choose KPMU?</h2>

          <p className="leading-7 text-white/90 max-w-3xl">
            KPMU University College combines academic quality, practical learning,
            AI-powered student support, and career-focused preparation for
            Zambia’s next generation of professionals.
          </p>

          <a
            href="/admissions"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-[#0B3D5C] hover:bg-slate-100 transition"
          >
            Apply Now →
          </a>
        </div>
      </section>
    </main>
  );
}
