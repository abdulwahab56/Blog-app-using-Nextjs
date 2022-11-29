import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="bg-gray-50">
      <div className="container max-auto md:px-20 py-16 ml-14">
        <h1 className="text-3xl font-bold uppercase pb-12 text-center">
          subscribe Newslatter
        </h1>
        <div className="py-4">
          <input
            type="email"
            placeholder="Enetr email"
            className="w-9/12 shadow border text-gray-700 focus:outline-none focus:shadow-outline px-3 py-3 ml-10  "
          />
          <div className="">
            <button className="bg-orange-500 px-20 py-3 rounded-full ">
              Subscribe
            </button>
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-center gap-6 ">
            <Link href={"/"}>
              {" "}
              <FiFacebook color="#888888" />{" "}
            </Link>
            <Link href={"/"}>
              <FiTwitter color="#888888" />
            </Link>
            <Link href={"/"}>
              <FiYoutube color="#888888" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
