import Link from "next/link";
import { ArrowRight, CalendarDays, ClipboardCheck, CreditCard, FileText, GraduationCap, MessageSquareText, ShieldCheck, UserRoundCheck } from "lucide-react";

const modules = [
  { title: "Admissions & Applications", text: "Track applications, documents, offers, and admissions communication.", icon: ClipboardCheck },
  { title: "Student Records", text: "Access student profiles, programme details, registration status, and records.", icon: UserRoundCheck },
  { title: "Fees & Payments", text: "View invoices, fee balances, receipts, and approved payment instructions.", icon: CreditCard },
  { title: "Courses & Timetables", text: "Review course registration, class schedules, calendars, and learning activities.", icon: CalendarDays },
  { title: "Results & Transcripts", text: "Access published results, progression decisions, and transcript requests.", icon: FileText },
  { title: "Student Support", text: "Submit support requests and receive official student announcements.", icon: MessageSquareText },
];

const roadmap = [
  "Phase 1: Portal landing page and service structure",
  "Phase 2: Student login, admissions tracking, and document uploads",
  "Phase 3: Fees, course registration, results, and support workflows",
  "Phase 4: Azure database, role-based access, and institutional reporting",
];

export default function StudentPortalPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#062b45] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.22),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85">
              <ShieldCheck className="h-4 w-4" />
              Secure digital student services framework
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
              KPMU Student Portal
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              A future-ready gateway for admissions, student records, fees, course registration, results, and academic support.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#portal-modules" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b3b5d] transition hover:bg-white/90">
                View Portal Modules <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Contact Registry
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/10 p-8 shadow-2xl">
            <GraduationCap className="h-10 w-10 text-teal-100" />
            <h2 className="mt-6 text-3xl font-semibold">Portal access coming soon</h2>
            <p className="mt-4 leading-8 text-white/75">
              This page establishes the student portal framework. Full login, database, payments, and student records will be connected in the next development phase.
            </p>
            <div className="mt-7 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-white/72">
              Applicants and students should use the Admissions and Contact pages while the secure portal is being implemented.
            </div>
          </div>
        </div>
      </section>

      <section id="portal-modules" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-teal-700">Portal Modules</div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Student services designed for academic control and institutional credibility
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The portal is structured around the core operating controls KPMU will need as it moves from admissions readiness to full student lifecycle management.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-100 text-[#0b3b5d]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#0b3b5d] p-8 text-white md:p-10">
            <h2 className="text-4xl font-semibold leading-tight">Built for the full student lifecycle</h2>
            <p className="mt-5 leading-8 text-white/78">
              KPMU should begin with a professional portal interface now, then connect secure login, student records, payments, and academic data when the operating systems are ready.
            </p>
            <Link href="/admissions" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b3b5d] transition hover:bg-white/90">
              Start with Admissions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="text-sm uppercase tracking-[0.24em] text-teal-700">Implementation Roadmap</div>
            <div className="mt-8 space-y-4">
              {roadmap.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b3b5d] text-sm font-semibold text-white">{index + 1}</div>
                  <p className="pt-1 leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
