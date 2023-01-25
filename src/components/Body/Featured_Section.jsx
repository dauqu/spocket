import React from "react";
import item from "../assets/images/item1.webp";
import item2 from "../assets/images/item2.webp";
import item3 from "../assets/images/item3.webp";
import item4 from "../assets/images/item4.webp";
import item5 from "../assets/images/item5.webp";
import item6 from "../assets/images/item6.webp";
import img1 from "../assets/images/forbes.webp";
import img2 from "../assets/images/geekwire.webp";
import img3 from "../assets/images/shopify.webp";
import img4 from "../assets/images/techstars.webp";
import img5 from "../assets/images/uni.webp";
function Featured_Section() {
  return (
    <>
      <div className="md:w-[80%] md:flex items-center justify-around md:mt-24 w-[95%] m-auto">
        <div className="flex flex-wrap justify-between md:p-2 p-4 ">
          <div className="md:w-[170px] md:m-4  w-[150px]   text-center ">
            <div className="w-auto m-auto hover:scale-110 hover:transition-all duration-700">
              <img src={item6} alt="" className="w-full m-auto" />
            </div>
            <div className="font-bold md:text-[25px] text-[#131a4c]">
              Sell With Easy method
            </div>
          </div>
          <div className="md:w-[170px] md:m-4  w-[150px]   text-center ">
            <div className="w-auto m-auto hover:scale-110 hover:transition-all duration-700">
              <img src={item5} alt="" className="w-full m-auto" />
            </div>
            <div className="font-bold md:text-[25px] text-[#131a4c]">
              Up-to-Date Inventory
            </div>
          </div>
          <div className="md:w-[170px] md:m-4  w-[150px]   text-center ">
            <div className="w-auto m-auto hover:scale-110 hover:transition-all duration-700">
              <img src={item} alt="" className="w-full m-auto" />
            </div>
            <div className="font-bold md:text-[25px] text-[#131a4c]">
              Best Quality Products
            </div>
          </div>
          <div className="md:w-[170px] md:m-4  w-[150px]   text-center ">
            <div className="w-auto m-auto hover:scale-110 hover:transition-all duration-700">
              <img src={item2} alt="" className="w-full m-auto" />
            </div>
            <div className="font-bold md:text-[25px] text-[#131a4c]">
              Great Profit Margin
            </div>
          </div>
          <div className="md:w-[170px] md:m-4  w-[150px]   text-center ">
            <div className="w-auto m-auto hover:scale-110 hover:transition-all duration-700">
              <img src={item3} alt="" className="w-full m-auto" />
            </div>
            <div className="font-bold md:text-[25px] text-[#222939]">
              Super-Fast Delivery
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[80%] w-[95%] m-auto">
        <div className="md:mt-24  mt-8 md:text-[23px] text-[19px] text-center font-bold text-[#131a4c]">
          Feature on
        </div>
        <div className=" flex flex-wrap md:mt-8 mt-6 justify-evenly ">
          <div className="flex-wrap w-[150px] md:m-0 m-4">
            <img src={item4} alt="" className="w-full" />
          </div>
          <div className="flex-wrap w-[150px] md:m-0 m-4">
            <img src={img3} alt="" className="w-full" />
          </div>
          <div className="flex-wrap w-[150px] md:m-0 m-4">
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className="flex-wrap w-[150px] md:m-0 m-4">
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="flex-wrap w-[150px] md:m-0 m-4">
            <img src={img5} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured_Section;
