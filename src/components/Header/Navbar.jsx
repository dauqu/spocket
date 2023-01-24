import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { BiChevronDown } from "react-icons/bi";
import { API } from "../Constant/Constant";
function Navbar() {
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

  return (
    <>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <RxCross1 size={28} /> : <AiOutlineMenu size={28} />}
        </div>
        <div className="itemCont">
          <div className="leftitem">
            <Link to="/">
              <h2 className="logo text-black">spocket</h2>
            </Link>
          </div>
          <div className="miditem">
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="links dropdown dropdown-hover ">
              <label
                tabIndex={0}
                className="btn m-1 bg-[#F7FAFF] text-[#131a4c] border-none hover:bg-[#F7FAFF]"
              >
                Hover <BiChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rightdiv">
            <div>
              <button className="btn btn-active  bg-[#F7FAFF] border-none text-[#131a4c] hover:bg-[#F7FAFF] sm:mr-2">
                Login
              </button>
            </div>
            <div>
              <button className="btn     border-none rounded-sm bg-[#8144E5] hover:bg-[#8144E5] text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
