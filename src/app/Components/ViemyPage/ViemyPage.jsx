import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './viemyPage.css'
import { ActionButton } from '../Shared/ActionButton/ActionButton'
import { ContentTitle } from '../Shared/ContentTitle/ContentTitle'
import { Image as ImageAntd } from 'antd';
import { Projects } from '../Shared/Projects/ProjectsComponent'



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
    ]


    return (
        <Layout>
            <div className="headerContainer">
                <video autoPlay muted loop playsInline className="video-background">
                    <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VIEMY-v2_optimized.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <div className="primeraSeccion_Container">
                    <div className="s1_mainTitle__container">
                        <h1>VIEMY™ <br />
                            Intelligent Private Virtual Assistant
                        </h1>
                    </div>
                    <div className="s1_subTitle__container">
                        <h5>VIEMY™ is an Intelligent Private Virtual Assistant (IPVA) created with the objective of centralizing data from the entire corporate environment into a single platform. This gives collaborators easy access to valuable information.</h5>
                    </div>
                </div>
            </div>

            <div className="segundaSeccion_Container">

                <div className="s2_primeraSeccion__container">
                    <div className="generalContainer">
                        <div className="left-column justify-centered">
                            <ImageAntd preview={false} src="/assets/img/logo-viemy.png" alt='vbusLogo' />
                        </div>
                        <div className="right-column subtitle">
                            <h2>With VIEMY™ you can accelerate and unify processes, necessary for your operation.</h2>
                            <ActionButton style={{ marginTop: '3rem' }} text='Start now' link='/contact' />
                        </div>
                    </div>
                    <div className="generalContainer">
                        <div className="left-column title-light">
                            <h1 className='title-light'>Centralize, Manage,<br />Communicate.</h1>
                        </div>
                        <div className="right-column">
                            
                        </div>
                    </div>

                </div>
                <div className="s2_terceraSeccion_container">

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


                    <div className="s2_segundaSeccion_videoContainer newVideoContainer">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}><iframe src="https://player.vimeo.com/video/942156542?h=7108b510d8" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div><script async src="https://player.vimeo.com/api/player.js"></script>
                    </div>

                    <div className="generalContainer">
                        <div className='left-column width-60'>
                            <h1 className='title-light'>The only Intelligent Private Virtual Assistant for internal use in the corporate environment.</h1>

                        </div>
                    </div>
                    <div className='viemy_tabs__mainContainer'>
                        {
                            viemyItems.map((item, index) => {
                                return (
                                    <div key={index + 1} className='viemy_tabs__container'>
                                        <div className='viemy_tabs_index'>
                                            <ContentTitle text={index + 1} />
                                        </div>
                                        <div className='viemy_tabs_title'>
                                            <h1 className='subtitle'>{item.title}</h1>
                                        </div>
                                        <div className='viemy_tabs_text'>
                                            <p className='text-normal'>{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
            <div className="quita_Secccion_Container">
                <div className="s2_cuartaSeccion_container">
                    <div className="s2_cuartaSeccion_item">
                        <div className="s2_cuartaSeccion_imageContainer">
                            <ImageAntd
                                src='/assets/img/VIEMY - Tranx Status Plot.png'
                                alt="viemy1"
                                className="s2_cuartaSeccion_image"
                            />
                        </div>
                        <div className="s2_cuartaSeccion_textContainer">
                            <h1 className='title-light'>Immediate and Insightful Data</h1>
                            <p className='text-normal'>
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
                            <ImageAntd
                                src='/assets/img/VIEMY - temp and bw.png'
                                alt="viemy1"
                                className="s2_cuartaSeccion_image"
                            />
                        </div>
                        <div className="s2_cuartaSeccion_textContainer">
                            <h1 className='title-light'>Full Visualization in Real-Time</h1>
                            <p className='text-normal'>
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
                            <ImageAntd
                                src='/assets/img/VIEMY - Personal Managmnt.png'
                                alt="viemy1"
                                className="s2_cuartaSeccion_image"
                            />
                        </div>
                        <div className="s2_cuartaSeccion_textContainer">
                            <h1 className='title-light'>Day to Day Effective Management</h1>
                            <p className='text-normal'>
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
            {/* <div className='principalContainer darkBg lightTx display-row heigh-fit'>
                <div className='left-column width-50'>
                    <h1 className='title-light'>Take Full Control <br />with  V-iA73®</h1>
                </div>
                <div className="right-column width-50 padding-7 display-column height-100 justify-centered">
                    <p className='text-normal'>
                        Gain a complete vision of your operations with our intuitive dashboards. Access real-time information and make strategic decisions with greater confidence.<br /><br />V-iA73®  offers you:<br /><br />

                        Total Control: Monitor and manage your operations in real time from a single platform.<br />
                        Information at Your Fingertips: Visualize relevant data and receive alerts about potential disruptions or failures.<br />
                        Intelligent Decision Making: Optimize your operations and improve efficiency with accurate and up-to-date information.
                        Advanced Analytics: Detect and prevent problems before they affect your productivity.<br />
                        Proactive Management: Anticipate and resolve problems proactively, ensuring smooth and uninterrupted operation.
                    </p>
                    <br /><br />
                    <ActionButton text='CONTACT US NOW' link='/projects' theme='dark' style={{ marginTop: '1rem' }} />
                </div>
            </div> */}

            {/* <div className='principalContainer darkTxt display-row heigh-fit'>
                <div className='left-column width-60'>
                    <h1 className='title-light'>Adapt Your Organization to the Future</h1>

                </div>
                <div className="right-column width-40 padding-7 display-column height-100 justify-centered">
                    <p className='text-normal'>
                        Forget about limitations,  V-iA73® offers you a flexible and scalable architecture that adapts to the changing needs of your business.
                    </p>
                    <br /><br />
                    <ActionButton text='CONTACT US NOW' link='/projects' style={{ marginTop: '1rem' }} />
                </div>
            </div> */}
            {/* <div className="terceraSeccion_Container">
                <div className="s3_header_container">
                    <div className='s3_header_badge'>
                        <ContentTitle text='stories' />
                    </div>
                    <div className='s3_header_title'>
                        <h1>Successful V-iA73® projects and plans we developed+</h1>
                    </div>
                </div>
                <div className="s3_content_container width-50">
                    <ImageAntd preview={false} src='/assets/img/horizontalCard1.png' alt='viemy-blog' className='s2_cuartaSeccion_image' />
                    <h1>Success case</h1>
                    <p>Proactive Optimization of Mobile Networks: Monitoring and
                        Prediction for Efficient Operations</p>
                    <Badge text='VBUS®' theme='dark' />
                    <ActionButton text='VIEW MORE PROJECTS' link='/projects' theme='dark' style={{ marginTop: '8rem', marginBottom: '8rem' }} />
                </div>
            </div> */}
            <div className="principalContainer heigh-fit">
                <div className="generalContainer display-row fit-content">
                    <div className="width-50">
                        <h1 className='title darkTxt'>The best Collaborator for your Company</h1>
                    </div>
                    <div className="width-50">
                        <p className='text-normal darkTxt'>With VIEMY you’ll be able to accelerate and unify operational processes. It integrates all
                            systems, platforms and applications that are essential to your business in one easy to use
                            interface. Best of all, VIEMY uses Natural Language Processing (NLP) to seamlessly
                            integrate into your processes and answer questions in real time as if it were human.
                        </p>
                        <ActionButton style={{ marginTop: '3rem' }} text='CONTACT US NOW' link='/contact' />
                    </div>
                </div>
            </div>
            <div className="terceraSeccion_Container">
                <div className="s3_header_container">
                    <div className='s3_header_badge'>
                        <ContentTitle text='stories' />
                    </div>
                    <div className='s3_header_title'>
                        <h1>Successful VIEMY™ projects and plans we developed</h1>
                    </div>
                </div>
                <Projects product="viemy" darkMode= {true} />
                {/* <div className="s3_content_container width-50">
                    <ImageAntd preview={false} src='/assets/img/horizontalCard1.png' alt='viemy-blog' className='s2_cuartaSeccion_image' />
                    <h1>Success case</h1>
                    <p>Optimization with our Intelligent Virtual Assistant <br/>Instant access to valuable information</p>
                    <Badge text='VIEMY™' theme='dark' />
                    <ActionButton text='VIEW MORE PROJECTS' link='/projects' theme='dark' style={{ marginTop: '8rem', marginBottom: '8rem' }} />
                </div> */}
            </div>

        </Layout>
    )
}
