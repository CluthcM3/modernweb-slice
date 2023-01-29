import React from "react";
import logo from "../assets/logo.svg";
// import {AiOutlineInstagram} from "react-icons/ai"
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
function Footer() {
  const footer = [
    {
      id: 1,
      title: "Useful Link",
      content: [
        "Content",
        "How it Works",
        "Create",
        "Explore",
        "Terms & of Services",
      ],
      height: true,
    },
    {
      id: 2,
      title: "Community",
      content: [
        "Help Center",
        "Partners",
        "Suggestions",
        "Blog",
        "Newsletters",
      ],
      height: true,
    },
    {
      id: 3,
      title: "Partner",
      content: ["Our Partner", "Become a Partner"],
      height: false,
    },
  ];
  return (
    <div className="mx-auto max-w-[1490px]">
      <div className="md:mx-16 xs:mx-6 ">
        <div className="flex lg:flex-row xs:flex-col lg:h-56  md:h-[400px] xs:h-[740px] w-full mt-36">
          <div className="flex lg:w-[35%] xs:w-full">
            <div className="flex flex-col lg:mr-0 xs:mr-10 justify-between md:h-[165px] lg:h-[200px] xl:h-[170px] xs:h-[200px] ">
              <img
                src={logo}
                alt=""
                className="w-[266px] h-[72px] object-contain"
              />
              <p className="text-[#ffffffb3] text-lg lg:w-[70%] xs:w-[95%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat, nulla?
              </p>
            </div>
          </div>
          <div className="flex lg:w-[65%] xs:w-full">
            <div className="grid xs:grid-cols-1 md:grid-cols-3 w-full lg:ml-8 xs:ml-0 ">
              {footer.map(({ id, title, content, height }) => (
                <div
                  key={id}
                  className="w-full flex lg:justify-end xs:w-full xs:mt-8 lg:mt-0"
                >
                  <div
                    className={`w-44 flex flex-col justify-between ${
                      height ? "h-40" : "h-20"
                    }`}
                  >
                    <h4 className="text-white">{title}</h4>

                    {content.map((item) => (
                      <div className="">
                        <p className="text-sm text-[#ffffffb3] cursor-pointer">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-t-[#3f3e45] border-t-[1px] " />
        <div className="flex lg:flex-row xs:flex-col lg:h-16 xs:h-[100px] w-full ">
          <div className="flex lg:w-1/2 xs:w-full h-full">
            <h4 className="text-white mt-4 xs:text-base lg:text-xs lg:w-1/2 xs:w-full xs:text-center lg:text-left">
              2022 HooBank. All rights reserved.
            </h4>
          </div>
          <div className="flex lg:justify-end xs:justify-center lg:w-1/2 xs:w-full h-full">
            <div className="flex justify-between text-white lg:mt-4 xs:mt-2">
              <BsFacebook className="w-[21px] h-[21px] xs:ml-0 lg:ml-6 " />
              <BsInstagram className="w-[21px] h-[21px] xs:ml-5 lg:ml-6 " />
              <BsTwitter className="w-[21px] h-[21px] xs:ml-5 lg:ml-6 " />
              <BsLinkedin className="w-[21px] h-[21px] xs:ml-5 lg:ml-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
