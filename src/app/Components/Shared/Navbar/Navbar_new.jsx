import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBarLogo from "@/assets/img/T7-Group-Logotipo-Blanco.png";
import "./navbar.css";
// import { ServicesMenu } from "./ServicesMenu/ServicesMenu";
import { Josefin_Sans } from "next/font/google";
import BurguerButton from "./BurguerButton/BurguerButton";

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const Navbar = ({ refs, posicion }) => {


    return (
        <>
            <div className="navbarContainer">
                <div className="navbarBody">
                    <div className="logoContainer">
                        <Image src={NavBarLogo} alt="t7Logo"></Image>
                    </div>
                    <div className="menuContainer">
                        <a href="/" className="menuItem">
                            Home
                        </a>
                        <a href="/about" className="menuItem">
                            About
                        </a>
                        <a href="/services" className="menuItem">
                            Services
                        </a>
                        <a href="/projects" className="menuItem">
                            Projects
                        </a>
                        <a href="/blogs" className="menuItem">
                            Blog
                        </a>
                        <a href="/contact" className="menuItem">
                            Contact
                        </a>
                    </div>
                    <div className="menuButtonBurger">
                        <BurguerButton />
                    </div>
                </div>
            </div>
            <div className="menuContainerMovil">
                <a href="/" className="menuItemMovil">
                    Home
                </a>
                <a href="/about" className="menuItemMovil">
                    About
                </a>
                <a href="/services" className="menuItemMovil">
                    Services
                </a>
                <a href="/projects" className="menuItemMovil">
                    Projects
                </a>
                <a href="/blogs" className="menuItemMovil">
                    Blog
                </a>
                <a href="/contact" className="menuItemMovil">
                    Contact
                </a>
                
            </div>
        </>
    );
};
