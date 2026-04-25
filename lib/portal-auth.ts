import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export type PortalRole = "student" | "admin";

export type PortalUser = {
  name: string;
  email: string;
  role: PortalRole;
};

const COOKIE_NAME = "kpmu_portal_session";
const SESSION_DAYS = 1;

const demoUsers: Array<PortalUser & { password: string }> = [
  {
    name: "KPMU Demo Student",
    email: process.env.PORTAL_STUDENT_EMAIL ?? "student@kpmuc.com",
    password: process.env.PORTAL_STUDENT_PASSWORD ?? "KPMU2026!",
    role: "student",
  },
  {
    name: "KPMU Portal Admin",
    email: process.env.PORTAL_ADMIN_EMAIL ?? "admin@kpmuc.com",
    password: process.env.PORTAL_ADMIN_PASSWORD ?? "KPMUAdmin2026!",
    role: "admin",
  },
];

function getSecret() {
  return process.env.PORTAL_AUTH_SECRET ?? "kpmu-demo-secret-change-before-production";
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function encodeSession(user: PortalUser) {
  const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function decodeSession(value?: string): PortalUser | null {
  if (!value) return null;

  const [payload, signature] = value.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return null;

  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as PortalUser;
  } catch {
    return null;
  }
}

export async function authenticatePortalUser(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = demoUsers.find((item) => item.email.toLowerCase() === normalizedEmail);

  if (!user || user.password !== password) return null;

  const { password: _password, ...safeUser } = user;
  return safeUser;
}

export function setPortalSession(user: PortalUser) {
  cookies().set(COOKIE_NAME, encodeSession(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * SESSION_DAYS,
  });
}

export function getPortalSession() {
  return decodeSession(cookies().get(COOKIE_NAME)?.value);
}

export function clearPortalSession() {
  cookies().delete(COOKIE_NAME);
}
