import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../assets/css/Navbar.css";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { BiChevronDown } from "react-icons/bi";
import { API } from "../Constant/Constant";
import spocket_logo from "../assets/images/logosp.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const a = 1;

  // code to check if user is logged in or not
  const [isloggedin, setIsloggedin] = useState(false);
  const [checklogin, setChecklogin] = useState("");
  const getuser = () => {
    axios
      .get(`${API}/user_login/check_valid_token`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setChecklogin(res.data);
        // setIsloggedin(true);
      })
      .catch((err) => {
        console.log(err);
        // setIsloggedin(false);
      });
  };

  useEffect(() => {
    getuser();
  }, []);

  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);

  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(false);

  // const [ mlink1, setMlink1 ] = useState(false);
  // const [ mlink2, setMlink2 ] = useState(false);
  // const [ mlink3, setMlink3 ] = useState(false);
  // const [ mlink4, setMlink4 ] = useState(false);

  const setMlink1 = () => {
    if (link1 == true) {
      setLink1(false);
    } else {
      setLink1(true);
    }
  };
  const setMlink2 = () => {
    if (link2 == true) {
      setLink2(false);
    } else {
      setLink2(true);
    }
  };
  const setMlink3 = () => {
    if (link3 == true) {
      setLink3(false);
    } else {
      setLink3(true);
    }
  };
  const setMlink4 = () => {
    if (link4 == true) {
      setLink4(false);
    } else {
      setLink4(true);
    }
  };

  return (
    <>
      <nav className="w-full overflow-hidden lg:overflow-visible">
        <div className="lg:max-w-[1200px] m-auto h-[84px] flex   justify-between items-center px-4">
          <div className="h-[24px] cursor-pointer">
            <img src={spocket_logo} className="h-full" />
          </div>
          <ul className="lg:flex hidden items-center font-medium h-[30px]">
            <li
              className="px-2 cursor-pointer h-[30px]"
              onMouseOver={() => setLink1(true)}
              onMouseLeave={() => setLink1(false)}
            >
              <div className="flex items-center">
                <p>Dropship</p>
                <BiChevronDown />
              </div>
              <div className={link1 ? "block" : "hidden"}>
                <ul className="p-4 bg-white shadow-md rounded-md">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li
              className="px-2 cursor-pointer h-[30px]"
              onMouseOver={() => setLink2(true)}
              onMouseOut={() => setLink2(false)}
            >
              <div className="flex items-center">
                <p>Integrations</p>
                <BiChevronDown />
              </div>
              <div className={link2 ? "block" : "hidden"}>
                <ul className="p-4 bg-white shadow-md rounded-md">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li
              className="px-2 cursor-pointer h-[30px]"
              onMouseOver={() => setLink3(true)}
              onMouseOut={() => setLink3(false)}
            >
              <div className="flex items-center">
                <p>Partnerships</p>
                <BiChevronDown />
              </div>
              <div className={link3 ? "block" : "hidden"}>
                <ul className="p-4 bg-white shadow-md rounded-md">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li className="px-2 cursor-pointer h-[30px]">
              <div className="flex items-center">
                <p>Winning Products</p>
              </div>
            </li>
            <li
              className="px-2 cursor-pointer h-[30px]"
              onMouseOver={() => setLink4(true)}
              onMouseOut={() => setLink4(false)}
            >
              <div className="flex items-center">
                <p>Resources</p>
                <BiChevronDown />
              </div>
              <div className={link4 ? "block" : "hidden"}>
                <ul className="p-4 bg-white shadow-md rounded-md">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li className="px-2 cursor-pointer h-[30px]">
              <div className="flex items-center">
                <p>Pricing</p>
              </div>
            </li>
          </ul>
          <div className="lg:flex items-center hidden">
            <button className="btn btn-ghost hover:bg-transparent font-medium mr-2">Login</button>
            <button className="btn hover:bg-[#8144e5] bg-[#8144e5] rounded-[4px] h-[48px] text-white leading-[48px] px-[16px]">
              Get Started
            </button>
          </div>
          <div
            className={
              menu
                ? "hidden"
                : "menuicon lg:hidden text-[#8144e5] underline font-semibold cursor-pointer"
            }
            onClick={() => {
              setMenu(true);
              setClose(true);
            }}
          >
            Menu
          </div>
          <div
            className={
              close
                ? "menuicon lg:hidden text-[#8144e5] underline font-semibold cursor-pointer"
                : "hidden"
            }
            onClick={() => {
              setClose(false);
              setMenu(false);
            }}
          >
            Close
          </div>
        </div>

        <div
          className={
            menu ? "bg-white lg:hidden block overflow-hidden" : "hidden"
          }
        >
          <ul className="bg-white py-[20px]">
            <li
              className="h-[40px] bg-white cursor-pointer"
              onClick={() => {
                setMlink1();
              }}
            >
              <div className="flex items-center justify-between z-0">
                <p className="px-4">Dropship</p>
                <BiChevronDown />
              </div>
              <div
                className={
                  link1
                    ? "flex bg-white rounded-md shadow-xl w-full z-10 absolute"
                    : "hidden"
                }
              >
                <ul className="m-4">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li
              className="h-[40px] bg-white cursor-pointer"
              onClick={() => {
                setMlink2();
              }}
            >
              <div className="flex items-center justify-between z-0">
                <p className="px-4">Integrations</p>
                <BiChevronDown />
              </div>
              <div
                className={
                  link2
                    ? "block bg-white rounded-md shadow-xl w-full z-10 absolute"
                    : "hidden"
                }
              >
                <ul className="m-4">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li
              className="h-[40px] bg-white cursor-pointer"
              onClick={() => setMlink3()}
            >
              <div className="flex items-center justify-between z-0">
                <p className="px-4">Partnerships</p>
                <BiChevronDown />
              </div>
              <div
                className={
                  link3
                    ? "block bg-white rounded-md shadow-xl w-full z-10 absolute"
                    : "hidden"
                }
              >
                <ul className="m-4">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li className="h-[40px] bg-white cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="mx-4">Winning Products</p>
              </div>
            </li>
            <li
              className="h-[40px] bg-white cursor-pointer"
              onClick={() => setMlink4()}
            >
              <div className="flex items-center justify-between">
                <p className="px-4">Resources</p>
                <BiChevronDown />
              </div>
              <div
                className={
                  link4
                    ? "block bg-white rounded-md shadow-xl w-full z-10 absolute"
                    : "hidden"
                }
              >
                <ul className="m-4">
                  <li>Link1</li>
                  <li>Link2</li>
                </ul>
              </div>
            </li>
            <li className="h-[40px] bg-white cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="px-4">Pricing</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
