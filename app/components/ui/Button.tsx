
import { Button } from "@/components/ui/button";;
import { ReloadIcon } from "@radix-ui/react-icons";


export function MyButton({ params }: Readonly<{ params: string }>) {
  return (
    <div>
      <Button type="submit"  >{params}</Button>
    </div>
  )
}

export function ButtonLoading() {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}





