import React from "react";
import { RiSortAsc } from "react-icons/ri";
import send from "../assets/send.svg";
import shield from "../assets/shield.svg";
import stars from "../assets/stars.svg";

function ContentSecond() {
  const data = [
    {
      id: 1,
      title: "Rewards",
      logo: stars,
      text: "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: 2,
      title: "100% Secured",
      logo: shield,
      text: "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: 3,
      title: "Balance Transfer",
      logo: send,
      text: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];
  return (
    <div className="mx-auto xl:max-w-[1490px] w-full ">
      <div className="md:mx-16 mx-6">
        <div className="grid xl:grid-cols-2 xs:grid-cols-1 w-full xl:h-[429px] h-[629px] xs:h-[1340px] xso:h-[1340px] md:h-[929px] lg:h-[829px] ">
          <div className="flex flex-col xs:h-[610px] md:h-full">
            <div className="mt-8 md:w-[85%] xl:w-[90%] w-full ">
              <h1 className="font-semibold xsm:text-[48px] text-white xs:text-[40px]">
                You do the bussines, we'll handle the money
              </h1>
            </div>
            <div className="mt-6 lg:w-[469px] md:w-[470px]">
              <p className="text-[18px] text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum veritatis suscipit numquam placeat? Saepe ex dolor quia
                rerum accusamus!
              </p>
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 px-4 py-2 rounded-lg bg-blue-gradient hover:scale-110 delay-200 ease-in-out duration-150 ">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col relative">
            {/* <div className="">
              <div className="pink__gradient w-44 h-44 absolute -top-20 right-20"></div>
              <div className="white__gradient w-22 h-22 absolute -top-20 right-20"></div>
              <div className="blue__gradient w-1/2 h-1/2 absolute -top-20 right-20"></div>
            </div> */}
            <div className="">
              {/* cards */}
              {data.map(({ id, title, logo, text }) => (
                <div className="md:h-28 xl:h-32 xs:h-56 xs:w-full md:w-[90%]  mb:mb-4 mb:mt-2 xs:mt-0 xs:mb-0">
                  <div className="flex flex-row w-full h-full ">
                    <div
                      className={`flex xs:items-start md:items-center w-full pt-5 xso:pt-4 md:pt-0 ${
                        id == 1 ? "h-full" : "h-[85%]"
                      } hover:bg-gradient-to-r from-gray-700 to-black rounded-lg md:h-full xso:h-[70%]`}
                    >
                      <div className="md:w-[20%] lg:w-[25%] xs:w-[40%] xso:w-[29%]">
                        <div className="bg-white w-16 h-16 mx-auto rounded-full relative bg-[#09977c1a]">
                          <img
                            src={logo}
                            alt=""
                            className="absolute top-3.5 left-4"
                          />
                        </div>
                      </div>
                      <div className="xs:w-[60%] md:w-full">
                        <h1 className="font-semibold text-[18px]  text-white">
                          {title}
                        </h1>
                        <p className="text-white ">{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSecond;
