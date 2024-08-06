import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./VIOT.css";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Badge } from "../Shared/Badge/Badge";
import { Image as ImageAntd } from "antd";

export const MLEATT = () => {
  return (
    <Layout>
      <div className="headerContainer">
        <div className="primeraSeccion_Container display-row">
          <div className="width-50 padding-sides-4 height-100 justify-centered display-column">
            <h1 className="title-big fit-content lightTx">
              Decrease in Energy Consumption Case
            </h1>
            <br />
            <br />
            <p className="headerText gold ">Industry</p>
            <p className="headerText lightTx">Telecommunications</p>
            <br />
            <br />
            <p className="headerText gold">Services</p>
            <p className="headerText lightTx">VIGIA Internet of Things™</p>
          </div>
          <div className="width-50 padding-sides-4">
            <h1 className="headerTitle lightTx">
              Quantifying real electricity consumption and controlling billing
              resulted in significant savings.
            </h1>
          </div>
        </div>
      </div>

      <div className="space-5 lightBg"></div>
      <div className="principalContainer fit-content lightBg">
        <h1 className="title-badge-orange">About the Customer</h1>
        <div className="generalContainer display-row">
          <div className="left-column padding-right-4">
            <p className="text-resalted">
              <strong>Main Services</strong>:<br />
              High-quality optical fiber network, telecommunications, among
              others. <br />
              <br />
              <strong>The Problem</strong>:<br />
              Some customers in disagreement over shared billing for the
              electrical consumption of their racks. <br />
              <br />
              <strong>Our Solution</strong>:<br />
              Quantify the electrical consumption of each power circuit to
              achieve correct billing and generate significant savings. <br />
              <br />
            </p>
          </div>
          <div className="right-column">
            <p className="text-normal">
              <strong className="text-resalted">
                Internet of Things, the key to achieving IMPORTANT SAVINGS in
                electricity consumption billing.
              </strong>
              <br />
              <br />
              Among many other functions, IoT technology allows monitoring and
              controlling industrial metrics in real time, such as humidity,
              pressure, temperature, security systems, etc. In this case, it was
              about tracking electrical energy consumption.
              <br />
              <br />
              But, how? Where? Our client operates optical fiber in Mexico, in
              more than 150 locations. Each one with a set of racks containing
              all necessary transmission devices, as well as a power consumption
              system shared among its customers. There arose the need to bill
              each customer&apos;s electrical consumption in an individualized and
              precise manner. The mission was impossible without the exact
              measurement of each rack&apos;s power supply.
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
            “We had a double purpose: one, to help the client reduce their
            electricity costs and, two, to establish fair billing (not shared)
            between their clients.”
          </div>
        </div>
      </div>
      <div className="space-10"></div>
      <div className="principalContainer darkBg fit-content">
        <div className="generalContainer lightTx fit-content display-row">
          <div className="left-column">
            <h1 className="title-badge-orange">What we did</h1>
          </div>
          <div className="right-column">
            <p className="text-normal">
              One cornerstone of our developments is V-IoT²™, created from the
              &quot;internet of things&quot;. We have refined this technology going beyond
              the digital linking between devices. In this case, V-IoT²™ was the
              perfect solution –and still be–, as it allowed us to accurately
              track energy consumption patterns to make adjustments and optimize
              usage.
            </p>
            <br />
            <br />
            <div className="text-normal">
              This data-driven approach has generated enormous annual savings
              (more than 1.2 million dollars per account), as V-IoT²™ allows for
              predictive maintenance, essential to guarantee the reliability and
              longevity of the electrical infrastructure, as well as to detect
              potential problems before they become real issues, avoiding
              downtimes and costly repairs.
            </div>
            <br />
            <br />
            <p className="text-normal">
              Plus, this solution is aligned with global sustainability goals.
              By optimizing energy usage, our client was able to reduce its
              carbon footprint and contribute to environmental conservation
              efforts.
            </p>
          </div>
        </div>
      </div>
      <div className="principalContainer darkBg lightTx fit-content">
        <h1 className="title-badge-orange">In numbers</h1>
        <div className="generalContainer fit-content display-row">
          <div className="left-column fit-content display-column">
            <h1 className="title-big lightTx">
            These are our customer&apos;s benefits!
            </h1>
            <ActionButton
              text="Let&apos;s Create"
              link="/projects"
              theme="dark"
              style={{ marginTop: "5rem" }}
            />
          </div>
          <div className="right-column fit-content">
            <ul className="text-normal lightTx">             
                <li>Measurement and management of power plants.</li><br />
                <li>Measurement of each circuit assigned to clients.</li><br />
                <li>
                  Precise quantification of consumption in kW·h at each site.
                </li><br />
                <li>
                  Daily, weekly, and monthly reports of consumption per site and
                  per client.
                </li><br />
                <li>
                  Notifications of decreased or excessive electrical consumption
                  per client at each site.
                </li><br />
                <li>
                  Reduction of failures due to electrical supply interruptions.
                </li>              
            </ul>
          </div>
        </div>
      </div>
      
   
      <div className="principalContainer darkBg lightTx fit-content">
        <div className="generalContainer fit-content display-row justify-centered">
          <div className="width-50 padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount">+1.2M USD</div>               
              </div>
              <div className="description">
                <div className="principal">Customer consumption annual savings</div>               
              </div>
            </div>
          </div>        
        </div>   
        <div className="generalContainer fit-content display-row justify-centered">          
          <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
            <div className="primary">+150 Monitored Sites</div>         
            <div className="second">Precision in quantifying individual consumption</div>
          </div>
          <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
            <div className="primary">+15% Failure Reduction</div>
            <div className="second">Due to direct electrical supply monitoring in circuits</div>
          
          </div>
        </div>     
      </div>
    </Layout>
  );
};
