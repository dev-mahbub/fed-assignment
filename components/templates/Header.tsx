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
    <div className="w-full bg-white border-b border-gray-200/70">
      <div className="container">
        <div className="max-w-[1455px] mx-auto h-[86px] flex items-center justify-between py-5 px-8">
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
            <div className="hidden md:flex items-center bg-gray-50 rounded-lg pr-2.5 pl-4 py-2.5 border border-gray-200">
              <div>
                <Image src={SearchIcon} alt="" />
              </div>
              <input
                type="text"
                placeholder="Quick search..."
                className="bg-transparent outline-none px-2 text-sm text-gray-700 placeholder-gray-400"
              />
              <span className="flex justify-center items-center gap-0.5 text-gray-400 bg-white rounded px-2 py-1.5 ml-2">
                <Image src={CommandIcon} alt="" />
                <span className="text-xs leading-0">K</span>
              </span>
            </div>
            <button className="w-8 h-8 rounded-[9px] border border-gray-200 flex justify-center items-center">
              <Image src={TwitterIcon} alt="" />
            </button>
            <button className="w-8 h-8 rounded-[9px] border border-gray-200 flex justify-center items-center">
              <Image src={GithubIcon} alt="" />
            </button>
            <button className="w-8 h-8 rounded-[9px] border border-gray-200 flex justify-center items-center">
              <Image src={RedditIcon} alt="" />
            </button>
            <Link
              href="#"
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white bg-gray-900 px-[18px] py-[11px] rounded-xl hover:bg-gray-800 transition"
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
