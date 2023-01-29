import React from "react";
import binance from "../assets/binance.png";
import airbnb from "../assets/airbnb.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png";

function ContentSeventh() {
  const data = [
    {
      id: 1,
      img: binance,
    },
    {
      id: 2,
      img: airbnb,
    },
    {
      id: 3,
      img: coinbase,
    },
    {
      id: 4,
      img: dropbox,
    },
  ];
  return (
    <div className="mx-auto max-w-[1490px]">
      <div className="xs:mx-6 md:mx-16">
        <div className="w-full grid md:grid-cols-4 xs:grid-cols-2 mt-8">
          {data.map(({ id, img }) => (
            <div
              key={id}
              className="flex justify-center items-center lg:min-w-[192px] xs:min-w-full my-2"
            >
              <img
                src={img}
                alt=""
                className="cursor-pointer object-contain lg:w-[192px] xs:w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentSeventh;
