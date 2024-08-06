import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Layout } from "../Shared/Layout/Layout";
import "./homePage.css";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import blog1 from "@/assets/img/blog1.png";
import blog2 from "@/assets/img/blog2.png";
import blog3 from "@/assets/img/blog3.png";
import blog4 from "@/assets/img/blog4.png";
import { Badge } from "../Shared/Badge/Badge";
import { CircleArrowButton } from "../Shared/CircleArrowButton/CircleArrowButton";
import Link from "next/link";
import { Projects } from "../Shared/Projects/ProjectsComponent";

export const HomePage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    const textRef = useRef(null);
    const textRef2 = useRef(null);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);

    const refs = {
        section1: section1Ref,
        section2: section2Ref,
        section3: section3Ref,
        section4: section4Ref,
        section5: section5Ref,
        section6: section6Ref,
        section7: section7Ref,
    };

    useEffect(() => {
        const texts = ["Unleash", "of your"];
        const texts2 = ["the Power", "Network"];
        let index = 0;

        textRef.current.style.opacity = 0;
        textRef2.current.style.opacity = 0;

        const interval = setInterval(() => {
            textRef.current.textContent = texts[index];
            textRef2.current.textContent = texts2[index];
            textRef.current.style.opacity = 1;
            textRef2.current.style.opacity = 1;
            index = (index + 1) % texts.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const productos = [
        {
            productName: "VIEMY™",
            productLink: "/products/viemy",
            descriptions: "VIGIA Assistance"
        },
        {
            productName: "VBUS®",
            productLink: "/products/vbus",
            descriptions: "VIGIA Observability"
        },
        {
            productName: "VAAS™",
            productLink: "/products/vaas",
            descriptions: "VIGIA Prediction"
        },
        {
            productName: "V-iA73®",
            productLink: "/products/via73",
            descriptions: "VIGIA Automation"
        },
        {
            productName: "VIoT²™",
            productLink: "/products/viot",
            descriptions: "VIGIA Telemetry"
        },
        {
            productName: "VIM®",
            productLink: "/products/vim",
            descriptions: "VIGIA Inventory"
        },
        {
            productName: "VCM®",
            productLink: "/products/vcm",
            descriptions: "VIGIA Configuration"
        },
        {
            productName: "Machine Life Extended™",
            productLink: "/products/machine-life-extended",
            descriptions: "Support"
        },
    ];

    const blogs = [
        {
            title: "Data, how to put this information asset to good use?",
            theme: "Datascience",
            date: "December 10, 2023",
            url: "https://t7g.ai/blog-datos-como-activo.html",
            image: blog1,
        },
        {
            title: "What is a smart city?",
            theme: "Technology",
            date: "November 25, 2023",
            url: "https://t7g.ai/blog-antiguas-ciudades-futuro-inteligente.html",
            image: blog2,
        },
        {
            title: "What has been a main key in the technology development?",
            theme: "Technology",
            date: "September 15, 2023",
            url: "https://t7g.ai/blog-talento-activo.html",
            image: blog3,
        },
        {
            title: "How to transform your operation center?",
            theme: "Data Center",
            date: "July 12, 2023",
            url: "https://t7g.ai/blog-centro-operaciones.html",
            image: blog4,
        },
    ];

    return (
        <Layout refs={refs} posicion={"home"}>
            <div ref={section1Ref} className="home_primerSeccion__Container">
                <video autoPlay muted loop playsInline className="video-background">
                    <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/bg-main_optimized.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <div className="orange-mask"></div>
                <div className="s1_home_content__container">
                    <div className="mainTitle__container">
                        <div className="mainTitle">
                            <h1 ref={textRef}>Unleash the</h1>
                            <h1 ref={textRef2}>Power</h1>
                        </div>
                        {/* <div className='actionButton_container'>
                            <RotatingButton />
                        </div> */}
                    </div>
                    <div className="subTitle__container">
                        <p>
                            We offer more than just technological products, services, and
                            solutions, we also take your company to the next level.
                        </p>
                    </div>
                </div>
            </div>
            <div ref={section2Ref} className="segundaSeccion__Container">
                <div className="videoContainer">
                    <video width="100%" height="100%" controls preload="none">
                        <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/viemy/VIEMY-V1-9.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="buttonViemy__container">
                    <ActionButton link="/products/viemy" text="GO TO VIEMY™" />
                </div>
            </div>
            <div ref={section3Ref} className="home_terceraSeccion__Container">
                <div className="title_column">
                    <ContentTitle text="about us" />
                </div>
                <div className="content_column">
                    <div className="s3_mainText__container">
                        <h1>
                            Propelling your company to the future with tailored technology
                            solutions
                        </h1>
                    </div>
                    <div className="s3_subText__container">
                        <div className="s3_subText1">
                            <h3>
                                <strong>A strategic partner.</strong>
                            </h3>
                            <p>
                                At T7 Group®, we are not just a company with a global presence
                                and years of experience, but a strategic partner that propels
                                you towards the future. We are passionate about developing and
                                implementing innovative technology solutions that maximize your
                                environments and give you a competitive edge in today&acute;s
                                market.
                            </p>
                            <h3>
                                <strong>Our experience, your success.</strong>
                            </h3>
                            <p>
                                Through a personalized approach, we identify the specific needs
                                of your business and design tailored solutions that allow you to
                                take full advantage of the latest technologies. We have a highly
                                qualified team recognized in various economic sectors, which
                                allows us to offer you a comprehensive and high-quality service.
                            </p>
                            <h3>
                                <strong>Innovation as the driving force of change.</strong>
                            </h3>
                            <p>
                                We believe in innovation as the driving force of change.
                                Therefore, we stay at the forefront of the latest technological
                                trends and integrate them into our solutions to offer you the
                                best options on the market.
                            </p>
                            <h3>
                                <strong>
                                    With T7 Group®, your company will be prepared to face the
                                    challenges of the future with success.
                                </strong>
                            </h3>
                        </div>
                        {/* <div className="s3_subText2">
              <p>
                which allow our customers to take full advantage of their
                technological enviroments. We have a prestige in different
                economic sectors, identifying ourselves as a business group with
                modern tailor made solutions, developing competitive advantages
                with technological innovation.
              </p>
            </div> */}
                    </div>
                    <div className="s3_actionButton__container">
                        <ActionButton link="/about" text="show more" />
                    </div>
                </div>
            </div>
            <div ref={section4Ref} className="cuartaSeccion__Container">
                <div className="s4_header__container">
                    <ContentTitle text="our products" />
                    <br />
                    <br />
                    <br />
                    <h1>
                        Protecting your technological future with proactive solutions.
                    </h1>
                    <h3>
                        In addition to resolving issues, we provide even greater value by
                        anticipating potential incidents that may arise within your
                        company&acute;s technological environment. Through preventive
                        actions, we reduce service downtime and help you keep your business
                        running smoothly.
                    </h3>
                </div>
                <div className="s4_products_container">
                    {productos.map((item, index) => {
                        return (
                            <Link key={index + 1} href={item.productLink}>
                                <div
                                    key={index + 1}
                                    className="s4_product__container"
                                    onMouseEnter={() => {
                                        setIsHovered(true);
                                        setIsLeaving(false);
                                    }}
                                    onMouseLeave={() => {
                                        setIsHovered(false);
                                        setTimeout(() => setIsLeaving(true), 500);
                                    }}
                                >
                                    <div className="s4_productEnum__container">
                                        <ContentTitle text={index + 1} />
                                    </div>
                                    <div className="s4_productName__container">
                                        <h1>{item.productName}</h1>
                                        <h2>{item.descriptions}</h2>
                                    </div>
                                    <div className="s4_productArrow__container">
                                        <div
                                            className={`circleProduct ${isLeaving ? "leave" : ""}`}
                                        >
                                            <ArrowIcon
                                                className="arrow_icon"
                                                fill={isHovered ? "white" : "black"}
                                                style={{
                                                    transform: isHovered
                                                        ? "rotate(45deg)"
                                                        : "rotate(0deg)",
                                                    zIndex: 2,
                                                }}
                                                height="50"
                                                width="50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="s4_button__container">
                    <ActionButton link="/products" text="check products
                    " />
                </div>
            </div>
            <div ref={section5Ref} className="quintaSeccion__Container">
                <div className="s5_header__container">
                    <ContentTitle text="why choose us" />
                </div>
                <div className="s5_content__container">
                    <div className="s5_mainText__container">
                        <h1>
                            Meeting your expectations is just the beginning. We aim to exceed
                            them every time.{" "}
                        </h1>
                        <div className="s5_button__container">
                            <ActionButton
                                link="/contact"
                                theme="dark"
                                text="let's create"
                            />
                        </div>
                    </div>
                    <div className="s5_subText__container">
                        <p>
                            <strong>
                                Experts in technological solutions for specialized sectors.
                            </strong>
                            <br />
                            <br />
                            <br />
                            Our technological solutions are not just tools, they are building
                            blocks for your future. We combine our experience in strategic
                            projects with our technical, technological, and financial
                            capabilities to offer you customized solutions that adapt to the
                            needs of your business, regardless of location.
                            <br />
                            <br />
                            <br />
                            <strong> More than solutions, results.</strong>
                        </p>
                    </div>
                </div>
                <div className="s5_contadores__container">
                    <div className="s5_contador cont1">
                        <h1>+15,000</h1>
                        <p>Supported Elements</p>
                    </div>
                    <div className="s5_contador cont2">
                        <h1>+300</h1>
                        <p>Executed Projects</p>
                    </div>
                    <div className="s5_contador cont3">
                        <h1>+150</h1>
                        <p>Successful Implementations</p>
                    </div>
                </div>
            </div>
            <div ref={section6Ref} className="sextaSeccion__Container">
                <div className="s6_header__container">
                    <div className="s6_header__titleContainer">
                        <ContentTitle text="our projects" />
                    </div>
                    <div className="s6_header__mainTitleContainer">
                        <h1>Learn more about our successful projects</h1>
                    </div>
                </div>

                <Projects product="all" />
                {/* <div className="busc">
                    <div className="s6_contentCol1">
                        <div className="s6_verticalCard">
                            <div className="s6_verticalCard__imageContainer">
                                <img src="/assets/img/viemysce.png"></img>
                            </div>
                            <div className="s6_verticalCard__textContainer">
                                <h1>Optimized operations success</h1>
                                <Badge text="viemy™" />
                            </div>
                        </div>
                        <div className="s6_horizontalCard">
                            <div className="s6_horizontalCard__imageContainer">
                                <Image
                                    src={horizontalCardImage1}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="s6_horizontalCard__textContainer">
                                <h1>
                                    Operational Continuity Transformation: Elimination of
                                    Interruptions and Maximization of Investments
                                </h1>
                                <Badge text="Machine Life Extended™" />
                            </div>
                        </div>
                        <ActionButton
                            className="action_desktop"
                            link="/about"
                            text="view our projects"
                            style={{ marginTop: "5rem" }}
                        />
                    </div>
                    <div className="s6_contentCol2">
                        <div className="s6_horizontalCard">
                            <div className="s6_horizontalCard__imageContainer">
                                <Image
                                    src={horizontalCardImage2}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="s6_horizontalCard__textContainer">
                                <h1>Precise Measurements of Energy Consumption</h1>
                                <Badge text="V-IoT² VIGIA INTERNET OF THINGS™" />
                            </div>
                        </div>
                        <div className="s6_verticalCard">
                            <div
                                className="s6_verticalCard__imageContainer"
                                style={{ display: "flex", justifyContent: "end" }}
                            >
                                <Image
                                    src={verticalCardImage2}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}
                                className="s6_verticalCard__textContainer"
                            >
                                <h1>
                                    Proactive Optimization of Mobile Networks: Monitoring and
                                    Prediction for Efficient Operations
                                </h1>
                                <div className="vigiaButton">
                                    <Badge text="VIGIA Network BUS®" />
                                </div>
                                <br />
                                <div className="viagiaButtonTwo">
                                    <Badge text="VIGIA Advanced Algorithmic Suite®" />
                                </div>


                            </div>
                        </div>
                    </div>
                    <ActionButton
                        className="action_movil"
                        link="/about"
                        text="view our work"
                        style={{ marginTop: "5rem" }}
                    />
                </div> */}

            </div>
            {/* <div ref={section7Ref} className="septimaSeccion__Container"> */}
                {/* <div className="s7_header__container">
                    <div className="s7_header_titleContainer">
                        <ContentTitle text="our blog" />
                    </div>
                    <div className="s7_header_titleDescContainer">
                        <h1>
                            We invite you to join our journey, to be part of our community.
                        </h1>
                    </div>
                </div> */}

                {/* Blogs No eliminar */}
                {/* <div className="s7_blogs__container">
                    {blogs.map((item, index) => {
                        return (
                            <Link key={index + 1} href={item.url}>
                                <div key={index + 1} className="s7_blog__container">
                                    <div className="s7_blog__imageContainer">
                                        <Image
                                            src={item.image}
                                            layout="responsive"
                                            width={100}
                                            height={100}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className="s7_blog__descContainer">
                                        <div className="s7_blog_descTitleContainer">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="s7_blog_detailsContainer">
                                            <Badge text={item.theme} theme="dark" />
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="s7_blog_buttonContainer">
                                        <CircleArrowButton theme="dark" height={80} width={80} />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div> */}
                {/* <div className="s7__button_container">
                    <ActionButton link="/blogs" theme="dark" text="view all posts" />
                </div> */}
            {/* </div> */}
        </Layout>
    );
};
