import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./VASS.css";
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
              LTE and 5G Network Predictions
            </h1>
            <br />
            <br />
            <p className="headerText gold ">Industry</p>
            <p className="headerText lightTx">Telecommunications</p>
            <br />
            <br />
            <p className="headerText gold">Services</p>
            <p className="headerText lightTx">
              VIGIA Advanced Algorithmic Suite™
            </p>
          </div>
          <div className="width-50 padding-sides-4">
            {/* <h5>Maximize the Performance of Your Technology with Our Specialized Support</h5> */}
            <h1 className="headerTitle lightTx">
              Our client serves a large portion of mobile phone users in Mexico.
              And it can’t fail. Adopting a culture of anticipating
              technological problems is having vision and talent.
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
              Telephony, internet, mobile broadband services, network security,
              business services and more.
              <br />
              <br />
              <strong>The Problem</strong>:<br />
              Evolve the client&apos;s Data Center to anticipate negative events in
              their 3G, 4G and 5G mobile networks, as well as evaluate and
              predict the KPIs of their services in real time on a single
              dashboard.
              <br />
              <br />
              <strong>Our Solution</strong>:<br />
              Establish a platform based on statistical models and machine
              learning algorithms with the ability to predict the behavior of
              key indicators
              <br />
              <br />
            </p>
          </div>
          <div className="right-column">
            <p className="text-normal">
              <strong className="text-resalted">
                Learn. Discover. Anticipate. The formula for mastering a
                network, evaluating it, and achieving substantial economic
                savings.
              </strong>
              <br />
              <br />
              It’s impossible to underestimate the importance of a mobile phone
              service company using the best available artificial intelligence
              to monitor its technological infrastructure and maintain high
              quality standards.
              <br />
              <br />
              By leveraging the predictive capabilities of VIGIA Advanced
              Algorithmic Suite™, we were able to provide the client with the
              ideal tool to evaluate their services and, at the same time,
              identify potential problems before they become critical failures.
              <br />
              <br />
              Timely interventions clearly reflect a satisfactory level of user
              experience,  through satisfied customers who remain loyal to the
              brand and fully recommend it, as well as reduce the financial and
              reputational risks associated with unexpected service
              interruptions. Advanced machine learning algorithms can analyze
              large amounts of data from network components, identifying
              patterns and anomalies that human operators might overlook. In
              return, VAAS™ has been able to ensure that the company&apos;s
              technological infrastructure operates at maximum efficiency,
              resulting in more reliable and faster mobile services for end
              users, as well as significant savings for the company.
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
            “The way we can involve in our clients&apos; goals is not only to
            anticipate or solve problems in their technology, but to help them
            establish projects of excellence and improve their KPIs, as in this
            case.”
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
              We developed a set of combined statistical models and machine
              learning models to project the behavior of more than 100 of the
              client&apos;s indicators, on two timelines: long-term and short-term,
              both with an accuracy above 95%.
            </p>
            <br />
            <br />
            <p className="text-normal">
              The implemented platform has dynamic dashboards that allow
              visualizing a comparison between the current behavior trend of
              each metric and its expected one.
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
              <li>Identification of previously unknown network behavior patterns.</li><br />
              <li>Productivity operation increase by up to 44% in a year.</li><br />
              <li>67% incident resolution speed improvement.</li><br />
              <li>Resources optimization by up to 50%.</li>              
            </ul>
          </div>
        </div>
      </div>
      <div className="principalContainer darkBg lightTx fit-content">
        <div className="generalContainer fit-content display-row">
          <div className="width-50 padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount">+30M</div>             
              </div>
              <div className="description">
                <div className="principal">Mobile Users Predictions</div>               
              </div>
            </div>
          </div>
          <div className="width-50 padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount">+95%</div>             
              </div>
              <div className="description">
                <div className="principal">in Prediction Accuracy</div>               
              </div>
            </div>
          </div>
          <div className="width-50 padding-sides-2">
            <div className="numberComponentOne lightTx">
              <div className="data">
                <div className="amount">+100</div>             
              </div>
              <div className="description">
                <div className="principal">Predictive Indicators</div>               
              </div>
            </div>
          </div>         
        </div>       
      </div>
    </Layout>
  );
};
