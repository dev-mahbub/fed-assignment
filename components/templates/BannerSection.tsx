"use client";

import Image from "next/image";
import RectangleImg from "../../public/assets/banner/rectangle.svg";
import FigmaIcon from "../../public/assets/banner/figma.svg";
import UserOne from "../../public/assets/banner/user-1.png";
import UserTwo from "../../public/assets/banner/user-2.png";
import UserThree from "../../public/assets/banner/user-3.png";
import UserFour from "../../public/assets/banner/user-4.png";
import DeviceInterface from "../../public/assets/banner/device-interface.png";
import RightArrow from "../../public/assets/icon/arrow-right.svg";
import RightArrowWhite from "../../public/assets/icon/arrow-right-white.svg";

const BannerSection = () => {
  return (
    <>
      <div className="pb-[38px]">
        <div className="relative overflow-hidden pt-20 pb-20 bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={RectangleImg}
              alt=""
              className="absolute -top-2.5 left-[300px]"
            />
          </div>
          <div className="relative container mx-auto max-w-3xl text-center px-4">
            <div className="flex items-center justify-center bg-white/70 border border-gray-200 rounded-full px-2 py-1.5 backdrop-blur-sm w-fit mx-auto mb-8">
              <div className="flex -space-x-2 mr-3">
                <Image
                  src={UserOne}
                  alt="User"
                  className="w-6 h-6 rounded-full border border-white"
                />
                <Image
                  src={UserTwo}
                  alt="User"
                  className="w-6 h-6 rounded-full border border-white"
                />
                <Image
                  src={UserThree}
                  alt="User"
                  className="w-6 h-6 rounded-full border border-white"
                />
                <Image
                  src={UserFour}
                  alt="User"
                  className="w-6 h-6 rounded-full border border-white"
                />
              </div>
              <p className="text-sm text-gray-500 font-medium [word-spacing:5px]">
                Used by 65,000+ Designers worldwide
              </p>
              <button className="ml-2 inline-flex justify-center items-center border border-gray-200/70 px-2.5 py-1.5 bg-white rounded-full shadow text-gray-700 hover:bg-gray-100 transition">
                <Image src={RightArrow} alt="" className="w-2.5 h-2.5" />
              </button>
            </div>
            <h1 className="text-4xl md:text-[52px] tracking-tighter font-bold text-gray-900 leading-tight mb-5">
              The Ultimate UI Library and <br />
              Design System for Figma
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[731px] mx-auto mb-10">
              A complete toolkit for modern designers — 600+ functional Figma UI
              components for <br /> landing pages, e-commerce, dashboards, and
              more. Boost your workflow <br /> and creativity with our product.
            </p>
            <div className="flex justify-center items-center gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-3.5 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:bg-gray-50 transition">
                <Image src={FigmaIcon} alt="Figma" />
                Preview - Figma
              </button>
              <button className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-sm pl-5 pr-4 py-3 rounded-xl shadow transition">
                <span className="mr-2">
                  Buy now - <span className="text-gray-200">One-time</span>
                </span>
                <Image src={RightArrowWhite} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="max-w-[1296px] w-full m-auto">
            <Image src={DeviceInterface} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
