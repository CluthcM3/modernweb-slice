import React from "react";
import bill from "../assets/bill.png";
import apple from "../assets/apple.svg";
import gplay from "../assets/gplay.svg";
function ContentThirtd() {
  return (
    <div className="mx-auto max-w-[1490px] ">
      <div className="xs:mx-6 md:mx-16">
        <div className="pt-8 flex xs:flex-col xl:flex-row ">
          <div className="hidden xl:flex flex-col mr-10  xl:w-1/2 xs:w-full relative">
            <img
              src={bill}
              alt=""
              className="xl:w-[670px] xl:h-[574px] xs:w-full xs:h-[272px] xso:w-full xso:h-full"
            />
            <div className="absolute pink__gradient w-1/2 h-1/2 -left-80 top-64 rounded-full"></div>
          </div>
          <div className="flex flex-col justify-center xl:w-1/2 xs:w-full">
            <div className="">
              <div className="flex flex-col md:w-[70%] xs:w-full">
                <h1 className="font-semibold text-white md:text-[48px] xs:text-[40px]">
                  Easily control your billing & invoicing.
                </h1>
              </div>
              <div className="flex flex-col mt-5 md:w-[70%] xs:w-full">
                <p className="text-gray-400 text-[18px]">
                  Magnam quod explicabo non iste doloribus sequi libero quasi
                  doloremque minus eius earum, dolorum, molestias tempora
                  repudiandae.
                </p>
              </div>
              <div className="flex items-center xl:gap-4 mt-10">
                <img src={apple} alt="" />
                <img src={gplay} alt="" />
              </div>
            </div>
          </div>
          <div className="xl:hidden xs:flex flex-col mr-10  xl:w-1/2 xs:w-full mt-10 relative">
            <img
              src={bill}
              alt=""
              className="xl:w-[670px] xl:h-[574px] xs:w-full xs:h-[272px] xso:w-full xso:h-full"
            />
            <div className="absolute pink__gradient w-[30%] h-[30%] -left-20 top-32 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentThirtd;
