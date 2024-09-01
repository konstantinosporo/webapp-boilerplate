
import { Button } from "@/components/ui/button"

export default function MyButton({ params }: Readonly<{ params: string }>) {
  return (
    <div>
      <Button type="submit">{params}</Button>
    </div>
  )
}
