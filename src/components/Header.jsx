import { React, useState } from "react";
import logo from "../assets/logo.svg";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div
        className={`flex justify-center w-full h-20 border-b border-neutral-700 ${
          open
            ? "bg-primary md:bg-transparent md:backdrop-blur-2xl"
            : "backdrop-blur-2xl"
        } fixed z-20`}
      >
        <div className="flex items-center h-full xl:max-w-[1496px] w-full md:mx-16 mx-5 md:mr-20 ">
          <img src={logo} alt="" className="w-[138px] h-[32px]" />
          <div className="flex justify-end items-center w-full ">
            <RiMenuFill
              className="text-white md:hidden block w-7 h-7 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
            />
            <ul className="text-white hidden md:flex items-center gap-7">
              <li className="ml-1 cursor-pointer">Home</li>
              <li className="ml-1 cursor-pointer">Features</li>
              <li className="ml-1 cursor-pointer">Product</li>
              <li className="ml-1 cursor-pointer">Clients</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 w-[calc(100%-4.5rem)] md:mt-0 mt-20 z-40 ${
          open ? "translate-x-0" : "translate-x-[-100%]"
        } bg-primary shadow-xl transition duration-300  lg:static lg:w-auto md:translate-x-[-100%] lg:border-r-0 lg:shadow-none`}
      >
        <div className="h-48 md:hidden">
          <ul className="text-white">
            <li className="ml-5 mt-8 cursor-pointer">Home</li>
            <li className="ml-5 mt-8 cursor-pointer">Features</li>
            <li className="ml-5 mt-8 cursor-pointer">Product</li>
            <li className="ml-5 mt-8 cursor-pointer">Clients</li>
          </ul>
        </div>
        {/* <div className="flex justify-center relative bg-red-50 z-0 top-0 w-44 h-44"></div> */}
      </div>
    </div>
  );
}

export default Header;
