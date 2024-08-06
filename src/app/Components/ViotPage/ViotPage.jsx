import React from "react";
import { Layout } from "../Shared/Layout/Layout";
// import './vbusPage.css'
import "./viotPage.css";
import Image from "next/image";
import ViemyLogo from "@/assets/img/logo-viemy.png";
import vIotLogo from "@/assets/img/logo-viot-color-vertical.png";

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

export const ViotPage = () => {
  return (
    <Layout posicion={""}>
      <div className="headerContainer">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VIOT-v3.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="primeraSeccion_Container">
          <div className="s1_mainTitle__container">
            <h1>
              VIGIA Internet
              <br />
              of Things™
            </h1>
          </div>
          <div className="s1_subTitle__container">
            <h5>
              Introducing VIoT²™ our fully autonomous, robust, and secure
              telemetry solution with analytical capabilities, delivering
              outstanding modularity, scalability, and flexibility to the realm
              of management.
            </h5>
          </div>
        </div>
      </div>

      <div className="segundaSeccion_Container">
        <div className="s2_primeraSeccion__container">
          <div className="s2_primeraSeccion_title">
            <Image src={vIotLogo} alt="Viot" />

            <h1>Smart telemetry.</h1>
          </div>
          <div className="s2_primeraSeccion_content">
            <h2>Remote monitoring and intelligent advanced control.</h2>
            <ActionButton
              style={{ marginTop: "3rem" }}
              text="Start now"
              link="/contact"
            />
            <p>
              Through IoT devices and the integration of management platforms,
              it conducts comprehensive monitoring of both the physical and
              logical infrastructure. VIoT²™ empowers your operation with
              seamless control.
            </p>
          </div>
        </div>
        <div className="s2_segundaSeccion_container">
          <div className="s2_segundaSeccion_header">
            <div className="s2_segundaSeccion_column">
              <h1>Total transparency and absolute control.</h1>
              <p>
                VIoT²™ is more than a solution, it is your gateway to total
                control of your technological infrastructure. From constant
                device monitoring to absolute control of key variables such as
                electricity, humidity, and security, it offers you accurate data
                instantly. Connected to the Internet of Things, it optimizes
                your resources and allows you to make intelligent decisions to
                boost operational efficiency. Connect with the future and take
                your business to the next level with our leading monitoring and
                control solution!
              </p>
            </div>
          </div>
        </div>
        <div className="s2_terceraSeccion_container">
          <div className="viemy_tabs__mainContainer">
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={1} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Infrastructure Monitoring</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  We have the perfect solution for monitoring your IoT devices:
                </h5>
                <ul style={{ marginLeft: "3rem" }}>
                  <li>
                    All electrical variables, from the main supply to backups
                    (such as generators and batteries), as well as the circuits
                    of each equipment.
                  </li>
                  <li>Temperature and humidity control of the site.</li>
                  <li>
                    Detailed monitoring of generator operation (current
                    consumption, voltage, frequency, fuel and oil levels).
                  </li>
                  <li>
                    Monitoring of air conditioning systems, including air flows,
                    cooling capacity and temperature.
                  </li>
                  <li>Intrusion detection (openings and movements) on site.</li>
                  <li>Monitoring of fire protection systems.</li>
                </ul>
              </div>
            </div>
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={2} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Total Connectivity</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  Connecting devices with precision. Impactful information.{" "}
                </h5>
                <br />
                <h5>
                  Our solution is designed to offer maximum modularity,
                  scalability, and flexibility as well as autonomous, secure,
                  and intelligent analysi, all thanks to advanced telemetry
                  devices.
                </h5>
              </div>
            </div>
            <div className="viemy_tabs__container">
              <div className="viemy_tabs_index">
                <ContentTitle text={3} />
              </div>
              <div className="viemy_tabs_title">
                <h1>Need</h1>
              </div>
              <div className="viemy_tabs_text">
                <h5>
                  Operational or field personnel often lack real-time access to
                  the operational parameters of the physical infrastructure,
                  which can lead to problems that are not detected until they
                  become evident.
                </h5>
                <h6>
                  Therefore, it is crucial to have minute-by-minute control over
                  the availability, operational continuity, communications, and
                  overall status of each device. From the electrical supply to
                  the security of the site, including humidity, pressure and air
                  conditioning systems, everything is under extreme control.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="segundaSeccionDos_Container">
        <div className="s2_quintaSeccion_container">
          <div className="textSection altura100 alignVerticalCenter">
            <div className="column-40 centerContent">
              <p
                className="fontSize3 .alignVerticalCenter"
                style={{ marginBottom: "100%", fontSize: "3rem" }}
              >
                Custom implementation
              </p>
            </div>
            <div className="column-60 ">
              <div className="fontSize3 .alignVerticalCenter">
                We take care of carrying out your projects from start to finish,
                providing you with the logistics, the necessary support, and the
                right team. We understand your needs and turn them into concrete
                designs and plans that materialize during the integration phase,
                guaranteeing optimal supervision of both the physical and
                logical infrastructure.
                <ul>
                  <li>
                    <strong>Integration and Installation: </strong> We design,
                    plan, and execute the deployment and installation of
                    equipment in the right place in a specialized way.
                  </li>

                  <li>
                    <strong>Adaptation:</strong> We are with you on the ground,
                    training your staff and transforming your operational areas
                    to ensure a smooth transition.
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
      <div className="terceraSeccion_Container">
        <div className="s3_header_container">
          <div className="s3_header_badge">
            <ContentTitle text="stories" />
          </div>
          <div className="s3_header_title">
            <h1>
              Successful VIoT²™ projects and plans we developed.
            </h1>
          </div>
        </div>
        <div className="s3_content_container">
          <Image
            src={ViemyBlog}
            alt="viemy-blog"
            width={710}
            height={529}
            className="s2_cuartaSeccion_image"
          />
          <h1>VIoT²™ success stories</h1>
          <p>Precise measurements of Energy Consumption</p>
          <Badge text="VIoT²™" theme="dark" />
          <ActionButton
            text="VIEW MORE PROJECTS"
            link="/projects"
            theme="dark"
            style={{ marginTop: "8rem", marginBottom: "8rem" }}
          />
        </div>
      </div>
      {/*
      <div className="terceraSeccion_Container">
        <div className="s3_header_container">
          <div className="s3_header_badge">
            <ContentTitle text="stories" />
          </div>
          <div className="s3_header_title">
            <h1>Successful VIoT™ projects and plans we developed</h1>
          </div>-
        </div>
        <div className="s3_content_container">
          <Image
            src={ViemyBlog}
            alt="viemy-blog"
            width={710}
            height={529}
            className="s2_cuartaSeccion_image"
          />
          <h1>Success case</h1>
          <p>
            Acceso instantáneo a la información de las distintas áreas de su
            empresa,
          </p>
          <Badge text="VIOT®" theme="dark" />
          <ActionButton
            text="VIEW MORE PROJECTS"
            link="/projects"
            theme="dark"
            style={{ marginTop: "8rem", marginBottom: "8rem" }}
          />
        </div>
      </div> */}
    </Layout>
  );
};
