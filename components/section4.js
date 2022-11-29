import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const Section4 = () => {
  return (
    <section className="container max-auto md:px-20 py-16 ml-14">
      <div className=" grid lg:grid-cols-2 gap-14">
        <div className="right">
          {" "}
          <h1 className="text-2xl font-bold uppercase pb-12 text-left">
            Business
          </h1>
          <div className="flex flex-col gap-6">
            {posts()}
            {posts()}
            {posts()}
          </div>
        </div>
        <div className="left">
          <h1 className="text-2xl font-bold uppercase pb-12 text-left">
            Travel
          </h1>
          <div className="flex flex-col gap-6">
            {posts()}
            {posts()}
            {posts()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

function posts() {
  return (
    <div className="flex gap-5 items-center">
      <div className="post-imag flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/post1.jpg"}
            alt="blog iamge"
            width={500}
            height={200}
            className="shadow-lg rounded-lg"
          />
        </Link>
      </div>
      <div className="post-detail flex justify-center flex-col">
        <div className="flex">
          <Link href={"/"}>
            <p className=" text-orange-800 hover:text-orange-600">
              Business,Travel-
            </p>
          </Link>
          <p className=" text-gray-800 hover:text-gray-600">July,3,2022</p>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greate source of learning
            </span>
          </Link>
          <Author />
        </div>
      </div>
    </div>
  );
}
