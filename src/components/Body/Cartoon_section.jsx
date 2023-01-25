import React, { useEffect, useState } from "react";
import "../assets/css/cartoon_page.css";

import dots from "../assets/images/dotsbg.png";

import "react-toastify/dist/ReactToastify.css";

function Cartoon_section() {
  return (
    <>
      <div className="sp-section-connect-integration wf-section">
        <div
          style={{
            backgroundImage: `url(${dots})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
              <button
                target="_blank"
                className="btn bg-[#8144E5] hover:bg-[#8144E5] text-white border-none"
              >
                <strong className="bold-text-16">
                  Get started for free now
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartoon_section;
