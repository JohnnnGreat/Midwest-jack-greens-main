import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import MenuImg from "../../public/MenuImg.jpg";
import Link from "next/link";
import Head from "next/head";

function Menu() {
  const [mouseEnter, setMouseEnter] = React.useState(false);
  const handlePlc = React.useRef(null);

  React.useEffect(() => {
    console.log(handlePlc.current.target);
  }, []);
  const menuItems = [
    {
      id: 1,
      Name: "Oxtail Dinner",
      price: "$25",
      imageSrc: MenuImg,
    },
    {
      id: 2,
      Name: "Jerk Mixed",
      price: "$20",
      imageSrc: MenuImg,
    },
    {
      id: 3,
      Name: "Shrimp Dinner",
      price: "$23",
      imageSrc: MenuImg,
    },
    {
      id: 4,
      Name: "Oxtail Rice Bolw",
      price: "$15",
      imageSrc: MenuImg,
    },
    {
      id: 5,
      Name: "Wing Dinner",
      price: "$18",
      imageSrc: MenuImg,
    },
    {
      id: 6,
      Name: "Rasta Pasta",
      price: "$25",
      imageSrc: MenuImg,
    },
  ];

  // Second Menu Display

  const secondMenu = [
    {
      id: 1,
      name: "Wings Only",
      price: "$25",
    },
    {
      id: 1,
      name: "Wings Only",
      price: "$25",
    },
    {
      id: 1,
      name: "Rasta Pasta",
      price: "$25",
    },
  ];
  return (
    <>
      <Head>
        <title>Menu | MidWest Jerk</title>
      </Head>
      <Header text="Our Menu" />
      <section className="menu-p">
        <div className="menu-p__wrapper">
          <div className="menu-p-grid">
            {menuItems.map((menuItem) => (
              <div className="menu-container" key={menuItem.id}>
                {
                  <div className="img-c">
                    <div
                      ref={handlePlc}
                      className={`image-plc `}
                      onMouseEnter={(e) => {
                        e.target.classList.add("showPlaceholder");
                        setMouseEnter(true);
                      }}
                      onMouseLeave={(e) => {
                        e.target.classList.remove("showPlaceholder");
                        setMouseEnter(false);
                      }}
                    >
                      <Link
                        className="link-order"
                        target="_blank"
                        href="https://order.online/business/MidwestJerk-11458557?utm_source=sdk&visitorId=18ab7af25a04ad9bf"
                      >
                        ORDER NOW
                      </Link>
                    </div>
                    <Image
                      className="menu-p-img"
                      src={menuItem.imageSrc}
                      alt="Menu Item"
                    ></Image>
                  </div>
                }
                <div className="content-menu">
                  <h1>{menuItem.Name}</h1>
                  <div className="menu-line">
                    <div className="line"></div>
                    <p>{menuItem.price}</p>
                  </div>
                </div>
              </div>
            ))}
            {secondMenu.map((item) => (
              <div key={item.id} className="second-menu">
                <h1>{item.name}</h1>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
          <div className="dinner-sides">
            <p>Dinner comes w/2 sides Extra Side $6</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
