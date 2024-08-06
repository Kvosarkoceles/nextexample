import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./AIRBUS.css";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Badge } from "../Shared/Badge/Badge";
import { Image as ImageAntd } from "antd";

export const MLEATT = () => {
  return (
    <Layout>
      <div className="headerContainer">
        {/* <video autoPlay muted loop playsInline className="video-background">
                    <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VIA73_v2_optimized.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video> */}
        <div className="primeraSeccion_Container display-row">
          <div className="width-50 padding-sides-4 height-100 justify-centered display-column">
            <h1 className="title-big fit-content lightTx">
              National Security Case
            </h1>
            <br />
            <br />
            <p className="headerText gold ">Industry</p>
            <p className="headerText lightTx">Telecommunications</p>
            <br />
            <br />
            <p className="headerText gold">Services</p>
            <p className="headerText lightTx">VIGIA Network Bus®</p>
          </div>
          <div className="width-50 padding-sides-4">
            {/* <h5>Maximize the Performance of Your Technology with Our Specialized Support</h5> */}
            <h1 className="headerTitle lightTx">
              Shielding and keeping a nation’s communication 100% operational is
              an essential matter.
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="principalContainer width-100 height-100 padding-tops-0 top-10neg">
                <ImageAntd preview={false} src='/assets/img/mleatt1_optimized.jpg'></ImageAntd>
            </div> */}
      <div className="space-5 lightBg"></div>
      <div className="principalContainer fit-content lightBg">
        <h1 className="title-badge-orange">About the Customer</h1>
        <div className="generalContainer display-row">
          <div className="left-column padding-right-4">
            <p className="text-resalted">
              <strong>Main Services</strong>:<br />
              Broadband, 4G and 5G coverage, Satellite services end-to-end
              encrypted secure communication, national security strategies and
              more.
              <br />
              <br />
              <strong>The Problem</strong>:<br />
              Lack of a control and administration system for registered and
              authorized radio terminals.
              <br />
              <br />
              <strong>Our Solution</strong>:<br />
              Evaluation, correlation and actions based on AI to overcome any
              incident that may occur throughout the technological
              infrastructure.
              <br />
              <br />
            </p>
          </div>
          <div className="right-column">
            <p className="text-normal">
              <strong className="text-resalted">
                To intervene punctually to ensure that innovation and security
                are not lacking in the protection of citizens.
              </strong>
              <br />
              <br />
              The ability to maintain real-time communication between government
              agencies, military and police organizations, as well as fire and
              rescue departments, health and hospitals, etc., is essential to
              make data-driven decisions and respond quickly in mission-critical
              situations to municipal, state and federal level. This requires
              maintaining strong communication channels to ensure the proper
              functioning of these systems.
              <br />
              <br />
              However, the issue goes further, since it is not just about
              communication, but also about coordinating efforts and strict
              confidentiality. If this is not guaranteed, it is impossible to
              deploy resources efficiently, which could leave a nation
              vulnerable to various situations.
              <br />
              <br />
              As you can imagine, this is a technologically complex environment.
              Our customer was in need of a comprehensive monitoring system, as
              well as a control and management system for registered and
              authorized radio terminals.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="generalContainer">
        <div className="commentComponent">
          <div className="icon">
            <svg
              width="60"
              height="52"
              viewBox="0 0 60 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 0C40 1.6 34.2 9.40001 34.2 22.8V51.6H59.8V23.2H48V20.6C48 14 52.4 12.6 59.6 11.8L55 0ZM20.8 0C5.8 1.6 0 9.40001 0 22.8V51.6H25.6V23.2H13.8V20.6C13.8 14 18.2 12.6 25.4 11.8L20.8 0Z"
                fill="#9F8F7F"
              />
            </svg>
          </div>
          <div className="comment">
            “Our customer has implementations of secure land communications in
            Mexico. The management of state and federal information requires
            careful oversight and proactive measures, as well as executing
            preventive actions. It is a huge responsibility.”
          </div>
        </div>
      </div>
      <div className="space-10"></div>
      {/* <div className="principalContainer width-100 height-100vh padding-0">
                <img className='width-100 height-100vh' style={{ objectFit: 'cover' }} src="/assets/img/mleatt2_optimized.jpg" alt="" srcset="" />
            </div> */}
      <div className="principalContainer darkBg fit-content">
        <div className="generalContainer lightTx fit-content display-row">
          <div className="left-column">
            <h1 className="title-badge-orange">What we did</h1>
          </div>
          <div className="right-column">
            <p className="text-normal">
              One of the most powerful technologies we have developed is VIGIA
              Network Bus®, designed to anticipate the occurrence of failures;
              all within an uncomplicated, friendly and 100% reliable operation.
              Just what was needed.
            </p>
            <br />
            <br />
            <p className="text-normal">
              Although our customer uses TETRAPOL technology, with the
              implementation of VBUS® we were able to standardize and provide
              the customer with a monitoring and management system across their
              multiple networks.
            </p>
            <br />
            <br />
            <p className="text-normal">
              With this solution it is possible to avoid downtimes, operational
              disasters and million-dollar economic losses.
            </p>
          </div>
        </div>
      </div>
      <div className="principalContainer darkBg lightTx fit-content">
        <h1 className="title-badge-orange">In numbers</h1>
        <div className="generalContainer fit-content display-row">
          <div className="left-column fit-content display-column">
            <h1 className="title-big lightTx">
              These are our customer´s benefits!
            </h1>
            <ActionButton
              text="Let´s Create"
              link="/contact"
              theme="dark"
              style={{ marginTop: "5rem" }}
            />
          </div>
          <div className="right-column fit-content">
            <ul className="text-normal lightTx">
              <li>
                Interactive reports with several granularities (analysis level
                by month, day, hour, minutes) of the different metrics.
              </li>
              <br />
              <li>
                Detail and correlation of events in the elements of the network
                for fault detection.
              </li>
              <br />
              <li>
                Connectivity with mediation servers to trace the status of the
                terminals in the different cells.
              </li>
              <br />
              <li>
                Management module for radio terminal admissions, deregisters and
                changes.
              </li>
              <br />
              <li>
                Monitoring of all technological domains of the platform such as:
                routers, firewalls, radio bases and infrastructure equipment
                such as power plants, batteries and door opening sensors.
              </li>
            </ul>
            {/* <p className="text-normal lightTx">
              For 8 years it has been possible to extend the useful life of more
              than 10,000 pieces of equipment, thereby avoiding the investment
              to renew technology.
            </p> */}
          </div>
        </div>
      </div>
      <div className="principalContainer darkBg lightTx fit-content">
        <div className="generalContainer fit-content display-row justify-centered">
          <div className="width-50 padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount">+630K USD</div>
              </div>
              <div className="description">
                <div className="principal">
                  Annual savings on adapters and licensing for managers +
                  reduction in operational human resources
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="generalContainer fit-content display-row flexwrap centerContent">
          <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
            <div className="title-big justify-centered textOrange">3</div>
            <div className="second">
              National Security implementarions in Queretaro, Jalisco and Social
              Readaption Centers
            </div>
          </div>
          <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
            <div className="title-big justify-centered textOrange" style={{ marginTop: '2rem'}}>+2,000</div>
            <div className="second">Managed terminals by state</div>
          </div>
          <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
            <div className="primary" style={{ marginTop: '1rem'}}>50% Failure Reduction</div>
            <div className="second">
              From 2 hours to 10 min.
              <br />
              Less time in problem detection
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
