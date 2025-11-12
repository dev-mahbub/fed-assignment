"use client";
import Link from "next/link";
import Logo from "../../public/assets/logo.svg";
import ArrowBottomIcon from "../../public/assets/icon/arrow-bottom.svg";
import SearchIcon from "../../public/assets/icon/Search.svg";
import CommandIcon from "../../public/assets/icon/command-key.svg";
import GithubIcon from "../../public/assets/icon/github.svg";
import RedditIcon from "../../public/assets/icon/reddit.svg";
import TwitterIcon from "../../public/assets/icon/x-twitter.svg";
import ArrowTopIcon from "../../public/assets/icon/arrow-top.svg";
import ApplicatoinIcon from "../../public/assets/icon/application.svg";
import DashboardIcon from "../../public/assets/icon/dashboard-icon.svg";
import AiIcon from "../../public/assets/icon/ai-components.svg";
import MarketingIcon from "../../public/assets/icon/marketing.svg";
import ECommerceIcon from "../../public/assets/icon/e-commerce.svg";
import CoreComponentIcon from "../../public/assets/icon/core-component.svg";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const handleDropdown = (e: any) => {
    e.preventDefault();
    setOpenDropdown(!openDropdown);
    setActiveNav("components");
  };

  const handleNavClick = (name: string) => {
    setActiveNav(name);
    setOpenDropdown(false);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200/70 relative">
      <div className="container">
        <div className="max-w-[1455px] mx-auto h-[86px] flex items-center justify-between py-5 px-8">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="" />
            </Link>

            <div className="hidden md:flex items-center space-x-6 text-base font-medium text-gray-700 relative">
              {/* Components Dropdown */}
              <button
                onClick={handleDropdown}
                className={`flex items-center gap-2 rounded-md px-2 py-2 transition ${
                  activeNav === "components"
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span>Components</span>
                <Image
                  src={openDropdown ? ArrowTopIcon : ArrowBottomIcon}
                  alt=""
                />
              </button>

              <Link
                href="#"
                onClick={() => handleNavClick("templates")}
                className={`rounded-md px-2 py-1 transition ${
                  activeNav === "templates"
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                Templates
              </Link>

              <Link
                href="#"
                onClick={() => handleNavClick("docs")}
                className={`rounded-md px-2 py-1 transition ${
                  activeNav === "docs"
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                Docs
              </Link>

              <Link
                href="#"
                onClick={() => handleNavClick("products")}
                className={`rounded-md px-2 py-1 transition ${
                  activeNav === "products"
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                Products
              </Link>

              <Link
                href="#"
                onClick={() => handleNavClick("resources")}
                className={`rounded-md px-2 py-1 transition ${
                  activeNav === "resources"
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                Resources
              </Link>

              {/* Dropdown Menu */}
              {openDropdown && (
                <div className="absolute top-[60px] left-0 bg-white shadow-lg border border-gray-100 rounded-2xl w-[720px] p-6 flex gap-6 z-50">
                  <div className="w-1/2 space-y-4">
                    <Link
                      href="#"
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Image src={ApplicatoinIcon} alt="" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          Application
                        </h4>
                        <p className="text-gray-500 text-sm leading-snug">
                          Components crafted for build all kind of modern
                          webapps and sites
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Image src={DashboardIcon} alt="" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          Dashboard
                        </h4>
                        <p className="text-gray-500 text-sm leading-snug">
                          Build data-rich modern backends, dashboards and admin
                          panels
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Image src={AiIcon} alt="" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          AI Components
                        </h4>
                        <p className="text-gray-500 text-sm leading-snug">
                          All you need to create stunning AI tools & landing
                          pages
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="w-1/2 space-y-4 border-l border-gray-100 pl-6">
                    <Link
                      href="#"
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Image src={MarketingIcon} alt="" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          Marketing
                        </h4>
                        <p className="text-gray-500 text-sm leading-snug">
                          All you need to create stunning and high-converting
                          landing pages
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Image src={ECommerceIcon} alt="" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          E-commerce
                        </h4>
                        <p className="text-gray-500 text-sm leading-snug">
                          Components and Pages need to build complete online
                          store UI
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <Image src={CoreComponentIcon} alt="" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          Core Components
                        </h4>
                        <p className="text-gray-500 text-sm leading-snug">
                          Core UI Components to kickstart any web projects –
                          Open-source
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
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
              className="text-sm font-medium text-white bg-gray-900 px-[18px] py-[11px] leading-6 rounded-xl hover:bg-gray-800 transition"
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
