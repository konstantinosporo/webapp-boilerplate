import Link from "next/link"
import { MyButton } from "./components/ui/Button"

export default function Home() {

  return (
    <div className="container">
      <h1>
        This is the main page!
      </h1>
      <h2>Hello</h2>
      <Link href="/login">
        <MyButton params="Login" />
      </Link>
    </div>
  )

}
