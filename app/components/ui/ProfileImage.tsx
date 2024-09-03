import { RiMapPinUserFill } from "react-icons/ri";
import Image from "next/image";


const ProfileImage = ({ user }: Readonly<MyNavBarProps>) => {
  const profImage = user?.image ? (
    <Image
      src={user.image}
      alt={`${user.name}'s image.`}
      fill
    />
  ) : <RiMapPinUserFill size={30} color="gray" offset={13} />;
  return (
    <span className="h-7 w-7 mx-auto">{profImage}</span>
  )
}

export default ProfileImage