import React from "react";
import Header from "@/components/Header";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Us | Midwest Jerk & Green</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header text="About" />
      <section className="about-desc">
        <div className="about-desc-wrapper">
          <h1 className="content-header">
            Bringing the Taste of the Tropic to You!
          </h1>
          <h2 className="content-sub-header">
            Introducing Midwest Jerk and Greens: The Ultimate Caribbean Flavors!
          </h2>
          <p className="content-main">
            Craving a taste of the tropics right here in the Midwest? Look no
            further! At Midwest Jerk and Greens, we bring you the vibrant and
            mouthwatering flavors of authentic jerk chicken and ox tails,
            combined with soulful greens that will transport your taste buds to
            paradise.
          </p>

          <p className="content-main">
            Our chefs use only the finest ingredients and traditional cooking
            methods to deliver a fusion of spices and herbs that will leave you
            craving for more. Each mouthful is a symphony of bold flavors,
            tender meats, and perfectly cooked greens that will have you coming
            back for seconds, thirds, and beyond.
          </p>

          <p className="content-main">
            Experience the sizzling jerk chicken, marinated to perfection and
            char-grilled for that irresistible smoky taste. Our slow-cooked ox
            tails are tender and juicy, infused with a rich blend of spices
            that&apos;ll have you savoring every bite. And don&apos;t forget our
            greens - carefully prepared with love and bursting with flavor!
          </p>

          <p className="content-main">
            At Midwest Jerk and Greens, it&apos;s not just about the food;
            it&apos;s about the whole experience. Our welcoming atmosphere,
            friendly staff, and vibrant Caribbean-inspired decor will make you
            feel like you&apos;ve stepped into an island oasis.
          </p>

          <p className="content-main">
            Whether you&apos;re looking for a quick lunch, a family dinner, or a
            catering service for your special event, Midwest Jerk and Greens has
            you covered. We&apos;re committed to providing you with an
            unforgettable culinary journey, right here in the heart of Las
            Vegas.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
