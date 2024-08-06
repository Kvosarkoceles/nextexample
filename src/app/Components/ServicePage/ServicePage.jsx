import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./servicePage.css";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import styled from "styled-components";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import Image from "next/image";
import ServicesImg1 from "@/assets/img/services-img1.jpeg";
import ServicesImg2 from "@/assets/img/services-img2.jpeg";
import ServicesImg3 from "@/assets/img/services-img3.jpeg";
import ServicesImg4 from "@/assets/img/services-img4.jpeg";
import ServicesImg5 from "@/assets/img/services-img5.jpeg";
import ServicesImg6 from "@/assets/img/services-img6.jpeg";
import ServicesImg7 from "@/assets/img/services-img7.jpeg";
import ServicesImg8 from "@/assets/img/services-img8.jpeg";

import projectsimg1 from "@/assets/img/projects_img1.jpeg";
import projectsimg2 from "@/assets/img/projects_img2.jpeg";
import projectsimg3 from "@/assets/img/projects_img3.jpeg";
import projectsimg4 from "@/assets/img/projects_img4.jpeg";

import Carousel from "../Shared/Carousel/Carrusel";
import Link from "next/link";
import { Badge } from "../Shared/Badge/Badge";
import { Projects } from "../Shared/Projects/ProjectsComponent";
export const AboutPage = () => {
  const imagenes = [
    {
      id: "1",
      alt: "Imagen 1",
      src: ServicesImg1,
      width: 25,
      height: 25,
    },
    {
      id: "2",
      alt: "Imagen 2",
      src: ServicesImg2,
      width: 25,
      height: 25,
    },
    {
      id: "3",
      alt: "Imagen 3",
      src: ServicesImg3,
      width: 25,
      height: 25,
    },
    {
      id: "4",
      alt: "Imagen 4",
      src: ServicesImg4,
      width: 25,
      height: 25,
    },
    {
      id: "5",
      alt: "Imagen 5",
      src: ServicesImg5,
      width: 25,
      height: 25,
    },
    {
      id: "6",
      alt: "Imagen 6",
      src: ServicesImg6,
      width: 25,
      height: 25,
    },
    {
      id: "7",
      alt: "Imagen 7",
      src: ServicesImg7,
      width: 25,
      height: 25,
    },
    {
      id: "8",
      alt: "Imagen 8",
      src: ServicesImg8,
      width: 25,
      height: 25,
    },
  ];
  const productos = [
    {
      productName: "VIEMY™",
      productLink: "/products/viemy",
      productText: "VIGIA Assistance",
    },
    {
      productName: "VBUS®",
      productLink: "/products/vbus",
      productText: "VIGIA Observability",
    },
    {
      productName: "VAAS™",
      productLink: "/products/vaas",
      productText: "VIGIA Prediction",
    },
    {
      productName: "V-iA73®",
      productLink: "/products/via73",
      productText: "VIGIA Automation",
    },{
      productName: "VIoT²™",
      productLink: "/products/viot",
      productText: "VIGIA Telemetry",
    },
    {
      productName: "VIM®",
      productLink: "/products/vim",
      productText: "VIGIA Inventory",
    },
    {
      productName: "VCM®",
      productLink: "/products/vcm",
      productText: "VIGIA Configuration",
    },
    {
      productName: "Machine Life Extended™",
      productLink: "/products/machine-life-extended",
      productText: "Support",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  return (
    <>
      <Layout posicion={"services"}>
        <div className="services_mainContainer">
          <div className="primerSeccion__container">
            <div className="s1_container">
              <div className="s1_containerText">
                <div className="s1_title__container">
                  <h1>We help companies find their way to greatness</h1>
                </div>
                <div className="s1_title__containerTwo">
                  <h1>
                    T7 Group® performs a thorough analysis of your situation in
                    order to select a strategic approach that fits your
                    activities and to establish the ideal timing for
                    implementation.
                  </h1>
                </div>
              </div>

              <div className="s1_image__container">
                <Carousel images={imagenes} />
              </div>
            </div>
          </div>
          <div className="segundaSeccion_Container">
            <div className="s2_segundaSeccion__container">
              <div className="s2_segundaSeccion_title">
                <h1>
                  There are no ordinary projects, only extraordinary situations.
                </h1>
              </div>
              <div className="s2_segundaSeccion_content">
                <h2>
                  A strategy needs to be scalable and adaptable in order to be
                  truly effective. We&acute;ll plan your growth, evolution, and
                  renaissance whether your business environment is stable or
                  unstable.
                </h2>
                <ActionButton
                  style={{ marginTop: "3rem" }}
                  text="CONTACT US"
                  link="/contact"
                />
              </div>
            </div>
          </div>
          <div className="terceraSeccion_Container">
            <div className="teceraSeccion_botton">
              <ContentTitle text="OUR PRODUCTS" />
            </div>
            <div className="terceraSeccion_titulo">
              We provide a wide range of services.
            </div>
          </div>
          <div className="blogs_segundaSeccion">
            {productos.map((item, index) => {
              return (
                <>
                  <div key={index + 1} className="s2_blogContainer">
                    <div className="content_numn">
                      <ContentTitle text={index + 1} />
                    </div>
                    <div className="s2_blogImageContainer">
                      <h1>{item.productName}</h1>
                    </div>
                    <div className="s2_blogInfoContainer">
                      <h5>{item.productText}</h5>
                      <div className="actionButton_container">
                        <ActionButton
                          text="LEARN MORE"
                          link={item.productLink}
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="projects_segundaSeccion">
            <Projects product="all" darkMode= {true} />
            {/* <div class="proyect">
              <Image
                src={projectsimg1}
                layout="responsive"
                width={510}
                height={850}
                alt="Picture of the author"
              />
              <div className="TituloProject">VIEMY™ success case</div>
              <p>Con una reducción de tiempos de consulta hasta en un 99%</p>
              <Badge text={"VIEMY"} />
            </div>
            <div class="proyect">
              <Image
                src={projectsimg2}
                layout="responsive"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div className="TituloProject">MLE success case</div>
              <p>Garantizando “Zero Outage” en entornos tecnológicos</p>
              <Badge text={"MACHINE LIFE EXTENDED"} />
            </div>
            <div class="proyect">
              <Image
                src={projectsimg3}
                layout="responsive"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div className="TituloProject">Microwave case</div>
              <p>
                Maximizing long-life investments, to guarantee “Zero Outage” in
                technological environments
              </p>
              <Badge text={"VIGIA Intelligent Automaton® (V-iA73®)"} />
            </div>
            <div class="proyect">
              <Image
                src={projectsimg4}
                layout="responsive"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div className="TituloProject">Microwave case</div>
              <p>Comprehensive Management of ATMs and Branches</p>
              <Badge text={"VIGIA® MASTER SUITE "} />
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
};
