import React from "react";
import Image from "next/image";
import LogoImage from "../../public/logo.png";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-container">
        <div className="preloader-main">
          <Image
            className="preloader-logo-img"
            src={LogoImage}
            alt="Preloader Logo Image"
          />
        </div>
        <div className="loader">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
