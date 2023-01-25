import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import bg from "../assets/images/bg2.webp";
import bg3 from "../assets/images/bg3.webp";
import bg4 from "../assets/images/bg4.webp";
import bg5 from "../assets/images/bg5.webp";
function MidContent() {
  return (
    <>
      <div className="md:flex md:w-[80%] w-[90%] m-auto justify-center mt-24  items-center p-4">
        <div className="md:w-[47%] w-full    m-auto text-justify  ">
          <img src={bg} alt="" />
        </div>
        <div className="md:w-[47%] w-full     ">
          <div className="font-extrabold md:text-[35px] text-[24px] text-[#131a4c]">
            Find winning dropshipping products
          </div>
          <div className="text-[#131a4c] mt-6 leading-8">
            Spocket allows you to choose the best products to dropship from
            various categories from dropshipping suppliers all over the world.
          </div>
          <Link>
            <div className="mt-6 flex items-center font-bold text-[#8347E5]  underline decoration-indigo-500">
              Get Started
              <AiOutlineArrowRight size={14} className="font-bold ml-2" />
            </div>
          </Link>
        </div>
      </div>
      <div className="  md:w-[85%] w-full   justify-center md:mt-16 m-auto p-4">
        <div className="md:flex flex-wrap items-center justify-between md:mt-24 mt-8  m-auto  md:w-[85%] w-[90%]   ">
          <div className="md:w-[48%]  w-full m-auto">
            <div className="font-bold  md:md:text-[35px] text-[24px] ">
              Try the products yourself
            </div>
            <div className="  text-[17px] leading-8 md:mt-6 mt-4 text-[#131a4c] ">
              Order product samples right from the dashboard in a few clicks.
              Easily test out the products and suppliers to build a reliable
              dropshipping business.
            </div>
            <Link>
              <div className="mt-6 flex items-center font-bold text-[#8347E5]  underline decoration-indigo-500">
                Get Started
                <AiOutlineArrowRight size={14} className="font-bold ml-2" />
              </div>
            </Link>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-8 m-auto">
            <img src={bg3} alt="" />
          </div>
        </div>
      </div>
      <div className="md:flex md:w-[80%] w-[90%] m-auto justify-center mt-24  items-center p-4">
        <div className="md:w-[47%] w-full    m-auto text-justify  ">
          <img src={bg4} alt="" />
        </div>
        <div className="md:w-[47%] w-full     ">
          <div className="font-extrabold md:text-[35px] text-[24px] text-[#131a4c]">
            Connect your online store with ease
          </div>
          <div className="text-[#131a4c] mt-6 leading-8">
            Fulfill your orders with one click. Spocket can easily sync with
            your online store and all orders automatically appear in your app.
            Spocket is integrated with
            <span className="font-bold ml-2">
              Shopify, BigCommerce, Wix, and WooCommerce.
            </span>
          </div>
          <Link>
            <div className="mt-6 flex items-center font-bold text-[#8347E5]  underline decoration-indigo-500">
              Get Started
              <AiOutlineArrowRight size={14} className="font-bold ml-2" />
            </div>
          </Link>
        </div>
      </div>
      <div className="  md:w-[85%] w-full   justify-center md:mt-16 m-auto p-4 md:pb-12 pb-6">
        <div className="md:flex flex-wrap items-center justify-between md:mt-24 mt-8  m-auto  md:w-[85%] w-[90%]   ">
          <div className="md:w-[48%]  w-full m-auto">
            <div className="font-bold  md:md:text-[35px] text-[24px] ">
            Discover dropshipping suppliers with fast shipping
            </div>
            <div className="  text-[17px] leading-8 md:mt-6 mt-4 text-[#131a4c] ">
            With 80% of our dropshipping suppliers <span className="font-bold ml-2">based in the US or Europe,</span>  shipping is quick, reliable, and effortless.
            </div>
            <Link>
              <div className="mt-6 flex items-center font-bold text-[#8347E5]  underline decoration-indigo-500">
                Get Started
                <AiOutlineArrowRight size={14} className="font-bold ml-2" />
              </div>
            </Link>
          </div>
          <div className="md:w-[48%] md:mt-0 mt-8 m-auto">
            <img src={bg5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MidContent;
