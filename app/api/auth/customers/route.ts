// app/api/users/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getCustomers } from '@/app/actions/db';

export async function GET(request: NextRequest) {
  try {
    const customers = await getCustomers();
    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
