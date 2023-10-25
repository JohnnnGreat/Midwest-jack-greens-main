import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/logo.png";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="footer" aria-describedby="Foooter section">
      {/* <div className="glare"></div> */}
      <div className="footer-wrapper">
        <div className="sm-follow">
          <h1>Follow Us</h1>
          <div className="social-media-ics">
            <Link
              href="https://www.facebook.com/profile.php?id=100090690231203&mibextid=LQQJ4d"
              target="_blank"
              className="link-sm"
            >
              <i class="ri-facebook-circle-line"></i>
            </Link>
            <Link
              className="link-sm"
              target="_blank"
              href="https://www.instagram.com/mdwjerk"
            >
              <i class="ri-instagram-line"></i>
            </Link>
          </div>
        </div>
        <div className="divider"></div>
        <div className="cta-footer">
          <h1>We looking Forward to Having You Dine With Us</h1>
        </div>
        <div className="logo-container">
          {/* <Image
            className="logo-img"
            src={LogoImage}
            alt="footer Logo image"
          ></Image> */}
        </div>
        <h1 className="copyright">
          © 2020 by Midwest Jerk & Greens, Inc. Powered by
          <Link
            className="footer-link"
            href="https://www.macgrouptech.com/"
            target="_blank"
          >
            MacGroup Technologies
          </Link>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
