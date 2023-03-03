import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="p-4 lg:px-24 md:px-12 text-white flex justify-between md:pt-12 pt-6 items-center  ">
        <span className="font-bold">Simple Classroom</span>
        <div
          className="bg-white rounded-[80px] font-bold p-4 px-6 z-10
       md:flex gap-8 text-xs shadow-lg fixed left-[50%] translate-x-[-50%] hidden "
        >
          <span className="text-[#696969]">Student</span>
          <span className="text-[#696969]">Tutor</span>
          <span className="text-[#696969]">About Us</span>
          <span className="text-[#696969]">Contact Us</span>
        </div>
        <div className="flex text-xs md:gap-4 gap-1">
          <button className="border border-white px-3 py-2 rounded-md hidden md:block">
            Log in
          </button>
          <button className="border border-white px-3 py-2 rounded-md hidden md:block">
            Sign Up
          </button>
          <RiMenuLine
            className="md:hidden block"
            size={25}
            onClick={() => {
              console.log(!showNav);
              setShowNav(!showNav);
            }}
          />
        </div>
      </div>
      <div
        className={` ${
          showNav
            ? "fixed top-0 left-0 w-full h-screen bg-black/70 md:hidden"
            : "md:hidden"
        } ease duration-300 z-20`}
      >
        <div
          className={`fixed md top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] z-50 ${
            showNav ? "left-0" : "left-[-100%]"
          } transition-all ease duration-300`}
        >
          <div
            className=" font-bold w-full pl-4 pr-2 py-6 text-xl flex justify-between items-center"
            onClick={() => setShowNav(!showNav)}
          >
            Simple Classroom
            <AiOutlineClose size={25} className />
          </div>
          <div className="px-4 flex flex-col gap-4 text-sm mt-4">
            <p>Student</p>
            <p>Tutor</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="px-4 flex justify-between gap-1 text-sm absolute bottom-3 left-0 right-20">
            <p className="border border-black px-2 py-1 rounded-md text-xs">
              Log In
            </p>
            <p className="border border-black px-2 py-1 rounded-md text-xs">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
