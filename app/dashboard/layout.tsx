import { getServerSession } from "next-auth";
import MyNavBar from "../ui/NavBar";



export default async function Dashboard({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <div className="">
      <MyNavBar user={session?.user} />
      <div className="">{children}</div>
    </div>
  )
}


