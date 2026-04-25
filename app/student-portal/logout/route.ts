import { NextResponse } from "next/server";
import { clearPortalSession } from "@/lib/portal-auth";

export async function GET() {
  clearPortalSession();
  return NextResponse.redirect(new URL("/student-portal/login", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
}
