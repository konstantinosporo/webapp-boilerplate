// app/_lib/dal.ts

export async function fetchUsers() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const endpoint = `${baseUrl}/api/auth/users`;  // Matches the route.ts location

  const res = await fetch(endpoint, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function fetchCustomers() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const endpoint = `${baseUrl}/api/auth/customers`;  // Matches the route.ts location

  const res = await fetch(endpoint, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch customers: ${res.status}`);
  }

  const data = await res.json();
  return data;
  
}