import React, { useState } from "react";
import { Layout } from "../Shared/Layout/Layout";
// import './viemyProject.css'
import "./viotProject.css";
import Image from "next/image";
import ViotLogo from "@/assets/img/image_viot.png";
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
import project_viot from "@/assets/img/project_viot.jpeg";



import project_viot_img1 from "@/assets/img/viot2-pantalla-1.jpg";





import project_viot_img2 from "@/assets/img/viot2-pantalla-2.jpg";


import project_viot_img3 from "@/assets/img/viot-app3.png";
import quoteImg from "@/assets/img/about_quote.png";
import ArrowIcon from "@/assets/icons/ArrowIcon";

import projectsimg1 from "@/assets/img/projects_viemy_img1.jpeg";
import projectsimg2 from "@/assets/img/projects_viemy_img2.jpeg";

export const ProjectViot = () => {
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
        <div className="primerSeccion__container">
          <div className="s1_title__container">
            <h1>Precise Measurements of Energy Consumption</h1>
          </div>
        </div>
        <div className="s1_image__container">
          <Image
            src={ViotLogo}
            alt="viot"
            layout="responsive"
            className="s1_image__container_img"
          />
        </div>
        <div className="segundaSeccion__container">
          <div className="s2_content__mainContainer">
            <div className="s2_segundaSeccionContainer">
              <ContentTitle text="OVERVIEW" />
              <div className="s2_segundaSeccion__contentContainer">
                <div className="s2_segundaSeccion_content">
                  <div className="segundaSeccion_titleContainer">
                    <h5>
                      +15% Reduction of failures by supply monitoring directly
                      on electrical circuits
                    </h5>
                  </div>
                </div>
                <div className="s2_segundaSeccion_content">
                  <div className="segundaSeccion_descContainer">
                    <h5>
                      One of Mexico&#39;s largest fiber operators consists of
                      more than 150 sites. Each site is made up of a set of
                      racks containing all the optical transmission devices
                      needed for their operations. Additionally, each site has a
                      power consumption system shared between all its customers.
                      The company needed accurate billing of electrical
                      consumption for each customer, taking in to account all
                      the sites necessary for a given service. Due to the shared
                      nature of the electrical consumption, customer specific
                      consumption was impossible without the accurate
                      measurement power consumption for each rack and air
                      conditioner at a given site.
                    </h5>
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
              <h1>Annual consumption loss per customer +1.2M USD</h1>
            </div>
          </div>
        </div>

        <div className="quitaSeccion__container">
          <div className="s5_viemy__content">
            <Image
              className="custom-image2"
              src={project_viot}
              alt="project_viot"
              layout="responsive"
            />
          </div>
        </div>
        <div className="sextaSeccion_container">
          <div className="s6_sextaSeccion__contentContainer">
            <div className="s6_sextaSeccion_content_content">
              <div className="segundaSeccion_descContainer">
                <h5>
                  The company faced significant challenges in its ability to
                  accurately measure and bill its customers&#39; electricity
                  consumption due to the complexity of its shared consumption
                  system and the lack of adequate tools to measure specific
                  consumption at each operation site. These weaknesses had
                  negative consequences on customer satisfaction, revenue, and
                  the company&#39;s reputation.
                </h5>
              </div>
            </div>
            <div className="s6_sextaSeccion_content_content">
              <div className="sextaSeccion_titleContainer">
                <h5>Analysis</h5>
              </div>
              <div className="segundaSeccion_descContainer">
                <ul>
                  <li>
                    <h5>
                      Inability to accurately bill for electricity usage. The
                      absence of a proper system to measure and quantify each
                      customer&#39;s electricity usage at operating sites made
                      accurate billing difficult. This resulted in invoice
                      discrepancies and led to discontent among customers due to
                      incorrect collections.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Shared consumption system complexity. The shared energy
                      consumption system between customers at each site added an
                      additional layer of complexity. The lack of a clear method
                      for dividing and allocating each customer&#39;s specific
                      consumption further hindered billing accuracy and led to
                      disputes between customers and the company.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Need for accurate power measurement. The inability to
                      accurately measure the power supply to each rack and air
                      conditioner at operating sites represented a significant
                      weakness. Without this detailed information, it was
                      difficult to determine the specific consumption of each
                      customer and ensure accurate billing.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Potential impact on customer satisfaction. Lack of billing
                      accuracy and the complexity of the shared consumption
                      system affected customer satisfaction. Customers became
                      frustrated when they perceived that they were being billed
                      incorrectly or if they did not understand how their
                      electricity usage was calculated.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Potential loss of revenue and reputation. Billing
                      discrepancies and disputes with customers had a negative
                      impact on the company&#39;s revenue and reputation in the
                      marketplace. Dissatisfied customers chose to switch
                      service providers when they perceived that the company
                      could not guarantee accurate and transparent billing.
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
            </div>
            <div className="s7_septimaSeccion_content_row">
              <div className="septimaSeccion_titleContainer">
                <div className="septimaSeccion_container_title">
                  <h2>
                    VIoT was implemented with the purpose of quantifying the
                    electrical consumption that passed through each circuit,
                    achieving the following benefits:
                  </h2>
                </div>
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
                          Measurement and management of dry contact electric
                          generators
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
                          Measurement of each of the circuits assigned to
                          customers
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
                          Precise quantification of kWh consumption at each site
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
                          Daily, weekly, and monthly consumption reports by site
                          and per customer
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="s6_sextaSeccion__contentContainer">
                    <div className="s7_septimaSeccion_content_title">
                      <div className="segundaSeccion_titleContainer">
                        <h5>
                          <ContentTitle text="5" />
                        </h5>
                      </div>
                    </div>
                    <div className="s7_septimaSeccion_content_content">
                      <div className="sextaSeccion_titleContainer">
                        <h5>
                          Notifications of decreased or excess electricity
                          consumption per customer at each site
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="s6_sextaSeccion__contentContainer">
                    <div className="s7_septimaSeccion_content_title">
                      <div className="segundaSeccion_titleContainer">
                        <h5>
                          <ContentTitle text="6" />
                        </h5>
                      </div>
                    </div>
                    <div className="s7_septimaSeccion_content_content">
                      <div className="sextaSeccion_titleContainer">
                        <h5>
                          Reduction of failures due to power interruptions.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sextaSeccion_container">
          <div className="s6_sextaSeccion__contentContainer">
            <div className="s6_sextaSeccion_content_content">
              <div className="segundaSeccion_descContainer">
                <Image
                  className="custom-image2"
                  src={project_viot_img1}
                  alt="project_viot_img1"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="s6_sextaSeccion_content_content">
              <div className="sextaSeccion_titleContainer">
                <h3>Nombre de la pantalla</h3>
              </div>
              <div className="segundaSeccion_descContainer">
                <h5>
                  Our customers are the driving force behind everything we do.
                  We put their needs, desires, and satisfaction at the heart of
                  our operations. By actively listening to their feedback and
                  understanding their pain points, we continuously enhance our
                  products and services to exceed their expectations.
                </h5>
              </div>
            </div>            
          </div>
          <div className="s6_sextaSeccion__contentContainer">
            <div className="s6_sextaSeccion_content_content">
              <div className="segundaSeccion_descContainer">
                <Image
                  className="custom-image2"
                  src={project_viot_img2}
                  alt="project_viot"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="s6_sextaSeccion_content_content">
              <div className="sextaSeccion_titleContainer">
                <h3>Nombre de la pantalla</h3>
              </div>
              <div className="segundaSeccion_descContainer">
                <h5>
                  Our customers are the driving force behind everything we do.
                  We put their needs, desires, and satisfaction at the heart of
                  our operations. By actively listening to their feedback and
                  understanding their pain points, we continuously enhance our
                  products and services to exceed their expectations.
                </h5>
              </div>
            </div>            
          </div>
          
        </div>

      

        <div className="novena_segundaSeccion">
          <div className="novena_segundaSeccion_title">
            <ContentTitle text="OUR WORKS" />
          </div>
          <div className="novena_segundaSeccion_content">
            <h2>More cases</h2>
            <h5>We work with both small startups and large corporations.</h5>
          </div>

          <div className="novena_segundaSeccion_proyects">
            <div class="proyect">
              <Image
                src={projectsimg1}
                layout="responsive"
                width={510}
                height={850}
                alt="Picture of the author"
              />
              <div className="TituloProject">
                <h2>Scandinavia Case</h2>
              </div>
              <p>
                Ensuring maximum operability in infrastructure under extreme
                conditions.
              </p>
              <div className="Badge_title">
                <Badge text={"VIGIA® Master Suite"} />
                {/* <ActionButton link="/projects/viemy" text="VIEMY" /> */}
              </div>

              {/* <Badge text={"VIEMY"} /> */}
            </div>
            <div class="proyect">
              <Image
                src={projectsimg2}
                layout="responsive"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div className="TituloProject">
                <h2>Mobile and Fixed NetworkSuccess Case</h2>
              </div>
              <p>
                Guaranteeing a high availability index in infrastructure
                installed in remote and difficult-to-access locations.
              </p>
              <div className="Badge_title">
                <Badge text={"MACHINE LIFE EXTENDED"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
