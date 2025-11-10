"use client";
import Image from "next/image";
import MainLogo from "../../../public/assets/logo.svg";
import GoogleLogo from "../../../public/assets/auth/google-logo.svg";
import GithubLogo from "../../../public/assets/auth/github-logo.svg";
import EyeIcon from "../../../public/assets/auth/eye.svg";
import EyeOFFIcon from "../../../public/assets/auth/eye-off.svg";
import { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowHidePassword = (e: any) => {
    e.preventDefault();
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <div className="mb-[100px] text-center">
        <div className="flex justify-center items-center mb-4">
          <Image src={MainLogo} alt="Main logo" />
        </div>
        <h1 className="text-[40px] leading-12 text-[#2E2E2E] font-medium  ">
          Sign Up to your account
        </h1>
        <p className="text-gray-500 mt-4 text-[18px] tracking-wide">
          Join us and start your journey today, it only takes <br /> a minute to
          get started.
        </p>
      </div>

      {/* sign up area start */}
      <div className="w-full max-w-[552px] bg-gray-100 rounded-[34px] p-3">
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border cursor-pointer border-gray-200 rounded-full py-4 bg-white hover:bg-gray-200 transition">
            <Image src={GoogleLogo} alt="google" className="w-5 h-5" />
            <span className="text-[15px] font-medium">
              Continue with Google
            </span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 border cursor-pointer border-gray-200 rounded-full py-4 bg-white hover:bg-gray-200 transition">
            <Image src={GithubLogo} alt="github" className="w-5 h-5" />
            <span className="text-[15px] font-medium">
              Continue with Github
            </span>
          </button>
        </div>
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-100 px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <form className="bg-white p-8 rounded-3xl space-y-5 shadow-[0_6px_20px_0px_rgba(0,0,0,0.03),2px_20px_20px_0px_rgba(0,0,0,0.03),-2px_20px_20px_0px_rgba(0,0,0,0.03)]">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="mt-1 w-full text-gray-600 rounded-xl border border-gray-200 px-3 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <button
              onClick={handleShowHidePassword}
              className="absolute right-4 bottom-3 flex items-center justify-center gap-1"
            >
              <Image
                src={showPassword ? EyeOFFIcon : EyeIcon}
                alt="eye icon"
                className="w-4.5"
              />
              <span className="text-gray-400">
                {showPassword ? "Hide" : "Show"}
              </span>
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3758f9] text-[16px] text-white py-3.5 rounded-xl hover:bg-blue-700 transition font-medium shadow-sm"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <a
              href="#"
              className="text-[#3758f9] hover:underline font-medium ml-1"
            >
              Login Now
            </a>
          </p>
        </form>
      </div>
      {/* sign up area end */}
    </div>
  );
};

export default page;
