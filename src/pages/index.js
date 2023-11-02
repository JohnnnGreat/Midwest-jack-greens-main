import Image from "next/image";
import React from "react";
import LogoImage from "../../public/logo.png";

const index = () => {
  return (
    <div className="maintenance">
      <div className="maintenance_wrapper">
        <section className="logo">
          <Image src={LogoImage} className="m-logo" alt="Logo"></Image>
          <h1>MIDWESTJERK</h1>
        </section>
        <section className="desc-m">
          <div>
            <h1>The site is currently down for maintenance</h1>
            <p>
              {" "}
              We apologize for any inconveniences caused, We are almost done.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
