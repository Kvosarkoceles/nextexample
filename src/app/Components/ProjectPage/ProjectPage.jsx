import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./projectPage.css";

import { ActionButton } from "../Shared/ActionButton/ActionButton";

import horizontalCardImage2 from "@/assets/img/horizontalCard2.png";
import verticalCardImage1 from "@/assets/img/verticalCard1.png";
import horizontalCardImage1 from "@/assets/img/horizontalCard1.png";
import verticalCardImage2 from "@/assets/img/verticalCard2.png";
import { Badge } from "../Shared/Badge/Badge";
import Image from "next/image";
import { Projects } from "../Shared/Projects/ProjectsComponent";

import Link from "next/link";

export const ProjectPage = () => {
    return (
        <>
            <Layout posicion={"projects"}>
                <div className="projects_mainContainer">
                    <div className="headerContainer">
                        <video autoPlay muted loop playsInline className="video-background">
                            <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/1467612_Information_Future_Technology_3840x2160.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="projects_primeraSeccion">
                            <div className="projects_s1_titleContainer">
                                <h1>We are here to support your business</h1>
                            </div>
                        </div>
                    </div>

                    <Projects product="all" />
                    
                    {/* <div className="project_sextaSeccion__Container">
                        <div className="project_s6_contentCol1">
                            <div className="project_s6_verticalCard">
                                <div className="project_s6_verticalCard__imageContainer">
                                    <Link href="/projects/viemy">
                                        <Image
                                            src={verticalCardImage1}
                                            layout="responsive"
                                            width={100}
                                            height={100}
                                            alt="Picture of the author"
                                        />
                                    </Link>
                                </div>
                                <div className="project_s6_verticalCard__textContainer">
                                    <h1>Optimization with our Intelligent Virtual Assistant</h1>
                                    <p>With a time optimization of up to 98%</p>
                                    <Badge text="viemy™" />
                                </div>
                            </div>
                            <div className="project_s6_horizontalCard">
                                <div className="project_s6_horizontalCard__imageContainer">
                                    <Image
                                        src={horizontalCardImage1}
                                        layout="responsive"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="project_s6_horizontalCard__textContainer">
                                    <h1>
                                        Operational Continuity Transformation: Elimination of
                                        Interruptions and Maximization of Investments
                                    </h1>
                                    <p>
                                        Maximizing long-life investments, to guarantee “Zero Outage”
                                        in technological environments
                                    </p>
                                    <Badge text="Machine Life Extended™" />
                                </div>
                            </div>
                        </div>
                        <div className="project_s6_contentCol2">
                            <div className="project_s6_horizontalCard">
                                <div className="project_s6_horizontalCard__imageContainer">
                                    <Link href="/projects/viot">
                                        <Image
                                            src={horizontalCardImage2}
                                            layout="responsive"
                                            width={100}
                                            height={100}
                                            alt="Picture of the author"
                                        />
                                    </Link>
                                </div>
                                <div className="project_s6_horizontalCard__textContainer">
                                    <h1>Precise Measurements of Energy Consumption</h1>
                                    <p>+15% Reduction of failures</p>
                                    <Badge text="V-IoT² VIGIA INTERNET OF THINGS™" />
                                </div>
                            </div>
                            <div className="project_s6_verticalCard">
                                <div
                                    className="project_s6_verticalCard__imageContainer"
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
                                    className="project_s6_verticalCard__textContainer"
                                >
                                    <h1>
                                        Proactive Optimization of Mobile Networks: Monitoring and
                                        Prediction for Efficient Operations
                                    </h1>
                                    <p>+99.75% Network Quality Index</p>
                                    <Badge text="VIGIA Network BUS®" />
                                    <br />
                                    <div class="badge2">
                                        <Badge text="VIGIA Advanced Algorithmic Suite®" style="font-size:1rem" />
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div> */}
                    <div className="endButton">
                        <ActionButton
                            className="action_desktop"
                            link="/contact"
                            text="CONTACT US NOW"
                            style={{ marginTop: "0rem" }}
                        />
                    </div>
                </div>
            </Layout>
        </>
    );
};
