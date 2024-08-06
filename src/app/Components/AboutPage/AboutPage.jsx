import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./aboutPage.css";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { RotatingEyeButton } from "../Shared/RotatingEyeButton/RotatingEyeButton";
import Image from "next/image";
import img1 from "@/assets/img/about-img1.png";
import T7GroupLogo from "@/assets/img/about_T7Group.png";
import T7DimensionLogo from "@/assets/img/about_T7Dimension.png";
import VigiaLogo from "@/assets/img/about_Vigia.png";
import HeadQuarters from "@/assets/img/about_site.png";
import quoteImg from "@/assets/img/about_quote.png";

export const AboutPage = () => {
    return (
        <>
            <Layout posicion={"about"}>
                <div className="abaut_mainContainer">
                    <div className="headerContainer">
                        <video autoPlay muted loop playsInline className="video-background">
                            <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/Videotest1.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="primerSeccion__container">
                            <div className="s1_title__container">
                                <h1>T7 Group® is a company with presence all around the world</h1>
                            </div>
                            <div className="s1_imagen_container">
                                <Image
                                    src={img1}
                                    layout="responsive"
                                    alt="viemy"
                                    className="s1_image"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="segundaSeccion__container">
                        <div className="s2_content__mainContainer">
                            <div className="s2_primeraSeccionContainer">
                                <ContentTitle text="Our Story" />
                                <h2>
                                    T7 Group®: Your technology partner to take your business to
                                    the next level! Our experience endorses us as an innovative
                                    company committed to the success of our clients. We offer
                                    custom-made technology solutions that will help you make the
                                    most of your business potential.
                                </h2>
                            </div>
                            <div className="s2_segundaSeccionContainer">
                                <ContentTitle text="Our Values" />
                                <h4>
                                    Throughout our history, we have constantly challenged
                                    ourselves to improve, breaking our own barriers and reaching
                                    new milestones. And there is nothing that motivates us more
                                    than continuing to grow and improve.
                                </h4>
                                <div className="s2_segundaSeccion__contentContainer">
                                    <div className="s2_segundaSeccion_content">
                                        <div className="segundaSeccion_titleContainer">
                                            <h1>What makes us different?</h1>
                                        </div>
                                        <div className="segundaSeccion_descContainer">
                                            <ul>
                                                <li>
                                                    <h5>
                                                        <strong>
                                                            We are passionate about technology:&nbsp;
                                                        </strong>
                                                        We believe that technology can be a powerful tool to
                                                        drive the growth of your business.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h5>
                                                        <strong>We are obsessed with quality:&nbsp;</strong>
                                                        We strive to offer the highest quality solutions
                                                        that meet your specific needs.
                                                    </h5>
                                                </li>

                                                <li>
                                                    <h5>
                                                        <strong>
                                                            We are a team of highly qualified
                                                            professionals:&nbsp;
                                                        </strong>
                                                        We have a team of experts in different areas of
                                                        technology who are willing to help you achieve your
                                                        goals.
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="s2_segundaSeccion_content">
                                        <div className="segundaSeccion_titleContainer">
                                            <h1>What can we offer you?</h1>
                                        </div>
                                        <div className="segundaSeccion_descContainer">
                                            <ul>
                                                <li>
                                                    <h5>
                                                        <strong>Custom software development:&nbsp;</strong>
                                                        We create customized software that adapts to the
                                                        specific needs of your business.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h5>
                                                        <strong>
                                                            Implementation of technological solutions: &nbsp;
                                                        </strong>
                                                        We help you implement the most suitable
                                                        technological solutions for your company.
                                                    </h5>
                                                </li>

                                                <li>
                                                    <h5>
                                                        <strong>Technological consulting: &nbsp;</strong>
                                                        We advise you on making strategic decisions related
                                                        to technology.
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="terceraSeccion__container">
                        <ContentTitle text="our group" />
                        <h1>
                            We are not just a company, we are a group of passionate
                            professionals who are committed to providing you with the best
                            possible service. We have a solid business structure with
                            specialized areas in different fields, which allows us to offer
                            you a comprehensive and high-quality service.
                        </h1>
                        <div className="s3_companies__container">
                            <div className="s3_company__container T7Group__container">
                                <Image
                                    className="T7Group__imagen"
                                    alt="T7Logo"
                                    src={T7GroupLogo}
                                    height={400}
                                    width={360}
                                />
                                <h3>T7 International Group®</h3>
                                <p>
                                    Division focused on offering integrated services and
                                    customized solutions.
                                </p>
                            </div>
                            <div className="s3_company__container T7Dimension__container">
                                <Image
                                    className="T7Group__imagen"
                                    alt="T7Dimension"
                                    src={T7DimensionLogo}
                                    height={400}
                                    width={360}
                                />
                                <h3>T7 Dimension®</h3>
                                <p>
                                    Division focused on providing Multi-Vendor Advanced support
                                    services, infrastructure projects and data centers
                                    specialization.
                                </p>
                            </div>
                            <div className="s3_company__container Vigia__container">
                                <Image
                                    className="T7Group__imagen"
                                    alt="Vigia"
                                    src={VigiaLogo}
                                    height={400}
                                    width={360}
                                />
                                <h3>MPS VIGIA®</h3>
                                <p>
                                    Division focused on predictive solutions based on Artificial
                                    Intelligence and advanced Management systems.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cuartaSeccion__container">
                        <Image
                            className="custom-image"
                            src={HeadQuarters}
                            alt="T7 Head Quarters"
                            width={802}
                            height={572}
                            style={{ marginTop: '2rem' }}
                        />
                        <div className="s4_about__content_container">
                            <div className="s4_about__content">
                                <Image
                                    className="custom-image2"
                                    src={quoteImg}
                                    alt="quote"
                                    height={52}
                                    width={64}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <h1>We have Headquarters in two Major Cities.</h1>
                                <ul >
                                    <li style={{ marginTop: '1rem'}}>
                                        Houston, Texas
                                        <br />
                                        Corporative Offices
                                    </li>
                                    <li style={{ marginTop: '1.5rem'}}>
                                        Mexico City
                                        <br />
                                        Operations and development Center
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
