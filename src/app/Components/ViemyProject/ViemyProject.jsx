import React, { useState } from "react";
import { Layout } from "../Shared/Layout/Layout";
// import './viemyProject.css'
import "./viemyProject.css";
import Image from "next/image";
import ViemyLogo from "@/assets/img/image.png.jpeg";
import ViemyApp1 from "@/assets/img/viemy-app1.png";
import ViemyApp2 from "@/assets/img/viemy-app2.png";
import ViemyApp3 from "@/assets/img/viemy-app3.png";
import ViemyBlog from "@/assets/img/viemy-blog.png";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Badge } from "../Shared/Badge/Badge";
import VigiaLogo from "@/assets/img/about_Vigia.png";
import T7DimensionLogo from "@/assets/img/about_T7Dimension.png";
import T7GroupLogo from "@/assets/img/about_T7Group.png";
import HeadQuarters from "@/assets/img/about_site.png";
import project_viemy from "@/assets/img/project_viemy.jpeg";
import quoteImg from "@/assets/img/about_quote.png";
import ArrowIcon from "@/assets/icons/ArrowIcon";

import projectsimg1 from "@/assets/img/projects_viemy_img1.jpeg";
import projectsimg2 from "@/assets/img/projects_viemy_img2.jpeg";
import { Projects } from "../Shared/Projects/ProjectsComponent";

