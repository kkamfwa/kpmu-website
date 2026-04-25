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
        <h1 className="text-3xl font-semibold text-slate-950">
          Welcome, {user.name}
        </h1>

        <p className="mt-4 text-slate-600">
          Role: {user.role} | Email: {user.email}
        </p>

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
