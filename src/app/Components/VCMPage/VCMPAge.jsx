import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./VCMPage.css";
import Image from "next/image";
import ViemyLogo from "@/assets/img/logo-viemy.png";
import vBusLogo from "@/assets/img/logo-vbus-color-vertical.png";
import ViemyApp1 from "@/assets/img/viemy-app1.png";
import ViemyApp2 from "@/assets/img/viemy-app2.png";
import ViemyApp3 from "@/assets/img/viemy-app3.png";

import vBusPantalla1 from "@/assets/img/vbus-pantalla1.jpg";
import vBusPantalla2 from "@/assets/img/vbus-pantalla2.jpg";
import vBusPantalla3 from "@/assets/img/vbus-pantalla3.jpg";
import vBusArch from "@/assets/img/vbus-arch.png";

import ViemyBlog from "@/assets/img/horizontalCard1.png";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Badge } from "../Shared/Badge/Badge";
import { Image as ImageAntd } from "antd";

export const VCMPage = () => {
  const viemyItems = [
    {
      title: "Comparing Configurations",
      desc: (
        <p>
          VCM® offers users comprehensive insights into their network
          configurations. With its robust comparison features, you can analyze
          various scenarios:
          <br />
          <br />
          <ul style={{ marginLeft: "3rem" }}>
            <li>
              <strong>Current device configuration vs. stored presets</strong>:
              Ensure optimal device setups by comparing their current
              configurations with predefined, high-performance settings.
            </li>
            <br />
            <li>
              <strong>
                Current Configuration vs. Ideal Standards (Golden Config)
              </strong>
              : Identify potential improvements by comparing your current
              configurations with a predefined &quot;Golden Configuration&quot;
              representing the optimal setup.
            </li>
            <br />
            <li>
              <strong>Similar Equipment Comparisons</strong>: Optimize
              configurations for similar equipment by examining how different
              teams have configured devices with similar functionalities.
            </li>
            <br />
            <li>
              <strong>Proposed vs. Base Configuration</strong>: Evaluate the
              effects of proposed configuration changes by comparing them with
              existing baseline configurations.
            </li>
          </ul>
        </p>
      ),
    },
    {
      title: "Backups",
      desc: (
        <p>
          VCM® safely stores your devices configurations, allowing you to
          recover and re-apply previous configurations, quickly restoring
          affected services. VCM® also empowers users to set rollback policies
          and automatically reset devices to the last valid configuration.
        </p>
      ),
    },
    {
      title: "Audit Configurations",
      desc: (
        <p>
          VCM® allows users to generate reports on specific configuration
          parameters and easily detect security, firmware, access problems, etc.
        </p>
      ),
    },
    {
      title: "Performance Evaluation",
      desc: (
        <p>
          Optimize the performance of your network with VCM® and VBUS®. These
          combined solutions unlock the power of predictive analytics for your
          equipment. <br /> <br /> By analyzing past performance, VCM® and VBUS®
          anticipate the impact of configuration changes. This foresight
          empowers you to make confident decisions about adjustments, ensuring
          your equipment runs smoothly and efficiently with every update. <br />{" "}
          <br />
          Proactively identify potential issues before they cause downtime and
          keep your services running flawlessly.
        </p>
      ),
    },
    {
      title: "Intuitive Interface",
      desc: (
        <p>
          Facilitates the quick identification of configurations, parameters,
          devices, differences between configurations, unauthorized changes,
          among other functionalities.
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <div className="headerContainer">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VCM-v3.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="primeraSeccion_Container">
          <div className="s1_mainTitle__container">
            <h1>
              VIGIA
              <br />
              Configuration
              <br />
              Manager®
            </h1>
          </div>
          <div className="s1_subTitle__container">
            <h5>
              VIGIA Configuration Manager® (VCM®) stands as our comprehensive
              solution for managing, controlling, and overseeing configurations
              across all devices, ensuring compliance with standards and
              streamlining the implementation of changes across every network
              component.
            </h5>
          </div>
        </div>
      </div>

      <div className="segundaSeccion_Container">
        <div className="s2_primeraSeccion__container">
          <div className="generalContainer">
            <div className="left-column">
              <ImageAntd
                preview={false}
                src="/assets/img/vcmlogo.png"
                alt="vbusLogo"
              />
            </div>
            <div className="right-column subtitle">
              <h2>
                VCM® seamlessly integrates with VBUS® and VAAS™ to unlock
                unparalleled flexibility.
              </h2>
              <ActionButton
                style={{ marginTop: "3rem" }}
                text="Start now"
                link="/contact"
              />
            </div>
          </div>
          <div className="generalContainer">
            <div className="left-column title-light">
              <h1 className="title-light">Capacity in two broad senses.</h1>
            </div>
            <div className="right-column">
              <h2 className="text-normal">
                Complete Control over Configurations: Store configurations for
                any device or platform within VBUS®, giving you comprehensive
                control over your entire network.
              </h2>
            </div>
          </div>
        </div>
        <div className="s2_terceraSeccion_container">
          <div className="generalContainer">
            <div className="left-column width-60">
              <h1 className="title-light">Automated and secure backups.</h1>
              <p className="text-normal">
                Schedule automatic backups of your configurations within a
                secure, encrypted environment ensure peace of mind in case of
                unexpected events by keeping copies of settings available for
                easy restoration.
              </p>
            </div>
          </div>

          <div className="viemy_tabs__mainContainer">
            {viemyItems.map((item, index) => {
              return (
                <div key={index + 1} className="viemy_tabs__container">
                  <div className="viemy_tabs_index">
                    <ContentTitle text={index + 1} />
                  </div>
                  <div className="viemy_tabs_title">
                    <h1 className="subtitle">{item.title}</h1>
                  </div>
                  <div className="viemy_tabs_text">
                    <p className="text-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="principalContainer darkBg lightTx display-row heigh-fit">
        <div className="left-column width-50">
          <h1 className="title-light">
            Configuration
            <br />
            Manager
          </h1>
          <ImageAntd
            preview={false}
            src="/assets/img/vcmimage.png"
            className="imgGaleria vBusArch"
          />
        </div>
        <div className="right-column width-50 padding-7 display-column height-100 justify-centered">
          <p className="text-normal">
            VCM® puts powerful configuration management at your fingertips with
            an intuitive interface:
            <br />
            <br />
            <ul style={{ marginLeft: "3rem"}}>
              <li style={{ marginTop: '1rem'}}>
                <strong>Simple Setup & Management:</strong> Quickly manage
                settings for all your devices from a single platform.
              </li>             
              <li style={{ marginTop: '1rem'}}>
                <strong>Flexible Defaults:</strong> Set configurations for
                different groups of devices with customizable defaults.
              </li>
             
              <li style={{ marginTop: '1rem'}}>
                <strong>Scripted Efficiency:</strong> Generate or apply scripts
                based on pre-defined templates, automating repetitive tasks.
              </li>
            
              <li style={{ marginTop: '1rem'}}>
                <strong>Smart Organization:</strong> Efficiently organize
                settings by filtering and creating groups.
              </li>
          
              <li style={{ marginTop: '1rem'}}>
                <strong>Fast Compliance Checks:</strong> Minimize time spent identifying outdated or non-compliant configurations.
              </li>
              <li style={{ marginTop: '1rem'}}>
                <strong>Automated Alerts:</strong> Save time by automatically detecting non-compliant configurations across multiple devices with alerts.
              </li>
            
              <li style={{ marginTop: '1rem'}}>
                <strong>
                Secure Access Management:
                </strong> Centralized management of security and password settings with secure group-based permissions.
              </li>

              <li style={{ marginTop: '1rem'}}>
                <strong>
                Automatic Recovery:
                </strong> Enjoy peace of mind with automatic configuration recovery after events such as reboots.
              </li>
            </ul>              
          </p>
          <br />
          <br />
          <ActionButton
            text="CONTACT US NOW"
            link="/contact"
            theme="dark"
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>
    
    </Layout>
  );
};
