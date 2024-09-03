import { fetchUsers } from '@/app/_lib/dal';

export async function UserList() {
  const users: ModelUser[] = await fetchUsers();

  return (
    <>
      {users.map((user) => (
        <ul key={user?.id}>
          <li >
            {user?.id}
          </li>
          <li >
            {user?.email}
          </li>
          <li >
            {user?.name}
          </li>
        </ul>
      ))}
    </>
  );
}

