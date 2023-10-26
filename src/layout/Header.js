import React from "react";
import Link from "next/link";
import LogoImage from "../../public/logo.png";
import Image from "next/image";

function Header() {
  const [scroll, setScroll] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

  const openNav = () => {
    setNavOpen(true);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 0 ? setScroll(true) : setScroll(false);
    });
  }, []);
  return (
    <header className={`header ${scroll && "hideHeader"}`}>
      <div className="wrapper">
        <div className="header-flex">
          <Link className="link-logo" href={"/"}>
            <div className="logo">
              <Image
                className="header-logo-image "
                src={LogoImage}
                alt="Logo Image Placeholder"
              ></Image>
              <h1 className="logo-text">
                Midwest Jerk & <br />
                Green
              </h1>
            </div>
          </Link>

          <nav className={`${navOpen && "open-navigation"}`}>
            <i
              className="ri-close-line close-nav"
              onClick={() => {
                setNavOpen(false);
              }}
            ></i>
            <ul>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  className="link-nav"
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  className="link-nav"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  className="link-nav"
                  href="/menu"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  className="link-nav"
                  href="/wherearewe"
                >
                  WHERE ARE WE ?
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  className="link-nav"
                  href="/contact"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
          <div className="menu">
            <Link className="link-menu" href="/menu">
              Our Menu
            </Link>
          </div>
          <div className="open-nav" onClick={openNav}>
            <i className="ri-menu-3-fill"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
