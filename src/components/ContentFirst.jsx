import React from "react";
import robo1 from "../assets/robo1.png";
import disc from "../assets/discount.svg";
import arrow from "../assets/arrow.svg";

function ContentFirst() {
  return (
    <div className="flex flex-col justify-center bg-primary overflow-hidden">
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:max-w-[1496px] w-full h-full sm:ml-16 mt-28 pb-[4rem]">
          <div className="sm:mt-28 mt-0 w-full sm:mx-0 mx-6">
            <div className="text-white w-[20%] xso:min-w-[320px] xsm:min-w-[370px] xs:min-w-[270px] xso:h-18 md:h-10 xs:h-16 mb-4 flex items-center py-4 px-2 bg-discount-gradient rounded-lg">
              <img src={disc} alt="" className="px-1" />
              <p className="text-lg">
                20% <span className="text-gray-400">Discount For</span> 1 Month
                <span className="text-gray-400"> Account</span>
              </p>
            </div>
            <div className="w-full ">
              <div className="flex w-full h-full">
                <div className="flex w-1/2 max-w-[1496px] xl:w-full lg:w-[44%] md:w-[60%]">
                  <p className="text-white text-[52px] md:text-[72px] font-semibold">
                    The Next <span className="text-gradient">Generation</span>
                  </p>
                </div>
                <div className="hidden max-w-[1496px] w-[40%]  lg:w-[20%] xl:w-[70%]  mb-6 items-end md:flex ">
                  <div className="w-[50%] h-[20%] rounded-full">
                    <div className="w-full h-full rounded-full border-2 border-[#7de7eb] ml-2 animate-bounce">
                      <div className="flex justify-center items-center w-full h-full">
                        <p className="text-gradient flex text-[18px] md:text-[14px] font-semibold">
                          Get Started
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <p className="text-white md:text-[68px] text-[56px] font-semibold">
                Payment Method.
              </p>
              <p className="text-[18px] xsm:w-[377px] md:w-[470px] w-[85%] my-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                cum saepe. Ratione praesentium natus soluta culpa quis voluptate
                totam atque.
              </p>
              <div className="xs:block md:hidden">
                <div className=" w-[125px] h-24 ">
                  <p className="text-gradient border animate-bounce rounded-full h-8 flex items-center justify-center border-[#7de7eb]">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative w-full">
            <img src={robo1} alt="" className="w-full h-full relative z-10" />
            <div className="absolute pink__gradient md:top-0 md:h-[20%] md:w-[30%] z-0 xs:w-[60%] xs:h-[20%] xs:top-16"></div>
            <div className="absolute white__gradient md:bottom-[18rem] md:h-[30%] md:w-[30%] rounded-full xs:w-[20%] xs:h-[20%] xs:top-20"></div>
            <div className="absolute blue__gradient md:w-[30%] md:h-[30%] md:bottom-[36rem]  xs:w-[60%] xs:h-[60%] xs:top-36"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8 md:mx-10 mx-6 lg:mx-0">
        <div className="w-full h-full text-white  xl:max-w-[1496px]">
          <div className="grid xsm:grid-cols-2 lg:grid-cols-3 grid-cols-1  md:mx-6 lg:mx-16 mb-4 w-full h-full lg:max-w-[890px] xl:max-w-none">
            <div className="flex items-center w-full mb-2 ">
              <p className="md:text-[40px] xsm:text-[30px] text-[30px] font-semibold w-[25%] md:w-1/2  xsm:w-[44%] xl:w-[27%] xs:mr-5 xso:mr-2 xsm:mr-2 md:mr-0">
                3800+
              </p>
              <p className="ml-4 text-gradient text-[15px] md:text-[20px] md:w-full w-[70%] xsm:w-[28s%] xsm:text-[15px] lg:pr-8 xl:pr-0">
                USER ACTIVE
              </p>
            </div>
            <div className="flex items-center w-full mb-2 ">
              <p className="md:text-[40px] xsm:text-[30px] text-[30px] font-semibold w-[19%] md:w-[35%]  xsm:w-[35%] xl:w-[20%] xs:mr-5 xso:mr-2 md:mr-0">
                230+
              </p>
              <p className="ml-4 text-gradient text-[15px] md:text-[20px] md:w-full w-[70%] xsm:w-[39%] xsm:text-[15px] xso:mr-0 ">
                TRUSTED BY COMPANY
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="md:text-[40px] xsm:text-[30px] text-[30px] font-semibold w-[28%] md:w-1/2  xsm:w-[55%] xl:w-[35%] xs:mr-7 xso:mr-4 md:mr-0">
                $230M+
              </p>
              <p className="ml-4 text-gradient text-[15px] md:text-[20px] md:w-full w-[70%] xsm:w-full pl-2 md:pl-0 xsm:text-[15px] ">
                TRANSACTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentFirst;
