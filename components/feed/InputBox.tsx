import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { thumbnail } from "../../constants/constants";

const InputBox = () => {

    const sendPost = () => {}

  return (
    <div className="bg-white p-2 rounded-md shadow-md text-gray-500 font-medium mt-7">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-md"
          src={thumbnail}
          width={45}
          height={45}
          layout="fixed"
          alt="InputBox"
        />
        <form className="flex flex-1">
          <input
            className="rounded-md h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, Ivan Lara?`}
          />
          <button hidden type="submit" onClick={ sendPost }>Submit</button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
          <div className="inputIcon">
              <VideoCameraIcon className="h-7 text-red-500" />
              <p className="text-xs sm:text-sm xl:text-base">Live video</p>
          </div>
          <div className="inputIcon">
              <CameraIcon className="h-7 text-green-500" />
              <p className="text-xs sm:text-sm xl:text-base">Photo/video</p>
          </div>
          <div className="inputIcon">
              <EmojiHappyIcon className="h-7 text-yellow-500" />
              <p className="text-xs sm:text-sm xl:text-base">Feeling/activity</p>
          </div>
      </div>
    </div>
  );
};

export default InputBox;
