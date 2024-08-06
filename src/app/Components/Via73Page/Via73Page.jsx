import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./via73Page.css";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Image as ImageAntd } from "antd";
import { Projects } from "../Shared/Projects/ProjectsComponent";

export const Via73Page = () => {
  const viemyItems = [
    {
      title: "Reduce Human Error Through Advanced Decision Making",
      desc: (
        <p>
          Imagine a system that makes intelligent decisions for you. With
          V-iA73® , forget about errors and interruptions:
          <br />
          <br />
          <ul style={{ marginLeft: "3rem" }}>
            <li>
              <strong> Intelligent Algorithms:</strong> V-iA73® analyzes in real
              time and executes predefined actions to solve problems before they
              affect your work.
            </li>
            <br />
            <li>
              <strong> Continuous Monitoring: </strong> Detects and corrects
              errors proactively, ensuring smooth and uninterrupted operation.
            </li>
            <br />
            <li>
              <strong> Fewer Manual Tasks: </strong> Automates decision-making
              and frees up your time for more strategic tasks.
            </li>
          </ul>
          <br />
        </p>
      ),
    },
    {
      title: "Hassle-Free Automation: Ready to Use Solutions",
      desc: (
        <p>
          V-iA73® offers you a suite of pre-designed automation solutions that
          can be adapted to your needs.
          <br />
          <br />
          Take advantage of the benefits of automation:
          <br />
          <br />
          <ul style={{ marginLeft: "3rem" }}>
            <li>
              <strong>Proven Algorithms:</strong> Our solutions are based on
              reliable and configurable algorithms for a wide range of
              applications.
            </li>
            <br />

            <li>
              <strong>Seamless Integration:</strong> Designed to integrate
              seamlessly into your existing environment, without the need for
              costly modifications.
            </li>
            <br />
            <li>
              <strong>Quick and Efficient Implementation:</strong> Enjoy a
              smooth and hassle-free implementation process.
            </li>
          </ul>
          <br />
          <br />
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <div className="headerContainer">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VIA73_v3.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="primeraSeccion_Container">
          <div className="s1_mainTitle__container">
            <h1>
              VIGIA Intelligent
              <br />
              Automation®
            </h1>
          </div>
          <div className="s1_subTitle__container">
            <h5>
              Introducing the new era of automation: VIGIA Intelligent
              Automaton® (V-iA73®)An innovative solution that integrates
              artificial intelligence to optimize incident management. More than
              just an automaton: V-iA73® goes beyond traditional automation. Its
              set of intelligent event correlations and algorithms allows it to
              detect and resolve incidents autonomously and efficiently.
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
                src="/assets/img/via73logo.png"
                alt="vbusLogo"
              />
            </div>
            <div className="right-column subtitle">
              <h2>
                V-iA73® frees up expert engineers from routine technical tasks,
                allowing them to focus on strategic and high-value decisions.
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
              <h1 className="title-light">
                Optimize your operations <br />
                with V-iA73®.
              </h1>
            </div>
            <div className="right-column">
              <h2 className="text-normal">
                Our intelligent automatons, equipped with cutting-edge
                algorithms, detect and solve problems autonomously, ensuring
                unprecedented operational continuity.
              </h2>
            </div>
          </div>
        </div>
        <div className="s2_terceraSeccion_container">
          <div className="generalContainer">
            <div className="left-column width-60">
              <h1 className="title-light">
                Tailor-made flexibility:
                <br />
                V-iA73® adapts to your business.
              </h1>
              <p className="text-normal">
                Simplify your operation with V-iA73® . It offers flexibility and
                seamlessly adapts to your current environment.
                <br />
                <br />
                Do you work with different types of clients, servers, operating
                systems or platforms? Don&apos;t worry! V-iA73® is compatible
                with a wide variety of technologies, so you can effortlessly
                automate even the most complex tasks.
              </p>
            </div>
          </div>

          <div className="s2_segundaSeccion_videoContainer newVideoContainer">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/653727567?h=59c74160b2"
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
            Take Full Control <br />
            with V-iA73®
          </h1>
        </div>
        <div className="right-column width-50 padding-7 display-column height-100 justify-centered">
          <p className="text-normal">
            Gain a complete vision of your operations with our intuitive
            dashboards. Access real-time information and make strategic
            decisions with greater confidence.
            <br />
            <br />
            V-iA73® offers you:
            <br />
            <br />
            <ul style={{ marginLeft: "3rem" }}>
              <li>
                <strong>Total Control:</strong> Monitor and manage your
                operations in real time from a single platform.
              </li>
              <br />
              <li>
                <strong> Information at Your Fingertips: </strong> Visualize
                relevant data and receive alerts about potential disruptions or
                failures.
              </li>
              <br />
              <li>
                <strong>Intelligent Decision Making:</strong> Optimize your
                operations and improve efficiency with accurate and up-to-date
                information.
              </li>
              <br />
              <li>
                <strong>Advanced Analytics:</strong> Detect and prevent problems
                before they affect your productivity.
              </li>{" "}
              <br />
              <li>
                <strong>Proactive Management:</strong> Anticipate and resolve
                problems proactively, ensuring smooth and uninterrupted
                operation.
              </li>
            </ul>
            <br />
            <br />
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

      <div className="principalContainer darkTxt display-row heigh-fit">
        <div className="left-column width-60 padding-7">
          <h1 className="title-light">Adapt your organization to the future</h1>
        </div>
        <div className="right-column width-40 padding-7 display-column height-100 justify-centered">
          <p className="text-normal">
            Forget about limitations, V-iA73® offers you a flexible and scalable
            architecture that adapts to the changing needs of your business.
          </p>
          <br />
          <br />
          <ActionButton
            text="CONTACT US NOW"
            link="/contact"
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>
    </Layout>
  );
};
