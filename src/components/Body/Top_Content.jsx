import React from "react";
import bg from "../assets/images/bg1.webp";
import { motion } from "framer-motion";
function Top_Content() {
  return (
    <div className="bg-[#F7FAFF] mt-[50px] ">
      <div className="md:w-[80%]  w-[95%]  pt-24 m-auto md:flex ">
        <div className="md:w-[50%] w-[95%] m-auto">
          <div className="md:text-[50px] text-[24px]  font-extrabold text-[#131a4c]">
            Discover top
            <span className="text-[#8144E5] underline">
              dropshipping suppliers
            </span>
            of original US/EU products
          </div>
          <div className="mt-8 text-[#131a4c] font-semibold ">
            Spocket allows you to choose the best products to sell from
            thousands of dropshipping suppliers all over the world.
          </div>
          <div className="md:flex items-center  w-full mt-8 ">
            <div className="md:w-[70%] w-full shadow-md">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full rounded-sm  shadow-md"
              />
            </div>

            <div className="sm:w-[30%] w-full md:mt-0 mt-4 ">
              <button className="btn  w-full border-none rounded-sm shadow-md bg-[#8144E5] hover:bg-[#8144E5] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-8 text-[14px] text-[#131a4c] font-semibold">
            ✅ No credit card required
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] m-auto md:mt-0 mt-8">
          <img src={bg} alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default Top_Content;
