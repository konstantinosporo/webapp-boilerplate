import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    // Parse the incoming request to extract name, email, and password
    const { name, email, password } = await req.json();

    // Simple validation (optional)
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // hashe the password 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const result = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING *;
    `;

    // Check if the insertion was successful
    if (result.rowCount === 1) {
      return NextResponse.json({ message: 'User created successfully', user: result.rows[0] }, { status: 201 });
    } else {
      return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
    }
  } catch (e: any) {
    console.error('Error during user creation:', e);
    return NextResponse.json({ message: 'Internal Server Error', error: e.message }, { status: 500 });
  }
}
