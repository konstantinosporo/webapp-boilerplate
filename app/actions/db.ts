// lib/vercel-db.js

import { sql } from '@vercel/postgres';

export async function getUsers() {
  try {
    const result = await sql`SELECT id, name, email FROM users`;
    return result.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}


export async function getCustomers() {
  try {
    const result = await sql`
    SELECT id, name, email FROM customers
    `;
    return result.rows;
  } catch (error) {
    console.error(error)
    throw error;
  }
}