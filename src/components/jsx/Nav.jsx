import { useState } from "react";
import ButtonSignUp from "./ButtonSignUp";

const Nav = () => {
  const [isShow, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(!isShow);
  };

  return (
    <>
      <nav className="text-black absolute top-0 right-0 w-full md:flex md:items-center md:w-full lg:w-full md:mx-auto md:overflow-visible md:translate-x-0 lg:max-w-[1000px] lg:-translate-x-48 md:py-3 ">
        <div className="flex justify-between p-3 mb-2 items-center h-14 md:flex-row md:mb-0">
          <div className="lg:pl-7">
            <img src="/public/images/logo.svg" alt="" />
          </div>
          <div className="md:hidden">
            <i
              onClick={handleClickShow}
              className="bx bx-menu bx-flashing text-4xl text-black md:hidden"
            ></i>
          </div>
        </div>
        <div
          className={`relative mx-auto bg-[#3b3054] w-[18rem] ${
            isShow ? "left-0 z-50" : "-left-full"
          } transition-all duration-300 flex flex-col font-bold rounded-xl pb-[2.5rem] pt-[1.5rem] md:static md:flex md:flex-row md:gap-10 md:w-auto md:bg-transparent md:text-base md:text-white md:p-0 md:mt-0 md:items-center`}
        >
          <ul className="flex flex-col gap-5 p-5 text-[1.125rem] md:text-black md:flex-row md:items-center lg:w-full">
            <li className="text-center text-gray-300 md:text-gray-500 ">
              Features
            </li>
            <li className="text-center text-gray-300 md:text-gray-500 ">
              Pricing
            </li>
            <li className="text-center text-gray-300 md:text-gray-500 ">
              Resources
            </li>
            <div className="border-b-2 border-b-gray-600"></div>
            <li className="text-center sm:translate-x-12 text-gray-300 sm:text-gray-500 ">
              Login
            </li>
            <div className="sm:translate-x-12 md:w-24">
              <ButtonSignUp />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
