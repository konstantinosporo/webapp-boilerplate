import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import MyNavBar from "./components/ui/NavBar";
import NewNavbar from "./components/ui/NewNavbar";


export default async function Home() {
  const session = await getServerSession();
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
        <NewNavbar />
        <h1 className="text-sm text-teal-200">This is the global home page! It should be accessed by every kind of user!</h1>
        <h2>Welcome {session.user?.name}</h2>
        {isImage}
        <Link href={'/api/auth/signout'}>
          <p className="bg-red-700 text-white hover:text-red-700 hover:bg-white">Logout</p>
        </Link>
      </main >
    );
  } else return <Link href={'/signup'}>Not a member? Sign In</Link>

}
