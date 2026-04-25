import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal-auth";
import Link from "next/link";

export default function DashboardPage() {
  const user = getPortalSession();

  if (!user) {
    redirect("/student-portal/login");
  }

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">
              Welcome, {user.name}
            </h1>

            <p className="mt-4 text-slate-600">
              Role: {user.role} | Email: {user.email}
            </p>
          </div>

          {user.role === "admin" && (
            <Link
              href="/student-portal/admin"
              className="inline-flex rounded-full bg-[#0b3b5d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#092f4a]"
            >
              Go to Admin Panel →
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            Admissions status (coming soon)
          </div>
          <div className="rounded-xl border p-6">
            Fees & payments (coming soon)
          </div>
          <div className="rounded-xl border p-6">
            Courses & timetable (coming soon)
          </div>
          <div className="rounded-xl border p-6">
            Results (coming soon)
          </div>
        </div>

        <Link
          href="/student-portal/logout"
          className="mt-10 inline-block text-sm text-red-600"
        >
          Logout
        </Link>
      </div>
    </main>
  );
}
