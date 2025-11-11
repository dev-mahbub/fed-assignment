import Link from "next/link";
import Logo from "../../public/assets/logo.svg";
import ArrowBottomIcon from "../../public/assets/icon/arrow-bottom.svg";
import SearchIcon from "../../public/assets/icon/Search.svg";
import CommandIcon from "../../public/assets/icon/command-key.svg";
import GithubIcon from "../../public/assets/icon/github.svg";
import RedditIcon from "../../public/assets/icon/reddit.svg";
import TwitterIcon from "../../public/assets/icon/x-twitter.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1455px] mx-auto flex items-center justify-between py-3">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="" />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-base font-medium text-gray-700">
              <Link
                href="#"
                className="flex items-center gap-2 bg-transparent rounded-md hover:bg-gray-100 px-2 py-2 hover:text-gray-900 transition"
              >
                <span className="">Components</span>
                <Image src={ArrowBottomIcon} alt="" />
              </Link>
              <Link
                href="#"
                className="bg-transparent rounded-md hover:bg-gray-100 px-2 py-1 hover:text-gray-900 transition"
              >
                Templates
              </Link>
              <Link
                href="#"
                className="bg-transparent rounded-md hover:bg-gray-100 px-2 py-1 hover:text-gray-900 transition"
              >
                Docs
              </Link>
              <Link
                href="#"
                className="bg-transparent rounded-md hover:bg-gray-100 px-2 py-1 hover:text-gray-900 transition"
              >
                Products
              </Link>
              <Link
                href="#"
                className="bg-transparent rounded-md hover:bg-gray-100 px-2 py-1 hover:text-gray-900 transition"
              >
                Resources
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-gray-50 rounded-lg pr-2.5 pl-4 py-2 border border-gray-200">
              <div>
                <Image src={SearchIcon} alt="" />
              </div>
              <input
                type="text"
                placeholder="Quick search..."
                className="bg-transparent outline-none px-2 text-sm text-gray-700 placeholder-gray-400"
              />
              <span className="text-xs text-gray-400 border rounded px-1 ml-2">
                ⌘ K
              </span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-sm">
              X
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-sm">
              G
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-sm">
              D
            </button>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Pricing & FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
