import { sql } from "@vercel/postgres";

export type DbPortalUser = {
  id: number;
  name: string;
  email: string;
  credential_hash: string;
  role: string;
  status: string;
  created_at: string;
};

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS portal_users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      credential_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

export async function createPortalUser(name: string, email: string, credentialHash: string, role: string) {
  await createTables();

  const result = await sql`
    INSERT INTO portal_users (name, email, credential_hash, role, status)
    VALUES (${name}, ${email.toLowerCase()}, ${credentialHash}, ${role}, 'active')
    RETURNING id, name, email, role, status, created_at;
  `;

  return result.rows[0];
}

export async function findPortalUser(email: string) {
  await createTables();

  const result = await sql`
    SELECT * FROM portal_users WHERE email = ${email.toLowerCase()} AND status = 'active';
  `;

  return result.rows[0] as DbPortalUser | undefined;
}

export async function listPortalUsers() {
  await createTables();

  const result = await sql`
    SELECT id, name, email, role, status, created_at
    FROM portal_users
    ORDER BY created_at DESC;
  `;

  return result.rows;
}
