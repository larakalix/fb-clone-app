import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import React from "react";
import { users } from "../../data/data";
import UserBox from "./UserBox";

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {users.map(({ id, name, thumbnail, isOnline }) => (
        <UserBox
          key={id}
          name={name}
          thumbnail={thumbnail}
          isOnline={isOnline}
        />
      ))}
    </div>
  );
};

export default Widgets;
