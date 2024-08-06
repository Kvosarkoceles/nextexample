import React from "react";
import { Layout } from "../Shared/Layout/Layout";
import "./viemyPage.css";
import Image from "next/image";
import ViemyLogo from "@/assets/img/logo-viemy.png";
import ViemyApp1 from "@/assets/img/VIEMY - Tranx Status Plot.png";
import ViemyApp2 from "@/assets/img/VIEMY - temp and bw.png";
import ViemyApp3 from "@/assets/img/VIEMY - Personal Managmnt.png";
// import ViemyApp3 from "@/assets/img/Managmnt.png";import ViemyApp3 from "@/assets/img/Managmnt.png";
import ViemyBlog from "@/assets/img/viemy-blog.png";
import { ActionButton } from "../Shared/ActionButton/ActionButton";
import { ContentTitle } from "../Shared/ContentTitle/ContentTitle";
import { Badge } from "../Shared/Badge/Badge";

export const ViemyPage = () => {
  const viemyItems = [
    {
      title: "Integration with Multiple Data Sources",
      desc: "VIEMY™ can integrate with any data base, monitoring platform, trouble ticketing or Application Programming Interface (API).",
    },
    {
      title: "Privacy and Security",
      desc: "It can adapt to the rules and security protocols of your business and integrates the authentication methods already used in your current messaging platform. All data is processed locally and only users with appropriate security clearances will have access. No customer data is used in the training of VIEMY™.",
    },
    {
      title: "Communication via Standard Messaging Platforms",
      desc: "VIEMY™ can be integrated to any standard messaging platform currently used by your business.",
    },
    {
      title: "Total Adaptability",
      desc: "VIEMY™ is a flexible solution and can adapt to your business as it grows, changes, and integrates new technologies.",
    },
    {
      title: "Dynamic Bidirectional Communication",
      desc: "VIEMY™ not only answers direct questions asked by its users, it can also send alarms, reminders and notifications of upcoming events.",
    },
  ];

  return (
    <Layout>
      <div className="primeraSeccion_Container">
        <div className="s1_mainTitle__container">
          <h1>
            VIEMY™ <br />
            Intelligent Private Virtual Assistant
          </h1>
        </div>
        <div className="s1_subTitle__container">
          <h5>
            VIEMY™ is an Intelligent Private Virtual Assistant (IPVA) created
            with the objective of centralizing data from the entire corporate
            environment into a single platform. This gives collaborators easy
            access to valuable information.
          </h5>
        </div>
      </div>
      <div className="segundaSeccion_Container">
        <div className="s2_primeraSeccion__container">
          <div className="s2_primeraSeccion_title">
            <Image
              src={ViemyLogo}
              layout="responsive"
              alt="viemy"
              className="s2_primeraSeccion_title_img"
            />
          </div>

          <div className="s2_primeraSeccion_content">
            <h2>
              With VIEMY™ you can accelerate and unify processes necessary for
              your operation.
            </h2>
            <ActionButton
              style={{ marginTop: "3rem" }}
              text="START NOW"
              link="/contact"
            />
          </div>
        </div>
        <div className="s2_primeraSeccion__container_subtitle">
          <h1>Centralize, Manage, Communicate</h1>
        </div>
      </div>
      <div className="terceraSeccion_Containers">
        <div className="s2_segundaSeccion_container">
          <div className="s2_segundaSeccion_header">
            <div className="s2_segundaSeccion_column">
              <ContentTitle text="01" />
              <h1>Communication</h1>
              <p>
                Has the capacity to communicate with collaborators. VIEMY™ can
                answer queries related to any area within the professional
                domain.
              </p>
            </div>
            <div className="s2_segundaSeccion_column">
              <ContentTitle text="02" />
              <h1>Diversity</h1>
              <p>
                Integration with all data sources including, sales, human
                resources, inventory as well as data bases related to the
                technological infrastructure of the company.
              </p>
            </div>
            <div className="s2_segundaSeccion_column">
              <ContentTitle text="03" />
              <h1>Language</h1>
              <p>
                By using Natural Language Processing, VIEMY™ facilitates
                interactions between humans and machines, making them friendlier
                and more transparent.
              </p>
            </div>
          </div>
          <div className="s2_segundaSeccion_videoContainer">
            {/* <video
              width="320"
              height="240"
              controls
              preload="none"
              className="s2_segundaSeccion_video"
            >
              <source
                src="https://vimeo.com/942156542"
                type="video/mp4"
              />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video> */}
            <iframe
              src="https://player.vimeo.com/video/942156542?h=7108b510d8&color=ffffff&title=0&byline=0"
              // style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              className="frameVideo"
            ></iframe>
          </div>
        </div>
        <div className="s2_terceraSeccion_container">
          <h1>
            The only Intelligent Private Virtual Assistant for internal use in
            the corporate environment.
          </h1>
        </div>
      </div>

      <div className="cuarta_Seccion_Container">
        <div className="viemy_tabs__mainContainer">
          {viemyItems.map((item, index) => {
            return (
              <div key={index + 1} className="viemy_tabs__container">
                <div className="viemy_tabs_index">
                  <ContentTitle text={index + 1} />
                </div>
                <div className="viemy_tabs_title">
                  <h1>{item.title}</h1>
                </div>
                <div className="viemy_tabs_text">
                  <h5>{item.desc}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="quita_Secccion_Container">
        <div className="s2_cuartaSeccion_container">
          <div className="s2_cuartaSeccion_item">
            <div className="s2_cuartaSeccion_imageContainer">
              <Image
                src={ViemyApp1}
                alt="viemy1"
                width={694}
                height={396}
                className="s2_cuartaSeccion_image"
              />
            </div>
            <div className="s2_cuartaSeccion_textContainer">
              <h1>Immediate and Insightful Data</h1>
              <p>
                Our Intelligent Private Virtual Assistant provides an advanced
                analytics experience. Uncover the ability to visualize crucial
                data with detailed tables and graphs. Make informed decisions by
                accessing key metrics quickly and easily, empowering the
                capacity to optimize and manage the digital environment.
              </p>
            </div>
          </div>
          <div className="s2_cuartaSeccion_item">
            <div className="s2_cuartaSeccion_imageContainer">
              <Image
                src={ViemyApp2}
                alt="viemy1"
                width={518}
                height={402}
                className="s2_cuartaSeccion_image"
              />
            </div>
            <div className="s2_cuartaSeccion_textContainer">
              <h1>Full Visualization in Real-Time</h1>
              <p>
                Through an intuitive interface and interactive cards, VIEMY™
                presents key information about the operational status of all the
                network elements in real-time. The most useful information of
                metrics such as temperature, CPU usage, bandwidth, and even
                those obtained from IoT sensors can be queried and visualized in
                any device you have the virtual assistant installed.
              </p>
            </div>
          </div>
          <div className="s2_cuartaSeccion_item">
            <div className="s2_cuartaSeccion_imageContainer">
              <Image
                src={ViemyApp3}
                alt="viemy1"
                width={784}
                height={335}
                className="s2_cuartaSeccion_image"
              />
            </div>
            <div className="s2_cuartaSeccion_textContainer">
              <h1>Day to Day Effective Management</h1>
              <p>
                VIEMY™ contributes to better management of employees&#39;
                day-to-day activities. Additionally, by incorporating the Human
                Resources area&#39;s platform or database, process documentation
                becomes more efficient, as well as the overall management of
                shifts and personnel, through process digitalization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sexta_Seccion_Container">
        <div className="s2_cuartaSeccion_container">
          <div className="s2_cuartaSeccion_endContainer">
            <div className="s2_cuartaSeccion_EndTitle">
              <h1>The best Collaborator for your Company</h1>
            </div>
            <div className="s2_cuartaSeccion_EndContent">
              <h5>
                With VIEMY™ you&#39;ll be able to accelerate and unify
                operational processes. It integrates all systems, platforms and
                applications that are essential to your business in one easy to
                use interface. Best of all, VIEMY uses Natural Language
                Processing (NLP) to seamlessly integrate into your processes and
                answer questions in real time as if it were human.
              </h5>
            </div>
          </div>
          <div className="botto_Acction">
            <ActionButton text="Contact Us Now" link="/contact" />
          </div>
        </div>
      </div>
      <div className="cuartaSeccion_Containers"></div>
      <div className="tercera_seccion_Container"></div>
      <div className="terceraSeccion_Container">
        <div className="s3_header_container">
          <div className="s3_header_badge">
            <ContentTitle text="stories" />
          </div>
          <div className="s3_header_title">
            <h1>Successful VIEMY™ projects and plans we developed</h1>
          </div>
        </div>
        <div className="s3_content_container">
          <Image
            src={ViemyBlog}
            alt="viemy-blog"
            width={510}
            height={629}
            className="s3_conten_img"
          />
          <h1>Optimization with our Intelligent Virtual Assistant</h1>
          <p>Instant access to valuable information.</p>
          <Badge text="viemy" theme="dark" />
          <ActionButton
            text="VIEW MORE PROJECTS"
            link="projects.com"
            theme="dark"
            style={{ marginTop: "8rem", marginBottom: "8rem" }}
          />
        </div>
      </div>
    </Layout>
  );
};
