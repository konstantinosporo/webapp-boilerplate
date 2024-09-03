// app/api/users/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getUsers } from '@/app/actions/db';

export async function GET(request: NextRequest) {
  try {
    const users = await getUsers();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
