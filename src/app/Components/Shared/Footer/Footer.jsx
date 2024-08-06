import React from "react";
import "./footer.css";
import { RotatingButton } from "../RotatingButton/RotatingButton";
import Image from "next/image";
import TwitterIcon from "@/assets/icons/TwitterIcon.png";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.png";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const handleLinkClick = (event) => {
  event.preventDefault(); // Evitar que el navegador siga el enlace
  // scrollToSection(ref);
};

export const Footer = ({ refs }) => {
  return (
    <div className={"footer__container" + " " + josefinSans.className}>
      <div className="footer_main__container">
        <div className="footer_mainText">
          <h1>
            Unleash the Power of <br />
            your Network
          </h1>
        </div>
        <div className="footer_circleButton">{/* <RotatingButton /> */}</div>
      </div>
      <hr />
      <div className="footer_nav__container">
        <ul className="navbarElements_list">
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li><a href="/projects">Projects</a></li>
          {/* <li>
            <a href="/blog">Blog</a>
          </li> */}
          <li>           
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="footer_social__container">
          <a href="https://www.linkedin.com/company/t7-international-group/" target="_blank">
            <Image
              src={LinkedInIcon}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </a>
        </div>
      </div>
      <div className="footer_copyright__container">
        <h3>© 2024 T7 Group®, All rights reserved</h3>
        <a href="/privacy-policy"><h3>Privacy Policy</h3></a>
        <a href="/terms"><h3>Terms and conditions</h3></a>
      </div>
    </div>
  );
};
