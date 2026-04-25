import { redirect } from "next/navigation";
import { authenticatePortalUser, setPortalSession } from "@/lib/portal-auth";

async function loginAction(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const user = await authenticatePortalUser(email, password);

  if (!user) {
    redirect("/student-portal/login?error=Invalid credentials");
  }

  setPortalSession(user);
  redirect("/student-portal/dashboard");
}

export default function LoginPage({ searchParams }: { searchParams?: { error?: string } }) {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-semibold text-slate-950">Student Portal Login</h1>

        {searchParams?.error && (
          <div className="mt-4 rounded-xl bg-red-100 p-3 text-sm text-red-700">
            {searchParams.error}
          </div>
        )}

        <form action={loginAction} className="mt-8 space-y-4">
          <input
            name="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border p-3"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-xl border p-3"
          />
          <button className="w-full rounded-xl bg-[#0b3b5d] p-3 text-white">
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-600">
          Demo login:<br />
          student@kpmuc.com / KPMU2026!<br />
          admin@kpmuc.com / KPMUAdmin2026!
        </div>
      </div>
    </main>
  );
}
