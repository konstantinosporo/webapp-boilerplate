import NewNavbar from "../components/ui/NewNavbar";
import AuthProvider from "../context/AuthProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <header>
        <NewNavbar />
      </header>
      <main className="container">
        {children}
      </main>
    </AuthProvider>
  );
}
