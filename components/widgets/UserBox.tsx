import Image from "next/image";

interface Props {
  name: string;
  thumbnail: string;
  isOnline: boolean;
}

const UserBox = ({ name, thumbnail, isOnline }: Props) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-100 cursor-pointer p-2 rounded-md">
      <Image
        className="rounded-md"
        objectFit="cover"
        src={thumbnail}
        width={50}
        height={50}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-8 bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  );
};

export default UserBox;
