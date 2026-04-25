import { sql } from "@vercel/postgres";

export type DbPortalUser = {
  id: number;
  name: string;
  email: string;
  credential_hash: string;
  role: string;
  status: string;
  must_update_access: boolean;
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

  await sql`
    ALTER TABLE portal_users
    ADD COLUMN IF NOT EXISTS must_update_access BOOLEAN NOT NULL DEFAULT true;
  `;
}

export async function createPortalUser(name: string, email: string, credentialHash: string, role: string) {
  await createTables();

  const result = await sql`
    INSERT INTO portal_users (name, email, credential_hash, role, status, must_update_access)
    VALUES (${name}, ${email.toLowerCase()}, ${credentialHash}, ${role}, 'active', true)
    RETURNING id, name, email, role, status, must_update_access, created_at;
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
    SELECT id, name, email, role, status, must_update_access, created_at
    FROM portal_users
    ORDER BY created_at DESC;
  `;

  return result.rows;
}

export async function updatePortalUserCredential(email: string, credentialHash: string) {
  await createTables();

  await sql`
    UPDATE portal_users
    SET credential_hash = ${credentialHash}, must_update_access = false
    WHERE email = ${email.toLowerCase()} AND status = 'active';
  `;
}

export async function deactivatePortalUser(email: string) {
  await createTables();

  await sql`
    UPDATE portal_users
    SET status = 'inactive'
    WHERE email = ${email.toLowerCase()};
  `;
}
