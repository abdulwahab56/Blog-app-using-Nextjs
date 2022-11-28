import React from "react";
import Image from "next/image";

const Author = () => {
  return (
    <div className="flex gap-1">
      <Image
        src={"/images/author.jpg"}
        alt="author image"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col px-3 justify-center">
        <p className="text-md font-bold text-black">AbdulWahab</p>
        <p className="text-md font-bold text-gray-500 ">CEO and Founder</p>
      </div>
    </div>
  );
};

export default Author;
