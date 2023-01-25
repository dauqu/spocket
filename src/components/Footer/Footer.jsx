import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import dwn from "../assets/images/dwn2.png";
import logo from "../assets/images/logosp.svg";
function Footer() {
  return (
    <>
      <div className="bg-[#003757] p-8">
        <div className="flex flex-wrap md:justify-evenly md:w-[90%] w-full m-auto ">
          <div className="md:w-[300px] w-[280px]  p-4">
            <div className="font-semibold text-[20px] text-white">Company</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Careers</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Press</div>
          </div>
          <div className="md:w-[300px] w-[280px]  p-4">
            <div className="font-semibold text-[20px] text-white">
              Resources
            </div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Blog</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Help Centre</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Community</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">AliScraper</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Supplier FAQ</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Academy</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Affiliates</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Reviews</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">
              Migrate from Oberlo
            </div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">
              Migrate from DSers
            </div>
          </div>
          <div className="md:w-[300px] w-[280px]  p-4">
            <div className="font-semibold text-[20px] text-white">
              Integrations
            </div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">BigCommerce</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Shopify</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Felex</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Wix</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Ecwid</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Squarespace</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">WooCommerce</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Square</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">Alibaba</div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">AliExpress</div>
          </div>
          <div className="md:w-[300px] w-[280px]  p-4">
            <div className="font-semibold text-[20px] text-white">
              Spocket
            </div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">
              Spocket helps dropshippers around the world discover and dropship
              US/EU based products.
            </div>
            <div className="text-[17px] mt-2 text-[#C7C8CD]">
              Trusted by <b className="text-white">100,000+</b> entrepreneurs
              like you.
            </div>
            <div className="text-[17px]   mt-2 text-[#C7C8CD]">
              <img
                src={dwn}
                alt=""
                className="hover:cursor-pointer h-[130px] w-[250px]"
              />
            </div>
          </div>
        </div>
        <div className="md:flex  mt-8 items-center">
          <div className="flex flex-wrap md:w-[70%] w-full items-center">
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-ghost hover:bg-transparent">
                © 2022 Spocket. All rights reserved.
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-ghost hover:bg-transparent">
                Terms of Service
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-ghost hover:bg-transparent">
                Privacy Policy
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-ghost hover:bg-transparent">
                Data Addendum
              </button>
            </div>
          </div>
          <div className="flex flex-wrap md:w-[30%] w-full items-center">
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-sm btn-ghost hover:bg-transparent">
                <AiFillFacebook  size={30}/>
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-sm  btn-ghost hover:bg-transparent">
                <AiFillYoutube  size={30}/>
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-sm btn-ghost hover:bg-transparent">
                <AiOutlineInstagram  size={30}/>
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-sm btn-ghost hover:bg-transparent">
                <AiOutlineTwitter  size={30}/>
              </button>
            </div>
            <div className="text-[#C7C8CD] md:m-2 ">
              <button className="btn btn-sm btn-ghost hover:bg-transparent">
                <AiFillLinkedin  size={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
