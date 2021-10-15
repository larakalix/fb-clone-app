import React from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import { thumbnail } from "../../constants/constants";

const Sidebar = () => {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow title="Ivan Lara" src={thumbnail} />
      <SidebarRow title="Friends" Icon={UsersIcon} />
      <SidebarRow title="Groups" Icon={UserGroupIcon} />
      <SidebarRow title="Marketplace" Icon={ShoppingBagIcon} />
      <SidebarRow title="Watch" Icon={DesktopComputerIcon} />
      <SidebarRow title="Events" Icon={CalendarIcon} />
      <SidebarRow title="Memories" Icon={ClockIcon} />
      <SidebarRow title="See more" Icon={ChevronDownIcon} />
    </div>
  );
};

export default Sidebar;
