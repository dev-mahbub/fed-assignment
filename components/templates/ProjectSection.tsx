"use client";

import Image from "next/image";
import BgImg from "../../public/assets/project/backgournd.png";
import WidgetImg from "../../public/assets/project/widgets.svg";
import ComponentImg from "../../public/assets/project/component-varient.svg";
import StylesImg from "../../public/assets/project/styles-variable.svg";

const ProjectSection = () => {
  return (
    <div className="relative py-20 bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            The perfect foundation to <br className="hidden md:block" />{" "}
            kickstart any project.
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            A comprehensive UI kit — thoughtfully crafted with{" "}
            <span className="font-medium text-gray-900">Auto Layout 5.0</span>,{" "}
            <span className="font-medium text-gray-900">smart variants</span>,{" "}
            <span className="font-medium text-gray-900">variables</span>, and
            built-in WCAG accessibility for a seamless design experience.
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BgImg.src})` }}
        >
          {/* Card 1 */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 transition hover:shadow-md">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 shadow-sm">
                <Image src={WidgetImg} alt="Widget Icon" className="h-7 w-7" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">400+</h3>
            <p className="mt-2 text-gray-900 font-medium">Widgets & Examples</p>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Explore a rich collection of ready-to-use widgets and examples —
              built to inspire and speed up your design workflow.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 transition hover:shadow-md">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 shadow-sm">
                <Image
                  src={ComponentImg}
                  alt="Component Icon"
                  className="h-7 w-7"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">10000+</h3>
            <p className="mt-2 text-gray-900 font-medium">
              Components & Variant
            </p>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Discover hundreds of flexible components and variants — crafted to
              help you design faster and maintain consistency effortlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 transition hover:shadow-md">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 shadow-sm">
                <Image src={StylesImg} alt="Styles Icon" className="h-7 w-7" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">650+</h3>
            <p className="mt-2 text-gray-900 font-medium">
              Styles, Variable & Tokens
            </p>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Access well-structured styles, variables, and tokens — ensuring
              seamless scalability and visual harmony across every design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
