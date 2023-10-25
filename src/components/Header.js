import Image from "next/image";
import Link from "next/link";
import WrapperImage from "../../public/heroimg.jpg";
import TruckImage from "../../public/Truck.jpg";

function HeaderSection({ text, truck }) {
  return (
    <section className="header-page">
      <div className="header-p-wrapper">
        <div className="placeholder">
          <Image
            src={truck ? TruckImage : WrapperImage}
            className="img"
            alt="Background Image"
          ></Image>
          <div className="overlay"></div>
          <h1 className="text-big">{text}</h1>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
