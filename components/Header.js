import Link from "next/link";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:max-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            {" "}
            <span className="text-3xl font-bold uppercase">Design</span>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
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
    </header>
  );
}
