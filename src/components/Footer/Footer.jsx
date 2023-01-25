import React, { useEffect, useState } from "react";
// import { RiMailSendFill } from "react-icons/ri";
// import { SiFreelancer, SiWhatsapp } from "react-icons/si";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
// import { GrLinkedin, GrMail } from "react-icons/gr";
// import { BsChatLeftText, BsInstagram } from "react-icons/bs";
import "../assets/css/footer.css";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import curvBG from "../assets/images/footer_curve.svg";

import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { API } from "../Constant/Constant";
// import { AiOutlineStar } from "react-icons/ai";

function Footer() {
  // const [checklogin, setChecklogin] = useState(""); // to chech if user is logged in or not
  // const [reviewtoast, setReviewtoast] = useState(false); // to show toast message after submitting review
  // const [reviewErr, setReviewErr] = useState(false); // to show error message if review is not submitted

  // const getuser = () => {
  //   axios
  //     .get(`${API}/user_login/check_valid_token`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //       setChecklogin(res.data);
  //       // setIsloggedin(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // setIsloggedin(false);
  //     });
  // };

  // useEffect(() => {
  //   getuser();
  // }, []);

  // to get profile data of user if logged in
  // const [profiledata, setProfiledata] = useState([]);
  // const getprofiledata = () => {
  //   axios
  //     .get(`${API}/user_profile`)
  //     .then((res) => {
  //       // console.log(res.data.user);
  //       setProfiledata(res.data.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   getprofiledata();
  // }, []);

  // code to submit review to database
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [review, setReview] = useState("");
  // const [rating, setRating] = useState(0);
  // const handlereviewSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(`${API}/review`, {
  //       name: profiledata.name,
  //       email: profiledata.email,
  //       review: review,
  //       rating: rating,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setReviewtoast(true);
  //       notify();
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, [3000]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setReviewErr(true);
  //       notifyErr();
  //     });
  // };

  // const notify = () => {
  //   toast.success("Thanks! for your review..", {
  //     position: "bottom-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // };

  // const notifyErr = () => {
  //   toast.error("Please Enter Review..", {
  //     position: "bottom-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // };

  return (
    <>
      <div className="sp-section-connect-integration wf-section">
        <img
          src="https://assets.website-files.com/5b3213161e5234bf1cfff9e1/62d7ac37efac88ccb861d029_product-glasses.webp"
          width={226}
          alt="Glasses product"
          height={205}
          loading="lazy"
          className="sp-product-glasses"
        />
        <img
          src="https://assets.website-files.com/5b3213161e5234bf1cfff9e1/62d7ac1a80fdf949e5b698c5_product-paint.webp"
          width={165}
          alt="Frame product"
          height={250}
          loading="lazy"
          className="sp-product-frame"
        />
        <img
          src="https://assets.website-files.com/5b3213161e5234bf1cfff9e1/62d7abf2160fff9c95e89bf2_product-toy.webp"
          width={220}
          alt="Toy product"
          height={253}
          loading="lazy"
          className="sp-product-toy"
        />
        <div className="sp-container-width w-container">
          <div className="sp-container-centre">
            <div className="sp-section-main-label">
              <strong>Start now</strong>
            </div>
            <h2 className="sp-section-title sp-text-center sp-white-text">
              <strong>Grow your dropshipping business today for FREE!</strong>
            </h2>
            <a
              target="_blank"
              className="sp-primary-button sp-button-big w-button"
            >
              <strong className="bold-text-16">Get started for free now</strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
