import React from "react";
import { Layout } from "../Shared/Layout/Layout";
// import './vbusPage.css'
import "./vimPage.css";
import Image from "next/image";
import ViemyLogo from "@/assets/img/logo-viemy.png";

import vimStructure from "@/assets/img/vim-structure.png";

import vIotLogo from "@/assets/img/VIM-Logotipo_optimized.png";

import ViemyApp1 from "@/assets/img/viemy-app1.png";
import ViemyApp2 from "@/assets/img/viemy-app2.png";
import ViemyApp3 from "@/assets/img/viemy-app3.png";

import vBusPantalla1 from "@/assets/img/vbus-pantalla1.jpg";
import vBusPantalla2 from "@/assets/img/vbus-pantalla2.jpg";
import vBusPantalla3 from "@/assets/img/vbus-pantalla3.jpg";

import ViemyBlog from "@/assets/img/viot-service.png";

import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Badge } from "../Shared/Badge/Badge";
import { Image as ImageAntd } from "antd";
import { Projects } from "../Shared/Projects/ProjectsComponent";

export const VimPage = () => {
  return (
    <Layout posicion={""}>
      <div className="headerContainer">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VIM-v3.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="primeraSeccion_Container">
          <div className="s1_mainTitle__container">
            <h1>
              VIGIA Inventory
              <br />
              Management®
            </h1>
          </div>
          <div className="s1_subTitle__container">
            <h5>
              VIM®, our inventory management solution, offers you optimal
              control of all logical and physical components of your network.
              VIM® allows you to track tangible and intangible assets from end
              to end, from the moment the need arises until their full
              operation.
            </h5>
          </div>
        </div>
      </div>

      <div className="segundaSeccion_Container">
        <div className="s2_primeraSeccion__container">
          <div className="s2_primeraSeccion_title">
            {/* <Image src={vIotLogo} alt="Viot" /> */}
            <ImageAntd
              preview={false}
              src="/assets/img/VIM-Logotipo_optimized.png"
              alt="vbusLogo"
            />
          </div>
          <div className="s2_primeraSeccion_content">
            <h2>
              Our solution is an effective inventory manager that administers
              and controls all components, both logical and physical, of a
              network.
            </h2>
            <ActionButton
              style={{ marginTop: "3rem" }}
              text="Start now"
              link="/contact"
            />
          </div>
        </div>

        <div className="s2_segundaSeccion_container">
          <div className="s2_segundaSeccion_header">
            <div className="s2_segundaSeccion_column">
              <h1>Your ally for inventory management.</h1>
            </div>
            <div className="s2_segundaSeccion_column">
              <p>
                With a series of intuitive modules, it allows you to easily
                load, download, and update items. It also offers geographical
                and logical visualizations of the network topology, along with
                options to plan for availability in its organic growth.
                Everything you need to keep your network under control.
              </p>
            </div>
          </div>
          <div className="s2_segundaSeccion_header">
            <div className="s2_segundaSeccion_column">
              <h2>Visualization and design.</h2>
              <p>
                Easily access all operational, administrative, or control
                information through schematic, topological, and geographic
                views.
              </p>
            </div>
          </div>
          {/* <div className="s2_segundaSeccion_videoContainer">
            <iframe
              src="https://player.vimeo.com/video/653771247?api=1"
              frameBorder="0"
            ></iframe>
          </div> */}
        </div>
        <div className="s2_terceraSeccion_container">
          <div className="viemy_tabs__mainContainer">
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={1} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Asset Management</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  VIM® stands out as the only platform on the market that offers
                  pre-designed templates for each sector. This means that you
                  can quickly implement an asset management and control solution
                  with pre-defined and specific attributes for your
                  technological area.
                </h5>
              </div>
            </div>
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={2} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Total Tracking</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  With this solution, you can easily track any asset, product,
                  or service from its inception to its implementation. This
                  means you can see its entire history, from creation to final
                  use, including the actions of each participant in the process.
                </h5>
              </div>
            </div>
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={3} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Advanced Search</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  VIM® gives you the ability to quickly find the information you
                  need, allowing you to make queries about any relevant aspect
                  of the business, such as:
                </h5>
                <ul style={{ marginLeft: "3rem" }}>
                  <li>Administrative queries</li>
                  <li>Operational queries</li>
                  <li>Configuration</li>
                  <li>Assets</li>
                  <li>Economic information</li>
                </ul>
              </div>
            </div>
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={4} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Amazing Interface</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  Our interface is designed to provide users with an extremely
                  intuitive navigation, use, and data discovery experience. In
                  addition, it offers excellent performance when loading
                  advanced graphics, interactive maps, and intelligent filters.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="segundaSeccionDos_Container">
        <div className="s2_quintaSeccion_container">
          <div className="textSection altura100 alignVerticalCenter">
            <div className="column-40 centerContent colstruck">
              <div className="titleContent centerContent">
                <p className="fontSize3 .alignVerticalCenter">Structure</p>
              </div>
              <div className="image-container">
                <Image src={vimStructure} alt="Viot" className="image" />
              </div>
            </div>
            <div className="column-60 ">
              <div className="fontSize13 .alignVerticalCenter" >
                <br />
                <p>
                  VIM® is based on an open and scalable architecture that
                  facilitates the integration of existing components in your
                  organization.
                </p>
                <br />
                <p>The advantages of our system include:</p>

                <ul>
                  <li>
                    <strong>Integrated Information:</strong> All information is
                    integrated in a clear manner, this decreases response times,
                    improves decision-making, and facilitates process
                    monitoring.
                  </li>
                  <li>
                    <strong> Real-Time Information:</strong> Get an instant view
                    of the status of the company, without delays or wasting
                    time.
                  </li>
                  <li>
                    <strong> Standardized Processes:</strong> VIM® helps you
                    systematize your workflows by automating and monitoring
                    processes.
                  </li>
                  <li>
                    <strong>Total Control of Inventory and Services:</strong>{" "}
                    All resources, services, and inputs related to projects in
                    one place!
                  </li>
                </ul>
                {/* <ul>
                  <li>
                    Integration and Installation We design, plan, and execute
                    the deployment and installation of equipment in the right
                    place in a specialized way.
                  </li>
                  <li>
                    <h1> Adaptation</h1>
                    <h2>
                      We are with you on the ground, training your staff and
                      transforming your operational areas to ensure a smooth
                      transition.
                    </h2>
                  </li>
                </ul> */}
              </div>
              <ActionButton
                style={{ marginTop: "3rem" }}
                text="More information"
                link="/contact"
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>

  
    </Layout>
  );
};
