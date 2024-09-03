import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import clsx from "clsx";

const UserInfo = ({ user }: Readonly<MyNavBarProps>) => {
  return (
    <div className="gap-2 hidden md:flex items-center">
      {user
        ? (
          <FaUserCheck
            aria-hidden="true"
            className="h-3 w-3 mb-[.9px] rounded-full text-green-400 outline outline-1 outline-offset-1 outline-green-400"
          />
        )
        : (
          <FaUserXmark
            aria-hidden="true"
            className="h-3 w-3 mb-[.9px] rounded-full text-red-400 outline outline-1 outline-offset-1 outline-red-400"
          />
        )
      }

      <span>
        <p className="dark:text-slate-200 text-xs">{user?user?.name:'Signed out'}</p>
      </span>
    </div>
  );
};

export default UserInfo;
