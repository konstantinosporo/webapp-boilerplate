import SignInForm from "./form"

const SignInPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-t from-slate-50 to-slate-100">
      <div className="mt-[-250px]"> 
        <SignInForm />
      </div>
    </main>
  )
}

export default SignInPage;
