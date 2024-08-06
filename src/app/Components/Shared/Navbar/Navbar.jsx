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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        console.log(clicked);
        setClicked(!clicked);
    };

    const [clicked_Home, setClicked_home] = useState(false);
    const handleClick_home = () => {
        console.log(clicked_Home);
        setClicked(!clicked_Home);
    };

    const handleLinkClick = (event) => {
        event.preventDefault(); // Evitar que el navegador siga el enlace
    };

    const handleServicesHover = () => {
        setIsMenuOpen(true);
    };
    // var selectMenu="home"

    const [clicked_home, selectMenu] = useState("home");
    var userMenu = "home";
    const handleMouseLeave = (value) => (event) => {
        userMenu = value;

        alert(`userMenu: ${userMenu}`);
    };
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const [selectedMenuHome, setSelectedMenu] = useState(false);

    const handleMenuClick = () => {
        console.log(selectedMenuHome);
        setSelectedMenu(true);
        console.log("selectedMenuHome");
        console.log(selectedMenuHome);
    };

    const [selectedMenuAbout, setSelectedAbout] = useState(false);

    const handleMenuAboutClick = () => {
        setSelectedAbout(true);
        console.log(selectedMenuAbout);
    };

    return (
        <>
            <div className={"navbar__container" + " " + josefinSans.className}>
                <div className={`menudiv ${clicked ? "active" : ""}`}></div>
                <div className="navbarLogo__container">
                    <Link href="/">
                        <Image src={NavBarLogo} alt="t7Logo"></Image>
                    </Link>
                </div>
                <div className={`navbarElements__container ${clicked ? "active" : ""}`}>
                    <ul className="navbarElements_list">
                        <li>
                            <a href="/" className={posicion === "home" ? "active" : ""}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className={posicion === "about" ? "active" : ""}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/products" className={posicion === "services" ? "active" : ""}>
                                Products
                            </a>
                            <div className="menuServicesContainer">
                                <a href="/products/viemy" className="item" style={{animationDelay:'0.05s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VIEMY™</div>
                                        <div className="subtitle">VIGIA Assistance</div>
                                    </div>
                                </a>
                                <a href="/products/vbus" className="item" style={{animationDelay:'0.1s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VBUS®</div>
                                        <div className="subtitle">VIGIA Observability</div>
                                    </div>
                                </a>
                                <a href="/products/vaas" className="item" style={{animationDelay:'0.15s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VAAS™</div>
                                        <div className="subtitle">VIGIA Assistance</div>
                                    </div>
                                </a>
                                <a href="/products/via73" className="item" style={{animationDelay:'0.2s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">V-iA73®</div>
                                        <div className="subtitle">VIGIA Automation</div>
                                    </div>
                                </a>
                                <a href="/products/viot" className="item" style={{animationDelay:'0.25s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VIoT²™</div>
                                        <div className="subtitle">VIGIA Telemetry</div>
                                    </div>
                                </a>
                                <a href="/products/vim" className="item" style={{animationDelay:'0.3s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VIM®</div>
                                        <div className="subtitle">VIGIA Inventory</div>
                                    </div>
                                </a>
                                
                                <a href="/products/vcm" className="item" style={{animationDelay:'0.35s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VCM®</div>
                                        <div className="subtitle">VIGIA Configuration</div>
                                    </div>
                                </a>
                                <a href="/products/machine-life-extended" className="item" style={{animationDelay:'0.4s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">Machine Life Extended™</div>
                                        <div className="subtitle">Support</div>
                                    </div>
                                </a>
                                
                            </div>
                        </li>
                        <li>
                            <a href="/projects" className={posicion === "projects" ? "active" : ""}>
                                Projects
                            </a>
                            {/* <div className="menuServicesContainer">
                                <a href="/projects/viemy" className="item" style={{animationDelay:'0.05s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">VIEMY™</div>
                                        <div className="subtitle">VIGIA Assistance</div>
                                    </div>
                                </a>
                                <a href="/success-case/obsolescence-mitigation-case" className="item" style={{animationDelay:'0.1s'}}>
                                    <div className="icon"></div>
                                    <div className="name">
                                        <div className="title">MLE™</div>
                                        <div className="subtitle">Machine Life Extended™</div>
                                    </div>
                                </a>
                            </div> */}
                        </li>
                        {/* <li>
                            <a href="/blog" className={posicion === "blog" ? "active" : ""}>
                                Blog
                            </a>
                        </li> */}
                        <li>
                            <a href="/contact" className={posicion === "contact" ? "active" : ""}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="burguer">
                    <BurguerButton
                        clicked={clicked}
                        handleClick={handleClick}
                    ></BurguerButton>
                </div>
            </div>
        </>
    );
};
