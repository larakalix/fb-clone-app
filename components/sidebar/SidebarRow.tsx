import Image from "next/image";

interface Props {
  title: string;
  src?: string;
  Icon?: any;
}

const SidebarRow = ({ src, title, Icon }: Props) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-100 rounded-md cursor-pointer">
      {src && (
        <Image
          className="rounded-md"
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt={title}
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
