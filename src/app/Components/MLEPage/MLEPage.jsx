import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./MLEPage.css";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Image as ImageAntd } from "antd";
import { Projects } from "../Shared/Projects/ProjectsComponent";

export const MLEPage = () => {
  const viemyItems = [
    {
      title: "Reduce Human Error Through Advanced Decision Making",
      desc: (
        <p>
          Imagine a system that makes intelligent decisions for you. With
          V-iA73® , forget about errors and interruptions:
          <br />
          <br />
          Intelligent Algorithms: V-iA73® analyzes in real time and executes
          predefined actions to solve problems before they affect your work.
          <br />
          Continuous Monitoring: Detects and corrects errors proactively,
          ensuring smooth and uninterrupted operation. Fewer Manual Tasks:
          Automates decision-making and frees up your time for more strategic
          tasks.
        </p>
      ),
    },
    {
      title: "Hassle-Free Automation: Ready to Use Solutions",
      desc: (
        <p>
          {" "}
          V-iA73® offers you a suite of pre-designed automation solutions that
          can be adapted to your needs.
          <br />
          <br />
          Take advantage of the benefits of automation:
          <br />
          <br />
          Proven Algorithms: Our solutions are based on reliable and
          configurable algorithms for a wide range of applications.
          <br />
          Seamless Integration: Designed to integrate seamlessly into your
          existing environment, without the need for costly modifications.
          <br />
          Quick and Efficient Implementation: Enjoy a smooth and hassle-free
          implementation process.
        </p>
      ),
    },
  ];

  return (
    <Layout>
      <div className="headerContainer">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/MLE_v3.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="primeraSeccion_Container">
          <div className="s1_mainTitle__container">
            <h1>
              Machine Life
              <br />
              Extended™
            </h1>
          </div>
          <div className="s1_subTitle__container">
            <h5>
              Maximize the performance of your technology with our specialized
              support.
            </h5>
          </div>
        </div>
      </div>

      <div className="segundaSeccion_Container">
        <div className="s2_primeraSeccion__container">
          <div className="generalContainer">
            <div className="left-column padding-sides-4">
              <ImageAntd
                preview={false}
                src="/assets/img/mle_icon.png"
                alt="vbusLogo"
              />
            </div>
            <div className="right-column padding-sides-4 subtitle">
              <h2>
                Welcome to our progressive strategy to combat technological
                obsolescence.
              </h2>
              <ActionButton
                style={{ marginTop: "3rem" }}
                text="Start now"
                link="/contact"
              />
            </div>
          </div>
          <div className="generalContainer ">
            <div className=" title-light padding-sides-4">
              <h1 className="title-light">
                Intelligent and
                <br />
                predictive support.
              </h1>
              <br />
              <p className="text-normal"> Our team specializes in providing technical support services for
                your infrastructure. </p>
            </div>           
          </div>
        </div>        
      </div>
      <div className="principalContainer darkBg lightTx display-row heigh-fit">
        <div className="left-column width-50">
          <h1 className="title-light">
            Machine Life <br />
            Extended™
          </h1>
          <ImageAntd
            preview={false}
            src="/assets/img/mle_desc.png"
            alt="viemy-blog"
            className="s2_cuartaSeccion_image"
          />
        </div>
        <div className="right-column width-50 padding-7 display-column height-100 justify-centered padding-sides-4">
          <p className="text-normal">
            Maximize the performance of your installed technology with our
            specialized support.
            <br />
            <br />
            Welcome to our progressive strategy to combat technological
            obsolescence. In our team, we specialize in providing technical
            support services for your existing infrastructure.
            <br />
            <br /> Our main mission is to maximize the lifespan of your
            equipment, optimizing both capital expenditures (Capex) and
            operating expenses (Opex) to align with the goals of new projects in
            your company. You can rely on us to keep your technology operational
            and ready to face the challenges of the future.
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

      {/* <div className='principalContainer darkTxt display-row heigh-fit'>
                <div className='left-column width-60'>
                    <h1 className='title-light'>Adapt Your Organization to the Future</h1>

                </div>
                <div className="right-column width-40 padding-7 display-column height-100 justify-centered">
                    <p className='text-normal'>
                        Forget about limitations,  V-iA73® offers you a flexible and scalable architecture that adapts to the changing needs of your business.
                    </p>
                    <br/><br/>
                    <ActionButton text='CONTACT US NOW' link='/projects'  style={{ marginTop: '1rem' }} />
                </div>
            </div> */}
      <div className="terceraSeccion_Container">
        <div className="s3_header_container">
          <div className="s3_header_badge">
            <ContentTitle text="stories" />
          </div>
          <div className="s3_header_title">
            <h1>Successful MLE™ projects and plans we developed</h1>
          </div>
        </div>
        <Projects product="mle" darkMode={true} />
        {/* <div className="s3_content_container width-50">
                    <ImageAntd preview={false} src='/assets/img/horizontalCard1.png' alt='viemy-blog' className='s2_cuartaSeccion_image' />
                    <h1>Success case</h1>
                    <p>Acceso instantáneo a la información de las distintas áreas de su empresa</p>
                    <Badge text='VBUS®' theme='dark' />
                    <ActionButton text='VIEW MORE PROJECTS' link='/projects' theme='dark' style={{ marginTop: '8rem', marginBottom: '8rem' }} />
                </div> */}
      </div>
    </Layout>
  );
};
