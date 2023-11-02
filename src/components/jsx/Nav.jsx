import { useState } from "react";
import ButtonSignUp from "./ButtonSignUp";

const Nav = () => {
  const [isShow, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(!isShow);
  };

  return (
    <nav className="text-black absolute top-0 right-0 w-full">
      <div className="flex justify-between p-3 mb-2 items-center h-14">
        <div>
          <img src="/public/images/logo.svg" alt="" />
        </div>
        <div>
          <i
            onClick={handleClickShow}
            className="bx bx-menu bx-flashing text-4xl text-black "
          ></i>
        </div>
      </div>
      <div
        className={`relative mx-auto bg-[#3b3054] w-[18rem] ${
          isShow ? "left-0 z-50" : "-left-full"
        } transition-all duration-300 flex flex-col font-bold rounded-xl pb-[2.5rem] pt-[1.5rem]`}
      >
        <ul className="flex flex-col gap-5 p-5 text-white text-[1.125rem] ">
          <li className="text-center">Features</li>
          <li className="text-center">Pricing</li>
          <li className="text-center">Resources</li>
          <div className="border-b-2 border-b-gray-600"></div>
          <li className="text-center">Login</li>
          <ButtonSignUp />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
