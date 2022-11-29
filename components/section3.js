import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const Section3 = () => {
  return (
    <section>
      <div className="container max-auto md:px-20 py-16 ml-14">
        <h1 className="text-3xl font-bold uppercase pb-12 text-center">
          most Popular posts
        </h1>
        <div className="grid  lg:grid-cols-2 gap-14 ">
          {posts()}
          {posts()}
        </div>
      </div>
    </section>
  );
};

export default Section3;

function posts() {
  return (
    <div>
      <div className="post-imag">
        <Link href={"/"}>
          <Image
            src={"/images/post1.jpg"}
            alt="blog iamge"
            width={500}
            height={300}
            className="shadow-lg rounded-lg"
          />
        </Link>
      </div>
      <div className="post-detail flex justify-center flex-col py-4">
        <div className="flex">
          <Link href={"/"}>
            <p className="text-xl text-orange-800 hover:text-orange-600">
              Business,Travel-
            </p>
          </Link>
          <p className="text-xl text-gray-800 hover:text-gray-600">
            July,3,2022
          </p>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greate source of learning
            </span>
          </Link>
          <p className="py-3 text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
          </p>
        </div>
        <Author />
      </div>
    </div>
  );
}
