import { fetchCustomers } from '@/app/_lib/dal';

export async function Customerlist() {
  const customers: ModelCustomer[] = await fetchCustomers();

  return (
    <>
      {customers.map((customer) => (
        <ul key={customer?.id}>
          <li >
            {customer?.id}
          </li>
          <li >
            {customer?.email}
          </li>
          <li >
            {customer?.name}
          </li>
          <li >
            {customer?.image_url}
          </li>
        </ul>
      ))}
    </>
  );
}