export const ProjectViemy = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const viemyItems = [
    {
      title: "Integración con Múltiples Fuentes",
      desc: "VIEMY tiene la capacidad de integrarse a cualquier base de datos, plataforma de monitoreo, de trouble ticketing, o comunicarse a través de alguna Interfaz de Programación de Aplicaciones (API, por sus siglas en inglés).",
    },
    {
      title: "Seguridad y Privacidad",
      desc: "Es adaptable a las reglas y protocolos de seguridad de la empresa y tiene como base los métodos de autenticación propios de la plataforma de mensajería con la que será integrado. Además, los datos a los que tendrá acceso serán única y exclusivamente de uso interno, pues se ocuparán con la finalidad de responder a las consultas y no como parte del aprendizaje del asistente virtual.",
    },
    {
      title: "Comunicación a través de Plataformas de Mensajería",
      desc: "El código de VIEMY es adaptable a las principales plataformas de mensajería utilizadas actualmente en las organizaciones, como por ejemplo Microsoft Teams, Telegram o Slack.",
    },
    {
      title: "Adapatabilidad Total",
      desc: "Su diseño y estructura base le permiten escalar y adaptarse al crecimiento de su empresa, a modificaciones internas e integraciones con nuevas tecnologías.",
    },
    {
      title: "Lógica Basada en Reglas",
      desc: "También se adapta a cualquier sector, estructura y dinámica de su empresa, ya que su funcionalidad tiene como prioridad las reglas internas del negocio, las cuales se trasladan a los algoritmos de segmentación de información que será la fuente del conocimiento de VIEMY.",
    },
    {
      title: "Comunicación Dinámica y Bidireccional",
      desc: "VIEMY no solamente responde a consultas hechas por los usuarios de manera interactiva por medio de mensajes, tarjetas, imágenes y más, sino que también está programado para enviar proactivamente recordatorios, notificaciones o alarmas.",
    },
  ];

  return (
    <Layout>
      <div className="abaut_mainContainer">
        <div className="headerContainer">
          <video autoPlay muted loop playsInline className="video-background">
            <source src="/assets/videos/VIEMY-CDE-V1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="primerSeccion__container">
            <div className="s1_title__container">
              <h1>Optimization with our Intelligent Virtual Assistant</h1>
            </div>
          </div>
        </div>

        {/* <div className="s1_image__container">
          <Image
            src={ViemyLogo}
            alt="viemy"
            layout="responsive"
            className="s1_image__container_img"
          />
        </div> */}
        <div className="segundaSeccion__container">
          <div className="s2_content__mainContainer">
            <div className="s2_segundaSeccionContainer">
              <ContentTitle text="OVERVIEW" />
              <div className="s2_segundaSeccion__contentContainer">
                <div className="s2_segundaSeccion_content">
                  <div className="segundaSeccion_titleContainer">
                    <h5>
                      Difficulty in accessing relevant information within
                      corporate ecosystems, employees faced obstacles in
                      obtaining data across various areas of the organization,
                      resulting in delays in decision-making, lack of visibility
                      into operational status, and difficulties in efficiently
                      addressing issues.
                    </h5>
                  </div>
                </div>
                <div className="s2_segundaSeccion_content">
                  <div className="segundaSeccion_descContainer">
                    <ul>
                      <li>
                        <h5>Fragmentation of information.</h5>
                      </li>
                      <li>
                        <h5>Inefficiency in searching for data.</h5>
                      </li>
                      <li>
                        <h5>
                          Lack of instant visibility for specific problems.
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cuartaSeccion__container">
          <div className="s4_about__content_container">
            <div className="s4_about__content">
              <Image
                className="custom-image2"
                src={quoteImg}
                alt="quote"
                height={52}
                width={64}
              />
              <h1>+3M USD loss for failing to predict outlier events</h1>
            </div>
          </div>
        </div>

        <div className="quitaSeccion__container">
          <div className="s5_viemy__content">
            <Image
              className="imgBanner"
              src={project_viemy}
              alt="project_viemy"
            />
          </div>
        </div>
        <div className="sextaSeccion_container">
          <div className="s6_sextaSeccion__contentContainer">
            {/* <div className="s6_sextaSeccion_content_title">
              <div className="segundaSeccion_titleContainer">
                <h5>
                Analysis
                </h5>
                <h5>
                  Hasta la actualidad, VIEMY le ha brindado a esta empresa la
                  posibilidad de acceder a la información ya segmentada, ayuda a
                  la gestión de procesos optimizándolos, además de enviar
                  alertas o recordatorios de manera proactiva.
                </h5>
              </div>
            </div> */}
            <div className="s6_sextaSeccion_content_content">
              <div className="sextaSeccion_titleContainer">
                <h2>Analysis</h2>
              </div>
              <div className="segundaSeccion_descContainer">
                <ul>
                  <li>
                    <h5>
                      <strong>Lack of visibility and coordination:</strong>{" "}
                      Disconnections between different areas of the business led
                      to a deficiency of visibility into overall operations.
                      This resulted in poor coordination between departments,
                      which in turn led to delays in the delivery of products or
                      services, poor internal communication, and redundancies in
                      tasks.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <strong>Operational inefficiency:</strong> Since many
                      areas of the business were not well connected, there was a
                      duplication of efforts and resources, which leds to
                      significant operational inefficiency.
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="s6_sextaSeccion_content_content">
              <div
                className="segundaSeccion_descContainer"
                style={{ marginTop: "9rem" }}
              >
                <ul>
                  <li>
                    <h5>
                      <strong>Difficulty in decision-making:</strong> Difficulty
                      in decision-making. Disconnections between areas made it
                      difficult to collect and analyze data relevant to
                      strategic decision-making. This resulted in suboptimal
                      decisions or decisions based on incomplete information,
                      which negatively impacted the company&#39;s overall
                      performance.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <strong>Vulnerability:</strong> Poor communication and
                      coordination between areas increased the company&#39;s
                      vulnerability to potential risks and crisis.
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="septimaSeccion_container">
          <div className="s7_septimaSeccion__contentContainer">
            <div className="s7_septimaSeccion_contentTitle">
              <div className="septimaSeccion_title">
                <ContentTitle text="SOLUTION" />
              </div>
              <div className="septimaSeccion_titleContent">
                <h5>
                  T7 Group® developed VIEMY™ as an end-to-end solution that offers
                  quick and easy access to relevant information in all areas of
                  the business. Through customized algorithms, VIEMY™ allows
                  employees to know the status of operations, processes and make
                  advanced predictions, thus addressing the limitations in
                  accessibility, visibility and predictive capacity within
                  corporate ecosystems.
                </h5>
              </div>
            </div>
            <div className="s7_septimaSeccion_content_row">
              <div className="septimaSeccion_titleContainer">
                <div className="septimaSeccion_container_list">
                  <div className="s6_sextaSeccion__contentContainer">
                    <div className="s7_septimaSeccion_content_title">
                      <div className="segundaSeccion_titleContainer">
                        <h5>
                          <ContentTitle text="1" />
                        </h5>
                      </div>
                    </div>
                    <div className="s7_septimaSeccion_content_content">
                      <div className="sextaSeccion_titleContainer">
                        <h5>
                          Intuitive and easy-to-use interface. We developed a
                          virtual assistant that allows employees in all areas
                          to query the company&#39;s databases without requiring
                          specialized technical knowledge. This makes it easier
                          to access information relevant to your roles without
                          relying on IT staff, allowing them to focus their
                          efforts on other activities.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="s6_sextaSeccion__contentContainer">
                    <div className="s7_septimaSeccion_content_title">
                      <div className="segundaSeccion_titleContainer">
                        <h5>
                          <ContentTitle text="2" />
                        </h5>
                      </div>
                    </div>
                    <div className="s7_septimaSeccion_content_content">
                      <div className="sextaSeccion_titleContainer">
                        <h5>
                          Web, desktop, or mobile accessibility. The solution is
                          available through a web-based platform accessible from
                          any device, whether it&#39;s a desktop, laptop,
                          tablet, or mobile phone. This ensures that employees
                          can access information at any time and from anywhere.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="s6_sextaSeccion__contentContainer">
                    <div className="s7_septimaSeccion_content_title">
                      <div className="segundaSeccion_titleContainer">
                        <h5>
                          <ContentTitle text="3" />
                        </h5>
                      </div>
                    </div>
                    <div className="s7_septimaSeccion_content_content">
                      <div className="sextaSeccion_titleContainer">
                        <h5>
                          Notification of critical events for the business. We
                          set up alerts and notification systems to inform users
                          about critical events or urgent situations that
                          require immediate attention. This allows a quick and
                          efficient response to emergency situations or
                          operational issues.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="s6_sextaSeccion__contentContainer">
                    <div className="s7_septimaSeccion_content_title">
                      <div className="segundaSeccion_titleContainer">
                        <h5>
                          <ContentTitle text="4" />
                        </h5>
                      </div>
                    </div>
                    <div className="s7_septimaSeccion_content_content">
                      <div className="sextaSeccion_titleContainer">
                        <h5>
                          Customized advanced predictions. We develop advanced
                          predictive models that have allowed the operation to
                          take early action in anticipation of potential
                          failures that affect the service and end users.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="octavaSeccion_container">
          <div className="s6_sextaSeccion__contentContainer">
            <div className="s6_sextaSeccion_content_content">
              <div className="sextaSeccion_titleContainer">
                <h2>Results</h2>
              </div>
              <div className="segundaSeccion_descContainer">
                <ul>
                  <li>
                    <h5>Decrease in dependencies between areas.</h5>
                  </li>
                  <li>
                    <h5>Decrease in the time to resolve failures.</h5>
                  </li>
                  <li>
                    <h5>
                      Increase the percentage of successfully completed tasks.
                    </h5>
                  </li>
                  <li>
                    <h5>Optimize the consultation time.</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="novena_segundaSeccion">
          <div className="novena_segundaSeccion_title">
            <ContentTitle text="OUR PROJECTS" />
          </div>
          <div className="novena_segundaSeccion_content">
            <h2>More cases</h2>
            <h5>We work with both small startups and large corporations.</h5>
          </div>

          <Projects product="vbus" darkMode={true} />
        </div>
      </div>
    </Layout>
  );
};
