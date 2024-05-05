import { Button, Carousel } from "antd";
import React from "react";
import { bannerData } from "../../assets/constants";
import { earringBanner } from "../../assets";

export const Banner = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className=" h-[25vh] bg-bannerBackground bg-top bg-cover bg-no-repeat  bg-gray-100 rounded-2xl flex flex-1 md:h-[40vh] lg:h-[70vh]">
      <div className="flex flex-col gap-1 items-start justify-center ml-10 text-white lg:gap-4 ">
        <p className="text-sm lg:text-4xl ">Gold Big Hoops</p>
        <p className="text-sm lg:text-3xl">$ 68.00</p>
        <Button className=" bg-transparent text-white border-white h-auto mt-2 px-4 py-1 text-[10px] lg:px-8 lg:py-2 lg:mt-8 lg:text-lg">
          View Product
        </Button>
      </div>
      {/* <Carousel arrows infinite>
        {bannerData.map((banner, bannerIndex) => (
          <div key={bannerIndex} className="flex flex-1 m-0">
            <img src={banner.image} alt={banner.label} className="w-full" />
            <p>{banner.label}</p>
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};
