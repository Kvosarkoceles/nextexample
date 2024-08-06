import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./vaasPage.css";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Image as ImageAntd } from "antd";
import { Projects } from "../Shared/Projects/ProjectsComponent";

export const VaasPage = () => {
  const viemyItems = [
    {
      title: "Accelerate business analytics",
      desc: "Gain valuable insights from your data in real time.",
    },
    {
      title: "Guaranteed success",
      desc: "Make strategic decisions based on accurate and reliable data.",
    },
    {
      title: "Scale your business",
      desc: "Adapt the platform to your present and future needs.",
    },
  ];

  return (
    <Layout>
      <div className="headerContainer">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VAAS-v3.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="primeraSeccion_Container">
          <div className="s1_mainTitle__container">
            <h1>
              VIGIA Advanced
              <br />
              Algorithmic Suite®
            </h1>
          </div>
          <div className="s1_subTitle__container">
            <h5>
              Eliminate delays in responding to critical events and take control
              of your operation with our innovative solution powered by machine
              learning. It accurately predicts the behavior of each element and
              service within your network, providing you with crucial
              information to act proactively and precisely.
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
                src="/assets/img/logo-vaas-color-vertical.png"
                alt="vbusLogo"
              />
            </div>
            <div className="right-column subtitle">
              <h2>Cutting edge technology for fault prediction.</h2>
              <ActionButton
                style={{ marginTop: "3rem" }}
                text="Start now"
                link="/contact"
              />
            </div>
          </div>
          <div className="generalContainer">
            <div className="left-column title-light">
              <h1 className="title-light">
                Master the power <br />
                of information.
              </h1>
            </div>
            <div className="right-column">
              <h2 className="text-normal">
                We&apos;ve crafted a solution focused on the development of
                sophisticated learning algorithms that accumulate experience and
                knowledge over time. It&apos;s adept at understanding and
                anticipating the present and future behaviors of all elements
                and services in the ecosystem. This foresight enables preemptive
                decision-making, ensuring readiness for any scenario.
              </h2>
            </div>
          </div>
        </div>
        <div className="s2_terceraSeccion_container">
          <div className="generalContainer">
            <div className="left-column width-100">
              <h1 className="title-light">Our solution enables you to:</h1>
              <div className="s2_segundaSeccion_header width-100 space-between">
                <div className="s2_segundaSeccion_column">
                  <ContentTitle text="01" />
                  <h1>Uncover hidden data</h1>
                  <p className="text-normal">
                    Explore and find valuable insights that were previously
                    hidden.
                  </p>
                </div>
                <div className="s2_segundaSeccion_column">
                  <ContentTitle text="02" />
                  <h1>Profile behaviors</h1>
                  <p className="text-normal">
                    Understand the trends and patterns in your data.
                  </p>
                </div>
                <div className="s2_segundaSeccion_column">
                  <ContentTitle text="03" />
                  <h1>Predict events</h1>
                  <p className="text-normal">
                    Anticipate what might happen and make strategic decisions.
                  </p>
                </div>
                <div className="s2_segundaSeccion_column">
                  <ContentTitle text="04" />
                  <h1>Perform advanced analytics</h1>
                  <p className="text-normal">
                    Gain deep and detailed insights from your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s2_segundaSeccion_videoContainer newVideoContainer">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/653730196?h=9781b2fcbb"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <script async src="https://player.vimeo.com/api/player.js"></script>
            {/* <iframe width='100%' src="https://player.vimeo.com/video/653771247?api=1" frameBorder="0"></iframe> */}
          </div>

          <div className="generalContainer">
            <div className="left-column width-60">
              <h1 className="title-light">
                VAAS™ The Future of
                <br />
                Business Intelligence.
              </h1>
              <p className="text-normal">
                Prepare for tomorrow&apos;s success with VAAS™. <br />
                Our next-generation platform provides you with the tools you
                need to:
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
        <div className="left-column width-60">
          <h1 className="title-light">The pillars of VAAS™</h1>
          <ImageAntd
            preview={false}
            src="/assets/img/VAAS-diagrama-ing_1.png"
            className="imgGaleria vBusArch"
          />
        </div>
        <div className="right-column width-40 padding-7 display-column height-100 justify-centered" >
          <div className="text-normal">
            <ul style={{padding: "2rem" }}>
              <li>
                Scalability: Efficient, compatible with diverse technologies,
                and capable of growing with you.
              </li>
              <br />
              <li>
                Reliability: Designed for high availability and security of your
                data.
              </li>
              <br />
              <li>
                Artificial Intelligence: Constantly evolving to offer you the
                best results.
              </li>
            </ul>

            <br />
            <br />
          </div>
          <ActionButton
            text="CONTACT US NOW"
            link="/contact"
            theme="dark"
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>

      <div className="principalContainer darkTxt display-row heigh-fit">
        <div className="left-column width-60">
          <h1 className="title-light">VAAS™ offers you:</h1>
        </div>
        <div className="right-column width-40 padding-7 display-column height-100 justify-centered">
          <p className="text-normal">
            <ul>
              <li>
                <strong>Real-time analytics</strong>
              </li>
              Get up-to-date information instantly.
              <br />
              <br />
              <li>
                <strong>Intelligent decision-making</strong>
              </li>
              Based on accurate and reliable data.
              <br />
              <br />
              <li>
                <strong>Unlimited scalability</strong>
              </li>
              Adapt the platform to your needs.
              <br />
              <br />
              <li>
                <strong>Guaranteed security</strong>
              </li>
              Protect your data with the latest technologies.
              <br />
              <br />
              <li>
                <strong>Constant innovation</strong>
              </li>
              Access the latest artificial intelligence features.
            </ul>
            <br />
            <br />
          </p>
          <ActionButton
            text="CONTACT US NOW"
            link="/contact"
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>
      {/* <div className="terceraSeccion_Container">
        <div className="s3_header_container">
          <div className="s3_header_badge">
            <ContentTitle text="stories" />
          </div>
          <div className="s3_header_title">
            <h1>Successfull VAAS™ projects and plans we developed</h1>
          </div>
        </div>
        <Projects product="vaas" darkMode={true} />
        <div className="s3_content_container">
          <ImageAntd
            preview={false}
            src="/assets/img/horizontalCard1.png"
            alt="viemy-blog"
            className="s2_cuartaSeccion_image"
          />
          <h1>Success case</h1>
          <p>
            Proactive Optimization of Mobile Networks: Monitoring and Prediction
            for Efficient Operations
          </p>
         
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
