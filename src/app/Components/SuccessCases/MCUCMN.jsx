import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./MCUCMN.css";
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
            Mission Critical Use Case in Military Networks
            </h1>
            <br />
            <br />
            <p className="headerText gold ">Industry</p>
            <p className="headerText lightTx">Telecommunications</p>
            <br />
            <br />
            <p className="headerText gold">Services</p>
            <p className="headerText lightTx">Support</p>
          </div>
          <div className="width-50 padding-sides-4">
            {/* <h5>Maximize the Performance of Your Technology with Our Specialized Support</h5> */}
            <h1 className="headerTitle lightTx">
              Maintaining a permanent communication without failures is vital to coordinate military and government actions.
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
              Telecommunications, satellite networks for national security.
              <br />
              <br />
              <strong>The Problem</strong>:<br />
              Provide operational continuity to mission-critical satellite networks for the armed forces and National Guard.
              <br />
              <br />
              <strong>Our Solution</strong>:<br />
              Specialized technical support based on predictive actions in order to reduce both the occurrence and duration of failures.
              <br />
              <br />
            </p>
          </div>
          <div className="right-column">
            <p className="text-normal">
              <strong className="text-resalted">
              Reinforce the crucial role of satellite networks in improving Mexico&apos;s national security
              </strong>
              <br />
              <br />
              Providing reliable and secure communications capabilities for military and government operations is no small matter.
              <br />
              <br />
              Our client&apos;s satellite networks guarantee continuous and encrypted communication channels, vital for coordinating defense strategies, disaster response and intelligence activities, as well as contributing to border security and surveillance. Given Mexico&apos;s extensive and challenging terrain, satellite technology offers comprehensive coverage that terrestrial networks cannot match. Satellites&apos; high-resolution images and surveillance capabilities provide critical intelligence that improves overall security.
              <br />
              <br />
              And to prevent equipment from failing or reaching the end of its useful life, it is necessary to have 100% efficient solutions.
              <br />
              <br />
              Most providers set limits. T7 Group® has the ability to overcome them.
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
          “Imagine the huge responsibility of providing security to all Mexican citizens. Capable and talented strategic partners are needed to maintain control.”
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
            We deployed the most updated version of our support service to eradicate planned obsolescence as well as a permanent surveillance plan based on predictive maintenance criteria with the aim of anticipating failures.
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
             Monthly incidents reduction from 120 to just 1 in just 4 months. 
             </li>
             <br />
             <li>
             Decrease from 96 hours of impact to only 2 due to downtimes.
             </li>
             <br />
             <li>
             Extend the equipments life cycle from 7 to 20 years.
             </li>
             <br />
             <li>Replacement of key parts in the infrastructure.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="principalContainer darkBg lightTx fit-content">
        <div className="generalContainer fit-content display-row">
          <div className="width-50 padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount">+5.7M USD</div>               
              </div>
              <div className="description">
                <div className="principal">Opex Savings</div>              
              </div>
            </div>
          </div>
          <div className="padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount100">150</div>                
              </div>
              <div className="description">
                <div className="principal100">Radio Coverage Zones Supported</div>              
              </div>
            </div>
          </div>
          <div className="padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount100"> &gt;98%</div>               
              </div>
              <div className="description">
                <div className="principal100">Service Availability Guaranteed</div>              
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </Layout>
  );
};
