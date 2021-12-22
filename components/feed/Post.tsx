import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { thumbnail } from "../../constants/constants";

interface Props {
  title: string;
  picture: string;
  name: string;
  date: string;
}

const Post = ({ title, picture, name, date }: Props) => {

  return (
    <div className="flex flex-col">
      <div className="bg-white mt-5 rounded-md shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-md"
              src={thumbnail}
              width={40}
              height={40}
              alt="Post thumbnail"
            />
            <div className="">
              <p className="font-medium">{name}</p>
              <p className="text-xs text-gray-400">{date}</p>
            </div>
          </div>

          <p className="pt-4">{title}</p>
        </div>

        {picture && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={picture} objectFit="cover" layout="fill" alt={title} />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center rounded-b-md bg-white text-gray-400 border-t shadow-mds">
        <div className="inputIcon rounded-none">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none">
            <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
