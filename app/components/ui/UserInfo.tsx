import { UserIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const UserInfo = ({ user }: Readonly<MyNavBarProps>) => {
  return (
    <div className="gap-1 hidden md:flex">
      <button
        type="button"
        className={clsx(
          "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white outline outline-1",
          user ? "outline-green-400" : "outline-red-400"
        )}
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <UserIcon
          aria-hidden="true"
          className={clsx("h-2 w-2", user ? "text-green-400" : "text-red-400")}
        />
      </button>
      <span>
        <p className='dark:text-slate-200 text-xs'>{user?.name}</p>
      </span>
    </div>
  )
}

export default UserInfo
