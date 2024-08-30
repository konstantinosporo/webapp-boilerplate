import { ComplexNavbar } from "../ui/NavBar";

export default function Dashboard({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <ComplexNavbar />
      {children}
    </div>
  )
}