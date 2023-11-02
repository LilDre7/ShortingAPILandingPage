import { useState } from "react";
import ButtonSignUp from "./ButtonSignUp";

const Nav = () => {
  const [isShow, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(!isShow);
  };

  return (
    <nav className="text-white absolute top-0 right-0 w-full">
      <div className="flex justify-between p-3 mb-2 items-centerbg-red-700 h-14">
        <h1 className="text-3xl font-bold tracking-wider">Shortly</h1>
        <div>
          <i
            onClick={handleClickShow}
            className="bx bx-menu bx-flashing text-4xl"
          ></i>
        </div>
      </div>
      <div
        className={`absolute top-full bg-[#3f2a5d] w-[18rem] ${
          isShow ? "left-0 z-50 bg-blue-800" : "-left-full"
        } transition-all duration-300 flex flex-col font-bold rounded-xl bg-red-400 `}
      >
        <ul className="flex flex-col gap-5 p-5">
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
