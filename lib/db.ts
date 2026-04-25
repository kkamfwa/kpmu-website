import { sql } from "@vercel/postgres";

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

export async function createUser(name: string, email: string, password: string, role: string) {
  await sql`
    INSERT INTO users (name, email, password, role)
    VALUES (${name}, ${email}, ${password}, ${role});
  `;
}

export async function findUser(email: string) {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email};
  `;

  return result.rows[0];
}
