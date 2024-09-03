import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export default async function Dashboard({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className="">
      <Suspense fallback={<Skeleton />}>
        <div className="">
          {children}
        </div>
      </Suspense>
    </div >
  )
}


