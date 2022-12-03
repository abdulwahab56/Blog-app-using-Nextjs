import React from "react";
import Author from "../../components/_child/author";
import Format from "../../layout/format";
import Image from "next/image";

const page = () => {
  return (
    <Format>
      <section className="container max-auto md:px-2 py-16 w-1/2 ml-[18rem] ">
        <div className="flex justify-center ml-32">
          <Author />
        </div>
        <div>
          <h1 className="font-bold text-4xl text-center pb-5">
            Your most unhappy customers are your greate source of learning
          </h1>
          <p className="text-gray-400 text-xl text-center">
            subtilte:Your most unhappy customers are your greate source of
            learning{" "}
          </p>
          <div className="py-10">
            {" "}
            <Image
              src={"/images/post1.jpg"}
              alt="blog iamge"
              width={900}
              height={900}
              className="shadow-lg rounded-lg"
            />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              subtilte:Your most unhappy customers are your greate source of
              learning{" "}
            </p>
            <p>
              subtilte:Your most unhappy customers are your greate source of
              learning{" "}
            </p>
            <p>
              subtilte:Your most unhappy customers are your greate source of
              learning{" "}
            </p>
            <p>
              subtilte:Your most unhappy customers are your greate source of
              learning{" "}
            </p>
          </div>
        </div>
      </section>
    </Format>
  );
};

export default page;
