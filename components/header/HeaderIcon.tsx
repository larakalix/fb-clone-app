import { SVGProps } from "react";

const HeaderIcon = ({ Icon, active }: any) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-md group">
      <Icon
        className={`h-5 text-gray-600 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-600"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
