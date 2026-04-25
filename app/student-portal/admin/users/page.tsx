import Link from "next/link";
import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal-auth";
import { KeyRound, LockKeyhole, Mail, ShieldCheck, UserPlus, UsersRound } from "lucide-react";

const demoUsers = [
  {
    name: "KPMU Demo Student",
    username: "student@kpmuc.com",
    role: "Student",
    status: "Active",
    passwordStatus: "Temporary password issued",
  },
  {
    name: "KPMU Portal Admin",
    username: "admin@kpmuc.com",
    role: "Administrator",
    status: "Active",
    passwordStatus: "Admin password active",
  },
  {
    name: "Registry Officer",
    username: "registry@kpmuc.com",
    role: "Registry",
    status: "Pending setup",
    passwordStatus: "Not yet issued",
  },
  {
    name: "Finance Officer",
    username: "finance@kpmuc.com",
    role: "Finance",
    status: "Pending setup",
    passwordStatus: "Not yet issued",
  },
];

const rules = [
  "Students should receive a student number or student email after admission approval.",
  "Staff should use official KPMU email addresses only.",
  "Temporary passwords must be changed at first login.",
  "Inactive students or former staff should be deactivated immediately.",
];

export default function UserManagementPage() {
  const user = getPortalSession();

  if (!user) {
    redirect("/student-portal/login");
  }

  if (user.role !== "admin") {
    redirect("/student-portal/dashboard");
  }

  return (
    <main className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b3b5d]/10 px-4 py-2 text-sm font-medium text-[#0b3b5d]">
              <ShieldCheck className="h-4 w-4" />
              Admin-only user control
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              User Management Panel
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Issue usernames and passwords, assign roles, reset access, and control who can enter the KPMU Student Portal.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/student-portal/admin" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Back to Admin Panel
            </Link>
            <Link href="/student-portal/logout" className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
              Logout
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <UserPlus className="h-6 w-6 text-[#0b3b5d]" />
              <h2 className="text-2xl font-semibold text-slate-950">Create User Account</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Demo form for the next database phase. Once connected, this will save real users and generate temporary passwords.
            </p>

            <form className="mt-6 space-y-4">
              <input disabled placeholder="Full name" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm" />
              <input disabled placeholder="Email or student number" className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm" />
              <select disabled className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
                <option>Select role</option>
                <option>Student</option>
                <option>Administrator</option>
                <option>Registry</option>
                <option>Finance</option>
                <option>Lecturer</option>
              </select>
              <button disabled className="w-full rounded-xl bg-slate-300 p-3 text-sm font-semibold text-white">
                Generate Temporary Password Soon
              </button>
            </form>

            <div className="mt-6 rounded-2xl bg-[#0b3b5d] p-5 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <KeyRound className="h-4 w-4" />
                Recommended KPMU Access Rule
              </div>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Students use student number or student email. Staff use official KPMU email. All first passwords should be temporary and changed after first login.
              </p>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <UsersRound className="h-6 w-6 text-[#0b3b5d]" />
                  <h2 className="text-2xl font-semibold text-slate-950">Portal Users</h2>
                </div>
                <p className="mt-3 text-sm text-slate-500">Current demo user register.</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Username</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Password</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {demoUsers.map((account) => (
                    <tr key={account.username} className="bg-white">
                      <td className="px-4 py-4 font-medium text-slate-900">{account.name}</td>
                      <td className="px-4 py-4 text-slate-700">{account.username}</td>
                      <td className="px-4 py-4 text-slate-700">{account.role}</td>
                      <td className="px-4 py-4 text-slate-700">{account.status}</td>
                      <td className="px-4 py-4 text-slate-700">{account.passwordStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <LockKeyhole className="h-6 w-6 text-[#0b3b5d]" />
            <h2 className="text-2xl font-semibold text-slate-950">Account Control Rules</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rules.map((rule, index) => (
              <div key={rule} className="flex gap-3 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0b3b5d] text-xs font-semibold text-white">{index + 1}</span>
                {rule}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] bg-teal-50 p-6 md:p-8">
          <div className="flex items-center gap-3 text-teal-900">
            <Mail className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">How users should receive credentials</h2>
          </div>
          <p className="mt-4 max-w-4xl leading-8 text-teal-900/80">
            Registry should issue student usernames after admission approval. ICT or the Vice-Chancellor's office should issue staff/admin usernames. Passwords should never be sent publicly; use a private email, sealed printed note, or SMS followed by mandatory password change.
          </p>
        </section>
      </div>
    </main>
  );
}
