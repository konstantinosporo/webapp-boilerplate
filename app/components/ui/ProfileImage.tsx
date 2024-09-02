import { RiMapPinUserFill } from "react-icons/ri";
import Image from "next/image";


const ProfileImage = ({ user }: Readonly<MyNavBarProps>) => {
  const profImage = user?.image ? (
    <Image
      src={user.image}
      alt={`${user.name}'s image.`}
      width={35}
      height={35}
    />
  ) : <RiMapPinUserFill />;
  return (
    <span className="h-3 w-3">{profImage}</span>
  )
}

export default ProfileImage