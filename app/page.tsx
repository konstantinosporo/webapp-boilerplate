
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";
import Image from "next/image";


export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user;

  const isImage = user?.image ? (
    <Image
      src={user.image}
      alt={`Picture of ${user.name}`}
      width={200}
      height={200}
      priority={true}
    >

    </Image>
  ) : null;

  if (session) {
    return (
      <main>
        <h1 className="text-sm text-teal-200">This is the global home page! It should be accessed by every kind of user!</h1>
        <h2>Welcome {session.user?.name}</h2>
        {isImage}
      </main>
    );
  } else return <Link href={'/signup'}>Not a member? Sign In</Link>

}
