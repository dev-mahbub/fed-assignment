import Image from "next/image";
import CelebrateIcon from "../../public/assets/top-header/celebrate.png";
import RightArrowIcon from "../../public/assets/top-header/right-arrow.svg";
import CloseIcon from "../../public/assets/top-header/close.svg";

const TopHeader = () => {
  return (
    <div className="p-3 relative">
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
  );
};

export default TopHeader;
