import React from "react";
import bg from "../assets/images/bg1.webp";
import { motion } from "framer-motion";
function Top_Content() {
  return (
    <div className="bg-[#F7FAFF] mt-[50px] ">
      <div className="md:w-[80%] pt-24 m-auto md:flex ">
        <div className="w-[50%] m-auto">
          <div className="md:text-[50px] font-extrabold text-[#131a4c]">
            Discover top
            <span className="text-[#8144E5] underline">
              {" "}
              dropshipping suppliers
            </span>{" "}
            of original US/EU products
          </div>
          <div className="mt-8 text-[#131a4c] font-semibold ">
            Spocket allows you to choose the best products to sell from
            thousands of dropshipping suppliers all over the world.
          </div>
          <div className="md:flex items-center  w-full mt-8 ">
            <div className="w-[70%] shadow-md">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full rounded-sm  shadow-md"
              />
            </div>

            <div className="md:w-[30%] ">
              <button className="btn  border-none rounded-sm shadow-md bg-[#8144E5] hover:bg-[#8144E5] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-8 text-[14px] text-[#131a4c] font-semibold">
            ✅ No credit card required
          </div>
        </div>
        <div className="w-[50%] m-auto">
          <img src={bg} alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default Top_Content;
