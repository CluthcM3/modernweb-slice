import React from "react";

function ContentEightth() {
  return (
    <div className="mx-auto max-w-[1490px]">
      <div className="md:mx-16 xs:mx-6">
        <div className="flex items-center rounded-xl bg-black-gradient-2 w-full md:h-[320px] xs:h-[350px] xso:h-[310px] lg:h-[280px] xl:h-[220px] mt-16">
          <div className="flex flex-col xl:w-[75%] lg:w-[60%] xs:w-full md:ml-16 xs:mx-6 xs:h-full md:h-72 ipad:h-52 lg:h-[200px] xl:h-[150px]">
            <h1 className="md:text-5xl xs:text-4xl xs:mt-4 font-semibold text-white">
              Let's try our service now!
            </h1>
            <p className="md:text-lg xs:w-full xl:w-[52%] xs:mt-6 xs:mb-8 md:mt-4 md:mb-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              alias rem tempore.
            </p>
            <div className="lg:hidden xs:flex lg:w-[25%] w-full justify-end">
              <button className="bg-blue-500 px-6 py-4 rounded-lg bg-blue-gradient hover:scale-110 delay-200 ease-in-out duration-150 font-semibold">
                Get Started
              </button>
            </div>
          </div>
          <div className="xs:hidden lg:flex xl:w-[25%] lg:w-[25%] w-full justify-center">
            <button className="bg-blue-500 px-12 py-5 rounded-lg bg-blue-gradient hover:scale-110 delay-200 ease-in-out duration-150 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentEightth;
