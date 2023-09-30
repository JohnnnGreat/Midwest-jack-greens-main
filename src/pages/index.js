import Image from "next/image";
import Link from "next/link";
import WrapperImage from "../../public/heroimg.jpg";
import MenuImage from "../../public/MenuImg.jpg";
import SubscribeForm from "../components/Subscribe";
import React from "react";
import Head from "next/head";

// Fedd Images
import ImageOne from "../../public/Mac.jpg";
import ImageTwo from "../../public/Rasta.jpg";
import ImageThree from "../../public/Sizzling.jpg";
import ImageFour from "../../public/Yam.jpg";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    setShowModal(true);
    setTimeout(() => {}, 4000);
  });
  return (
    <>
      <Head>
        <title>HOME | Midwest Jerk & Green</title>
        <meta
          name="description"
          content="House of Maxwell & Bessie Adiele was established in the memory of
          Mr. Maxwell and Mrs. Bessie Adiele, ordinary humans who lived
          extraordinary lives; a life of kindness and compassion to all, in
          a world filled with individuality, selfishness and segregation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* // Hero Section */}
      <section className="hero">
        <div className="wrapper">
          <div className="placeholder">
            <Image
              src={ImageThree}
              className="img"
              alt="Background Image"
            ></Image>
            <div className="overlay"></div>
            <div className="text-display">
              <h1 className="text-welcome">Welcome!</h1>
              <h1 className="text-big">Midwest Jerk and Greens.</h1>
              <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <p className="desc">A Jamaican/Soul Cusine Company.</p>
              <div className="link-flex">
                <Link
                  className="link-order"
                  target="_blank"
                  href="https://order.online/business/MidwestJerk-11458557?utm_source=sdk&visitorId=18ab7af25a04ad9bf"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // Menu Section */}
      <section className="menu-s">
        <div className="menu-wrapper">
          <div className="menu-grid">
            <div
              className="first-grd"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 className="intr">Taste our meal</h1>
              <h1 className="main-txt">Our Menu</h1>
              <p className="menu-desc">
                Explore a culinary journey like no other at Midwest Jerk and
                Green. Our menu is a symphony of flavors, carefully crafted to
                delight your taste buds. From savory appetizers that awaken your
                palate to exquisite main courses that leave a lasting
                impression, every dish is a work of art.
              </p>
              <Link href="/menu" className="view-more">
                <p>VIEW OUR MENU</p>
                <i class="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div
              className="second-grd"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <svg
                width="506"
                height="506"
                viewBox="0 0 506 506"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-rotate"
              >
                <circle
                  cx="253"
                  cy="253"
                  r="252"
                  stroke="#F5D97C"
                  stroke-width="2"
                />
                <circle cx="31.5" cy="133.5" r="12.5" fill="#F5D97C" />
                <circle cx="472.5" cy="383.5" r="12.5" fill="#F5D97C" />
              </svg>

              <Image
                className="menu-img"
                src={ImageOne}
                alt="This is a menu Image"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <div className="our-concerns">
        <div className="wrapper">
          <h1 className="concern-tag"> Our Concerns.</h1>
          <div className="concerns-grid">
            <div className="box">
              <h1>WHOLESOME FOOD </h1>
            </div>

            <div className="box">
              <h1>LOCAL PRODUCE </h1>
            </div>
            <div className="box">
              <h1>TRADITIONAL RECIPES </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Hot Item of the Week */}
      <section className="item">
        <Image
          src={ImageThree}
          className="image-micr"
          alt="Image Three"
        ></Image>
        <div className="item-wrapper">
          <div className="item-header">
            <h1
              className="item-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Hot Item of the Week!
            </h1>
            <p
              className="item-desc"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Each week, our talented chefs handpick a sensational dish
              that&apos;s sure to dazzle your taste buds. From sizzling steaks
              to delectable desserts, this limited-time offering is a must-try.
            </p>
          </div>
          <div className="item-main">
            <div
              className="first-sec"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="divider"></div>
              <h1 className="first-text">MARINATED JERK OXTAILS</h1>
              <p className="second-text">
                Marinated oxtails overnight with 2 sides of your choice.
              </p>
              <div className="items-cta">
                <div className="price-tag">$25</div>
                <Link className="order" href="/">
                  ORDER ONLINE
                </Link>
              </div>
            </div>
            <div className="second-sec">
              <div
                className="img-container"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="item-img-desc">
                  MIDWEST JERT <br />
                  OXTAILS
                </div>
                <Image className="img-item" src={ImageTwo}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscribeForm />
      <section className="photos">
        <div className="wrapper">
          <div className="grid-photos">
            <Image
              data-aos="fade-down"
              data-aos-duration="1000"
              className="photos-img"
              src={ImageOne}
            ></Image>
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              className="photos-img"
              src={ImageTwo}
            ></Image>
            <Image
              data-aos="fade-right"
              data-aos-duration="1000"
              className="photos-img"
              src={ImageThree}
            ></Image>
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              className="photos-img"
              src={ImageFour}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
