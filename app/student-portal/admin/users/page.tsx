import Link from "next/link";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { getPortalSession } from "@/lib/portal-auth";
import { createPortalUser, listPortalUsers } from "@/lib/db";
import { KeyRound, LockKeyhole, Mail, ShieldCheck, UserPlus, UsersRound } from "lucide-react";

const rules = [
  "Students should receive a student number or student email after admission approval.",
  "Staff should use official KPMU email addresses only.",
  "Temporary access codes must be changed after first login once the reset workflow is added.",
  "Inactive students or former staff should be deactivated immediately.",
];

async function createUserAction(formData: FormData) {
  "use server";

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const role = String(formData.get("role") ?? "").trim().toLowerCase();
  const accessCode = String(formData.get("accessCode") ?? "");

  if (!name || !email || !role || !accessCode) {
    redirect("/student-portal/admin/users?error=Missing required user details");
  }

  const credentialHash = await hash(accessCode, 10);

  try {
    await createPortalUser(name, email, credentialHash, role);
    redirect("/student-portal/admin/users?created=1");
  } catch {
    redirect("/student-portal/admin/users?error=User could not be created. The email may already exist.");
  }
}

export default async function UserManagementPage({ searchParams }: { searchParams?: { created?: string; error?: string } }) {
  const user = getPortalSession();

  if (!user) {
    redirect("/student-portal/login");
  }

  if (user.role !== "admin") {
    redirect("/student-portal/dashboard");
  }

  const portalUsers = await listPortalUsers();

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
              Issue usernames and access codes, assign roles, reset access, and control who can enter the KPMU Student Portal.
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

        {searchParams?.created && (
          <div className="mt-8 rounded-2xl bg-green-100 p-4 text-sm font-medium text-green-800">
            User created successfully and saved to the database.
          </div>
        )}

        {searchParams?.error && (
          <div className="mt-8 rounded-2xl bg-red-100 p-4 text-sm font-medium text-red-800">
            {searchParams.error}
          </div>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <UserPlus className="h-6 w-6 text-[#0b3b5d]" />
              <h2 className="text-2xl font-semibold text-slate-950">Create User Account</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Create real portal users and save them permanently in the connected database.
            </p>

            <form action={createUserAction} className="mt-6 space-y-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm" />
              <input name="email" required placeholder="Email or student number" className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm" />
              <select name="role" required className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm">
                <option value="">Select role</option>
                <option value="student">Student</option>
                <option value="admin">Administrator</option>
                <option value="registry">Registry</option>
                <option value="finance">Finance</option>
                <option value="lecturer">Lecturer</option>
              </select>
              <input name="accessCode" required placeholder="Temporary access code" className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm" />
              <button className="w-full rounded-xl bg-[#0b3b5d] p-3 text-sm font-semibold text-white transition hover:bg-[#092f4a]">
                Create User
              </button>
            </form>

            <div className="mt-6 rounded-2xl bg-[#0b3b5d] p-5 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <KeyRound className="h-4 w-4" />
                Recommended KPMU Access Rule
              </div>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Students use student number or student email. Staff use official KPMU email. First access codes should be temporary and changed after first login once the reset workflow is added.
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
                <p className="mt-3 text-sm text-slate-500">Live users saved in the connected database.</p>
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {portalUsers.length === 0 && (
                    <tr className="bg-white">
                      <td colSpan={4} className="px-4 py-6 text-slate-500">
                        No database users yet. Create the first user using the form.
                      </td>
                    </tr>
                  )}

                  {portalUsers.map((account) => (
                    <tr key={account.id} className="bg-white">
                      <td className="px-4 py-4 font-medium text-slate-900">{account.name}</td>
                      <td className="px-4 py-4 text-slate-700">{account.email}</td>
                      <td className="px-4 py-4 text-slate-700">{account.role}</td>
                      <td className="px-4 py-4 text-slate-700">{account.status}</td>
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
            Registry should issue student usernames after admission approval. ICT or the Vice-Chancellor's office should issue staff/admin usernames. Access codes should never be sent publicly; use a private email, sealed printed note, or SMS followed by mandatory reset once the reset workflow is added.
          </p>
        </section>
      </div>
    </main>
  );
}
