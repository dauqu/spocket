import React from "react";
import curvBG from "../assets/images/curv.svg";
import dots from "../assets/images/dots.svg";
import dots2 from "../assets/images/dot2.webp";
import dot4 from "../assets/images/dot4.webp";
import dot3 from "../assets/images/dot3.webp";
import dot5 from "../assets/images/dot5.webp";
import free from "../assets/images/free.svg";
import txt from "../assets/images/txt.svg";
import flag from "../assets/images/flag.svg";
import off from "../assets/images/off.svg";
import { BsArrowRightShort } from "react-icons/bs";
function Center_Section() {
  return (
    <>
      <div className="mt-24">
        <div
          className=" w-full bg-[#F7FAFF]  py-[80px]"
          style={{
            backgroundImage: `url(${curvBG})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-12 md:w-[75%] w-[90%] md:mt-24    bg-white m-auto p-8 shadow-2xl ">
            <div className="md:w-[80%] m-auto text-center flex justify-center">
              <div className="relative">
                <div className="  items-center justify-center absolute z-0">
                  <img src={dots} alt="" srcset="" className="h-[150px]" />
                </div>
                <div className="font-extrabold md:text-[45px] m-10 relative">
                  What is Dropshipping?
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className=" md:flex items-center justify-evenly">
                <div className=" md:flex items-center">
                  <div className="cardd w-[200px] ">
                    <div className="flex items-center">
                      <div className="w-[100%] m-auto">
                        <img src={dots2} alt="" className="w-full" />
                      </div>
                    </div>
                    <div className="text-center text-[17px]  font-bold text-[#222940] ">
                      Customer purchases products from your online store
                    </div>
                  </div>
                  <div className="bg-[#F4F5F8] rounded-full">
                    <BsArrowRightShort size={40} color="#8144E5" />
                  </div>
                </div>
                <div className=" md:flex items-center">
                  <div className="cardd w-[200px] ">
                    <div className="flex items-center">
                      <div className="w-[100%] m-auto">
                        <img src={dot5} alt="" className="w-full" />
                      </div>
                    </div>
                    <div className="text-center text-[17px]  font-bold text-[#222940] ">
                      Their order goes directly to your suppliers
                    </div>
                  </div>
                  <div className="bg-[#F4F5F8] rounded-full">
                    <BsArrowRightShort size={40} color="#8144E5" />
                  </div>
                </div>
                <div className=" md:flex items-center">
                  <div className="cardd w-[200px] ">
                    <div className="flex items-center">
                      <div className="w-[100%] m-auto">
                        <img src={dot3} alt="" className="w-full" />
                      </div>
                    </div>
                    <div className="text-center text-[17px]  font-bold text-[#222940] ">
                      Your suppliers ship the product to your customer
                    </div>
                  </div>
                  <div className="bg-[#F4F5F8] rounded-full">
                    <BsArrowRightShort size={40} color="#8144E5" />
                  </div>
                </div>
                <div className=" md:flex items-center">
                  <div className="cardd w-[200px] ">
                    <div className="flex items-center">
                      <div className="w-[100%] m-auto">
                        <img src={dot4} alt="" className="w-full" />
                      </div>
                    </div>
                    <div className="text-center text-[17px]  font-bold text-[#222940] ">
                      You keep the profit from the retail price
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" w-full bg-[#f8f8f8]  py-[70px]"
          style={{
            backgroundImage: `url(${curvBG})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-12 md:w-[75%] w-[90%] md:mt-12   m-auto p-8   ">
            <div className="md:w-[80%] md:text-[40px] text-[17px] md:font-extrabold font-bold m-auto text-center flex justify-center">
              <span className="mr-4 underline text-[#8144E5]">10x</span>your
              Dropshipping business with Spocket
            </div>
            <div className="md:mt-24 mt-8 ">
              <div className=" md:flex justify-evenly items-center">
                <div className="cardd flex-wrap w-[300px] ">
                  <div className="flex items-center">
                    <div className="w-[100%] m-auto">
                      <img src={free} alt="" className="w-[70%] " />
                    </div>
                  </div>
                  <div className="text-left  text-[20px] md:m-2 m-auto font-bold text-[#222940] ">
                    No Upfront Cost
                  </div>
                  <div className="text-left  text-[17px]  md:m-2 m-auto   font-semibold text-[#222940] ">
                    Start using Spocket for free- No requirement of credit card
                    details, or registration fee
                  </div>
                </div>
                <div className="cardd flex-wrap w-[300px] ">
                  <div className="flex items-center">
                    <div className="w-[100%] m-auto">
                      <img src={txt} alt="" className="w-[70%] " />
                    </div>
                  </div>
                  <div className="text-left  text-[20px] md:m-2 m-auto font-bold text-[#222940] ">
                    Branded Invoicing
                  </div>
                  <div className="text-left  text-[17px]  md:m-2 m-auto   font-semibold text-[#222940] ">
                    Make your mark with a unique brand identity- your invoice
                    represents your brand.
                  </div>
                </div>
                <div className="cardd flex-wrap w-[300px] ">
                  <div className="flex items-center">
                    <div className="w-[100%] m-auto">
                      <img src={flag} alt="" className="w-[70%] " />
                    </div>
                  </div>
                  <div className="text-left  text-[20px] md:m-2 m-auto font-bold text-[#222940] ">
                    US/EU Original Suppliers
                  </div>
                  <div className="text-left  text-[17px]  md:m-2 m-auto   font-semibold text-[#222940] ">
                    Reliable US, EU and Global suppliers with fast shipping on
                    high quality winning products.
                  </div>
                </div>
                <div className="cardd flex-wrap w-[300px] ">
                  <div className="flex items-center">
                    <div className="w-[100%] m-auto">
                      <img src={off} alt="" className="w-[70%] " />
                    </div>
                  </div>
                  <div className="text-left  text-[20px] md:m-2 m-auto font-bold text-[#222940] ">
                    The Best Deals on Products
                  </div>
                  <div className="text-left  text-[17px]  md:m-2 m-auto   font-semibold text-[#222940] ">
                    Heavy discounts ranging from 30-40% on all products.
                    Exclusively on Spocket.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Center_Section;
