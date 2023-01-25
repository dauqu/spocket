import React from "react";
import curvBG from "../assets/images/curv.svg";
import dotsbg from "../assets/images/dotsbg.png";
import lion from "../assets/images/lion.webp";
import glasses from "../assets/images/glasses.webp";
import style from "../assets/images/style.webp";

function Cartoon_section() {
  return (
    <div
      className=" bg-[#8D87FA] pt-[80px]"
      style={{
        backgroundImage: `url(${curvBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="   w-full py-8   ">
        <div
          className="md:flex "
          style={{
            backgroundImage: `url(${dotsbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-[30%]">
            <div className="md:w-[280px]">
              <img
                src={glasses}
                alt=""
                srcset=""
                className="relative top-[-200px]"
              />
            </div>
            <div className="w-[280px]">
              <img src={lion} alt="" className="relative  " />
            </div>
          </div>
          <div className="md:w-[40%]">
            <div className="text-center">
              <button className="btn btn-sm bg-[#E9E6FF] hover:bg-[#E9E6FF] text-[#8645E5] border-none text-[18px] font-bold">
                Start Now
              </button>
              <div className="mt-8 text-white font-bold text-[40px]">
                Grow your dropshipping business today for FREE!
              </div>
              <div className="mt-8">
                <button className="btn btn-xl border-none bg-[#8144E5] hover:bg-[#8144E5] text-white font-bold text-[20px]">
                  Get Started for free
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] flex text-right justify-end items-end">
            <img src={style} alt="" className="w-[180px] h-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartoon_section;
