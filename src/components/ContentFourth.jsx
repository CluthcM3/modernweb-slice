import React from "react";
import card from "../assets/card.png";
function ContentFourth() {
  return (
    <div className="max-w-[1490px] mx-auto">
      <div className="md:mx-16 xs:mx-6">
        <div className="flex xl:flex-row xs:flex-col pt-24 xs:h-[870px]  xl:h-[670px] md:h-[1000px] lg:h-[1220px]">
          <div className="flex justify-center flex-col  xs:w-full xl:w-1/2 mr-10">
            <h1 className="text-white xs:text-[40px] xl:text-[48px] font-semibold xs:w-full xl:w-[90%] lg:w-[55%]">
              Find a better card deal in few easy steps
            </h1>
            <p className="text-lg text-gray-400 xs:w-full xl:w-[75%] lg:w-[55%] pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              expedita modi blanditiis qui optio consectetur?
            </p>
            <div className="mt-8">
              <button className="bg-blue-500 px-5 py-4 rounded-lg bg-blue-gradient hover:scale-110 delay-200 ease-in-out duration-150 ">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex xs:w-full xl:w-1/2 xs:mt-8 xl:mt-0">
            <img src={card} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentFourth;
