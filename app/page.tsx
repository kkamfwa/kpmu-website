import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ProgrammeGrid } from "@/components/programme-grid";

const highlights = [
  {
    title: "HEA-ready academic direction",
    text: "Institutional quality assurance, programme structure, and governance designed for serious accreditation progress.",
    icon: ShieldCheck,
  },
  {
    title: "AI-powered student support",
    text: "A future-facing learning environment blending practical instruction with digital tools and applied innovation.",
    icon: Bot,
  },
  {
    title: "Industry-aligned pathways",
    text: "Academic programmes positioned around employability, entrepreneurship, agriculture, and modern business needs.",
    icon: GraduationCap,
  },
];

const stats = [
  { value: "3", label: "Core academic schools" },
  { value: "AI", label: "Digital-first academic direction" },
  { value: "24/7", label: "Modern learner engagement vision" },
  { value: "HEA", label: "Readiness-led institutional build" },
];

const modelCards = [
  {
    title: "Agriculture",
    text: "Grounded in Zambia’s real productive economy and practical learning.",
    icon: Building2,
  },
  {
    title: "Applied AI",
    text: "A forward-looking academic direction built around digital transformation.",
    icon: Cpu,
  },
  {
    title: "Governance",
    text: "Clear structure, programme coherence, and institutional seriousness.",
    icon: ShieldCheck,
  },
  {
    title: "Future-readiness",
    text: "Designed to serve students, partners, and long-term institutional growth.",
    icon: Sparkles,
  },
];

const admissionsSteps = [
  "Choose your preferred programme and review entry requirements",
  "Prepare academic records, identification, and supporting documents",
  "Submit your application and speak with admissions for guidance",
];

export default function HomePage() {
  return (
    <main>
      <section className="kpmu-shell kpmu-grid overflow-hidden px-6 py-24 md:py-32">
        <div className="kpmu-orb kpmu-orb-1" />
        <div className="kpmu-orb kpmu-orb-2" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10">
            <div className="kpmu-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700">
              <ShieldCheck className="h-4 w-4 text-teal-700" />
              HEA accreditation readiness built into the institution strategy
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] text-slate-950 md:text-7xl">
              KPMU University College
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              A premium higher education destination in Zambia combining academic
              integrity, practical programmes, and AI-powered learning for the
              next generation of leaders.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admissions" className="kpmu-button-primary">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/programmes" className="kpmu-button-secondary">
                Explore Programmes
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>Purpose-built for quality assurance</span>
              <span>Industry relevance</span>
              <span>Modern student experience</span>
            </div>
          </div>

          <div className="relative">
            <div className="kpmu-panel-dark relative rounded-[2rem] p-6 md:p-8">
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-teal-100/80">
                Why KPMU
              </div>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Designed for a confident, future-ready student journey
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="kpmu-stat rounded-[1.35rem] p-5">
                    <div className="text-4xl font-semibold">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-100/85">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-teal-700">
              Institutional Direction
            </div>
            <h2 className="kpmu-section-title mt-4 text-slate-950">
              Built with academic clarity, modern structure, and long-term credibility
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              KPMU University College is being shaped as a serious academic
              institution with practical relevance, disciplined programme design,
              and a student-centered model fit for Zambia’s future.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="kpmu-card rounded-[1.75rem] p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-teal-700">
                Our Schools
              </div>
              <h2 className="kpmu-section-title mt-4 text-slate-950">
                Academic pathways aligned with Zambia’s emerging economy
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Programmes are grouped into clear schools to support strong student
                navigation, institutional coherence, and future accreditation growth.
              </p>
            </div>

            <Link href="/programmes" className="kpmu-button-secondary">
              View All Programmes
            </Link>
          </div>

          <div className="mt-12">
            <ProgrammeGrid />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="kpmu-card rounded-[2rem] p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.28em] text-teal-700">
              Admissions
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950">
              A supportive admissions journey for ambitious students
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              KPMU’s admissions model is designed to be clear, personal, and
              encouraging, helping applicants move from enquiry to enrollment
              with confidence.
            </p>

            <div className="mt-8 space-y-4">
              {admissionsSteps.map((step, idx) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl bg-slate-100 px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {idx + 1}
                  </div>
                  <div className="pt-1 text-slate-700">{step}</div>
                </div>
              ))}
            </div>

            <Link href="/admissions" className="kpmu-button-primary mt-8">
              Start with Admissions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="kpmu-panel-dark rounded-[2rem] p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.28em] text-teal-100/80">
              KPMU Model
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A modern institution blending practical relevance with digital ambition
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {modelCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="kpmu-stat rounded-[1.4rem] p-5">
                    <Icon className="h-5 w-5 text-teal-100" />
                    <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-100/82">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="kpmu-divider mb-16" />

          <div className="kpmu-glass rounded-[2rem] px-8 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-teal-700">
                  Ready to Begin
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950">
                  Start your journey with KPMU University College
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                  Speak with admissions, explore programmes, and take the next
                  step toward a confident, future-facing university college experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/admissions" className="kpmu-button-primary">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="kpmu-button-secondary">
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
