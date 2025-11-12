"use client";

import Image from "next/image";
import BrandOne from "../../public/assets/brand/brand-1.png";
import BrandTwo from "../../public/assets/brand/brand-2.png";
import BrandThree from "../../public/assets/brand/brand-3.png";
import BrandFour from "../../public/assets/brand/brand-4.png";
import BrandFive from "../../public/assets/brand/brand-5.png";
import BrandSix from "../../public/assets/brand/brand-6.png";
import BrandSeven from "../../public/assets/brand/brand-7.png";

const BrandSection = () => {
  return (
    <section className="border-t border-b border-gray-200 bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Text */}
          <p className="text-gray-600 text-sm text-center md:text-left max-w-xs md:max-w-none">
            Trusted by{" "}
            <span className="font-semibold text-gray-900">5000+</span>{" "}
            individuals & companies of all sizes
          </p>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image
              src={BrandOne}
              alt="Brand 1"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
            <Image
              src={BrandTwo}
              alt="Brand 2"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
            <Image
              src={BrandThree}
              alt="Brand 3"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
            <Image
              src={BrandFour}
              alt="Brand 4"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
            <Image
              src={BrandFive}
              alt="Brand 5"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
            <Image
              src={BrandSix}
              alt="Brand 6"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
            <Image
              src={BrandSeven}
              alt="Brand 7"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
