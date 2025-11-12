import Image from "next/image";
import CelebrateIcon from "../../public/assets/top-header/celebrate.png";
import RightArrowIcon from "../../public/assets/icon/arrow-right.svg";
import CloseIcon from "../../public/assets/top-header/close.svg";

const TopHeader = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200/70">
      <div className="container border-l border-gray-200">
        <div className="max-w-[1431px] w-full my-3 relative m-auto ">
          <div className="bg-gray-100 py-3 text-center rounded-lg flex justify-center relative">
            <p className="text-gray-500 flex justify-center items-center gap-2">
              We just raised our biggest updates -{" "}
              <span className=" text-gray-800 font-medium">Brand V3.0</span>
              <Image src={CelebrateIcon} alt="" className="w-4 h-4" />
            </p>
            <button className=" flex justify-center items-center gap-4 ml-4 bg-white text-xs px-2.5 rounded-full shadow-md border border-gray-200">
              <span>Check it out</span>
              <Image src={RightArrowIcon} alt="" className="" />
            </button>
          </div>
          <Image
            src={CloseIcon}
            alt=""
            className="absolute right-6 top-[50%] -translate-y-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
