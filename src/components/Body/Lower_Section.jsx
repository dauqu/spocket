import React from "react";
import curve from "../assets/images/curv.svg";
import wave from "../assets/images/wavebg.png";
import person from "../assets/images/p_bg.webp";
import women from "../assets/images/w_bg.webp";
function Lower_Section() {
  return (
    <div
      className=" w-full bg-[#eef3fa]  py-[80px]"
      style={{
        backgroundImage: `url(${curve})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="md:w-[80%] m-auto w-[95%]">
        <div
          className="bg-[#F8F8FF] md:flex md:h-[300px] h-auto md:p-12 p-4 mt-8  hover:shadow-2xl "
          style={{
            backgroundImage: `url(${wave})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-1/2 w-full ">
            <div className="md:text-[24px] text-[20px] text-[#222939] font-bold">
              How I made $178,492 in 3 months by dropshipping US and European
              products
            </div>
            <div>
              <button className="btn bg-[#8144E5] hover:bg-[#8144E5] border-none mt-6 text-white font-bold">
                Get started for free
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full ">
            <img
              src={person}
              alt=""
              className="relative md:top-[-120px] md:mt-0 mt-8 w-[80%] md:m-0 m-auto"
            />
          </div>
        </div>
        <div
          className="bg-[#F8F8FF] md:flex  md:h-[300px] h-auto md:p-12 p-4 mt-36  hover:shadow-2xl "
          style={{
            backgroundImage: `url(${wave})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="md:w-1/2 w-full ">
            <img
              src={women}
              alt=""
              className="relative md:top-[-120px]  md:mt-0 mt-8 w-[80%] md:m-0 m-auto"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="md:text-[24px] text-[20px]   text-[#222939] font-bold">
              How this entrepreneur earned $442,991 in just six months Get
            </div>
            <div>
              <button className="btn bg-[#8144E5] hover:bg-[#8144E5] border-none mt-6 text-white font-bold">
                Get started for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lower_Section;
