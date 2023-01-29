import React from "react";
import quotes from "../assets/quotes.svg";
import people01 from "../assets/people01.png";
function ContentSixth() {
  const data = [
    {
      id: 1,
      img: people01,
      name: "Herman Jensen",
      level: "Founder & Leader",
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    },
    {
      id: 2,
      img: people01,
      name: "Steve Mark",
      level: "Founder & Leader",
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    },
    {
      id: 3,
      img: people01,
      name: "Kenn Gallagher",
      level: "Founder & Leader",
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
    },
  ];
  return (
    <div className="mx-auto max-w-[1490px] relative">
      <div className="md:mx-16 xs:mx-6 ">
        <div className=" grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:h-[1340px] lg:h-[900px] xl:h-[460px] relative ">
          {data.map(({ id, img, name, level, text }) => (
            <div
              key={id}
              className="flex flex-row w-full max-w-[370px] h-[380px] hover:bg-gradient-to-br from-gray-700 to-black rounded-3xl mt-10 mr-10 z-10"
            >
              <div className="flex flex-col justify-between text-white w-full xs:mx-5 xsm:mx-10 my-12">
                <img
                  src={quotes}
                  alt=""
                  className="object-contain w-[42px] h-[27px]"
                />
                <p className="leading-[32px] text-lg">{text}</p>
                <div className="flex">
                  <div className="flex items-center xsm:w-[25%] xs:w-[30%]">
                    <img src={people01} className="w-[48px] h-[48px]" alt="" />
                  </div>
                  <div className="flex flex-col w-[85%]">
                    <p className="text-white font-semibold text-xl leading-[32px]">
                      {name}
                    </p>
                    <p className="text-gray-400">Founder & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute blue__gradient w-[25%] h-[70%] -top-[2   50px] -right-[20px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ContentSixth;
