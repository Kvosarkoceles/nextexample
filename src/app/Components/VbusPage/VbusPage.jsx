import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './vbusPage.css'
import { ActionButton } from '../Shared/ActionButton/ActionButton'
import { ContentTitle } from '../Shared/ContentTitle/ContentTitle'
import { Image as ImageAntd } from 'antd';
import { Projects } from '../Shared/Projects/ProjectsComponent'



export const VbusPage = () => {

    const viemyItems = [
        {
            title: 'Precise Correlation with VBUS®',
            desc:<p><p>With VBUS®, we take correlation to new heights with our Advanced Correlation feature. This tool is designed to meticulously analyze the importance and potential impact of every event registered in your network. What does this mean? That we evaluate each event carefully, prioritizing those that are most urgent or have a significant impact on your operations, for focused and effective management.</p> <p>This advanced methodology gives you a deep and up-to-date understanding of the dynamics of your technological environment, allowing you to:</p> <p>Precisely detect causal relationships between events, enabling early and precise intervention. Identify connections between devices of the same technological family to optimize compatibility and performance. Discover links between equipment from different families, promoting complete integration. Segment events by topology, geography, or hierarchy for an organized and clear view. Enrich event correlation by integrating with external databases, expanding the context and analytical precision.</p> <p>With VBUS®, Advanced Correlation is not just a feature, its a promise of clarity, anticipation, and total control over your technological environment!</p></p>
        },
        {
            title: 'Stratified Message Filtering',
            desc: 'The VIGIA Network BUS® employs a layered processing approach that enables real-time filtering based on patterns and various rules. Our intelligent processing capability identifies irrelevant messages, significantly reducing the number of events to be processed.'
        },
        {
            title: 'Smart Processing',
            desc: 'By simultaneously applying multiple rules, we ensure that each business area receives only the messages relevant to its operations. This translates into a benefit that allows users to quickly parameterize priorities, formats, tags, classifications, filtering preferences, storage policies, and more.'
        },
        {
            title: 'Protocols and Interfaces',
            desc:<p><p> VBUS® comes with a default set of pre-designed interfaces and connectors that enable quick adoption, integration, and management of network-generated events. This allows for the processing of millions of events in a short time.</p> <p>Below are some of the most commonly used components:</p> </p>,
          
            image: '/assets/img/vbusProtocols.png'
        },
        {
            title: 'Visualization Modules',
            desc: 'The interface has been designed with the aim of providing end users with a completely intuitive experience in terms of usage, navigation, and data discovery. It boasts an extensive array of tools, ensuring that any user can make the most of the platform without the need for extensive training.'
        },
        {
            title: 'Normalized Decoding',
            desc: 'The event flow is standardized according to the X.733 standard of the International Telecommunication Union (ITU), ensuring data integrity and avoiding compatibility issues between different software and hardware versions. This allows for the designation of custom variables, defined and constrained by the NOC.'
        },
    ]


    return (
        <Layout>
            <div className="headerContainer">
                <video autoPlay muted loop playsInline className="video-background">
                    <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/VBUS-v3.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <div className="primeraSeccion_Container">
                    <div className="s1_mainTitle__container">
                        <h1>VIGIA<br />
                            Network Bus®
                        </h1>
                    </div>
                    <div className="s1_subTitle__container">
                        <h5>VBUS® revolutionizes the way your organization interacts with its technological infrastructure. We offer an advanced solution to filter, correlate, and integrate the logical and physical components of your network.</h5>
                    </div>
                </div>
            </div>
            
            <div className="segundaSeccion_Container">
                <div className="s2_primeraSeccion__container">
                    <div className="generalContainer">
                        <div className="left-column">
                            <ImageAntd preview={false} src="/assets/img/logo-vbus-color-vertical.png" alt='vbusLogo' />
                        </div>
                        <div className="right-column subtitle">
                            <h2>The best solution in the market.</h2>
                            <ActionButton style={{ marginTop: '3rem' }} text='Start now' link='/contact' />
                        </div>
                    </div>
                    <div className="generalContainer">
                        <div className="left-column title">
                            <h1>Cohesive.</h1>
                        </div>
                        <div className="right-column">
                            <h2 className='text-normal'>With our unique set of pre-designed interfaces and connectors, we ensure seamless integration and efficient adoption. This allows your team to manage and process millions of events quickly and effectively. We not only optimize your network performance, but also improve decision-making with accurate data and real-time analytics, ensuring your technological environment reaches its full potential.</h2>
                        </div>
                    </div>
                    {/* <div className='s2_primeraSeccion_title'>
                        <Image src={vBusLogo} alt='viemy' />
                        
                        <h1>Cohesive.</h1>
                    </div>
                    <div className='s2_primeraSeccion_content'>
                        <h2>The best solution in the market.</h2>
                        <ActionButton style={{ marginTop: '3rem' }} text='Start now' link='/contact' />
                        <p>With our unique set of pre-designed interfaces and connectors, we ensure seamless integration and efficient adoption. This allows your team to manage and process millions of events quickly and effectively. We not only optimize your network performance, but also improve decision-making with accurate data and real-time analytics, ensuring your technological environment reaches its full potential.</p>
                    </div>  */}
                </div>
                {/* <div className="s2_segundaSeccion_container">
                    <div className="s2_segundaSeccion_header">
                        <div className="s2_segundaSeccion_column">
                            <ContentTitle text='01' />
                            <h1>Detect</h1>
                            <p>Precisely detect causal relationships between events, enabling early and precise intervention.</p>
                        </div>
                        <div className="s2_segundaSeccion_column">
                            <ContentTitle text='02' />
                            <h1>Identify</h1>
                            <p>Identify connections between devices of the same technological family to optimize compatibility and performance.</p>
                        </div>
                        <div className="s2_segundaSeccion_column">
                            <ContentTitle text='03' />
                            <h1>Discover</h1>
                            <p>Discover links between equipment from different families, promoting complete integration.</p>
                        </div>
                    </div>
                    <div className="s2_segundaSeccion_videoContainer">
                        <iframe src="https://player.vimeo.com/video/653771247?api=1" frameBorder="0"></iframe>
                    </div>

                </div> */}
                <div className="s2_terceraSeccion_container">
                    <div className="generalContainer">
                        <div className='left-column width-60'>
                            <h1 className='title-light'>Unparalleled Integration and Unification</h1>
                            <p className='text-normal'>
                                VBUS® not only unifies and coordinates the components of your technological infrastructure, but also takes monitoring to a new dimension. With constant vigilance, our system proactively detects any anomaly or potential failure, sending instant alerts to both the system and users for quick resolution.<br /><br />But that&apos;s not all. VBUS® also has the extraordinary ability to collect crucial information and share critical data in real time. This ensures that you receive the most relevant information, facilitating quick decisions based on accurate data. With VBUS®, your organization will always be one step ahead, guaranteeing an optimal and secure technological environment.
                            </p>

                        </div>
                    </div>
                    <div className="s2_segundaSeccion_videoContainer newVideoContainer">
                        <div style={{padding:'56.25% 0 0 0',position:'relative'}}><iframe src="https://player.vimeo.com/video/653771247?h=c7d091f461" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe></div><script async src="https://player.vimeo.com/api/player.js"></script>
                        {/* <iframe width='100%' src="https://player.vimeo.com/video/653771247?api=1" frameBorder="0"></iframe> */}
                    </div>

                    <div className="generalContainer">
                        <div className='left-column width-60'>
                            <h1 className='title-light'>Incorporating,<br />Mainstreaming...</h1>

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
                                        <div className='viemy_tabs_text display-column'>
                                            <p className='text-normal'>{item.desc}</p>
                                            {item.image && <ImageAntd preview={false}  style={{ marginTop: '-1.5rem' }}  src={item.image} alt='vbusLogo' />}   
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
                
                {/* <div className="s2_cuartaSeccion_container">
                    <div className="s2_cuartaSeccion_item galeria">
                        <div className='s2_cuartaSeccion_imageContainer'>
                            <ImageAntd src="/assets/img/vbus-pantalla1.jpg" className='imgGaleria' />
                            <ImageAntd src="/assets/img/vbus-pantalla2.jpg" className='imgGaleria' />
                            <ImageAntd src="/assets/img/vbus-pantalla3.jpg" className='imgGaleria' />
                        </div>
                        <div className="s2_cuartaSeccion_textContainer">
                            <h1>Precise Correlation with VBUS®</h1>
                            <p>With VBUS®, we take correlation to new heights with our Advanced Correlation feature. This tool is designed to meticulously analyze the importance and potential impact of every event registered in your network. What does this mean? That we evaluate each event carefully, prioritizing those that are most urgent or have a significant impact on your operations, for focused and effective management.<br></br><br></br>
                                This advanced methodology gives you a deep and up-to-date understanding of the dynamics of your technological environment, allowing you to:<br></br> <br></br>
                                Precisely detect causal relationships between events, enabling early and precise intervention.
                                Identify connections between devices of the same technological family to optimize compatibility and performance.
                                Discover links between equipment from different families, promoting complete integration.
                                Segment events by topology, geography, or hierarchy for an organized and clear view.
                                Enrich event correlation by integrating with external databases, expanding the context and analytical precision.
                                With VBUS®, Advanced Correlation is not just a feature, it&apos;s a promise of clarity, anticipation, and total control over your technological environment!
                            </p>

                        </div>
                    </div>
                    <div className="s2_quintaSeccion_container">

                        <div className='textSection altura100 alignVerticalCenter'>
                            <div className='column-60 '>
                                <h1>VBUS® Architecture</h1>
                                <p className='fontSize3 .alignVerticalCenter'>
                                    The VBUS® architecture is designed to offer a complete and open solution that encompasses all devices, applications, and services in your organization, regardless of brand, manufacturer, or equipment age. Our ability to record and monitor activity in real time extends from the most modern devices to those considered obsolete, all on a single platform! <br></br><br></br>From optical equipment to communication devices, servers, firewalls, databases, power systems, and smart devices, VBUS® facilitates efficient and centralized management of all these components. It also ensures complete visibility and precise control over your technological environment, marking a radical change in the way you manage your IT infrastructure.
                                </p>
                            </div>
                            <div className='column-40 centerContent'>
                                <ActionButton style={{ marginTop: '3rem' }} text='More information' link='/contact' />
                            </div>

                        </div>
                    </div>

                </div> */}
            </div>
            <div className='principalContainer darkBg lightTx display-row'>
                <div className='left-column width-50'>
                    <h1 className='title-light'>VBUS® Architecture</h1>
                    <ImageAntd preview={false} src="/assets/img/vbus-arch.png" className='imgGaleria vBusArch' />
                </div>
                <div className="right-column width-50 padding-7 display-column height-100 justify-centered">
                    <p className='text-normal'>
                    The VBUS® architecture is designed to offer a complete and open solution that encompasses all devices, applications, and services in your organization, regardless of brand, manufacturer, or equipment age. Our ability to record and monitor activity in real time extends from the most modern devices to those considered obsolete, all on a single platform!<br/><br/>From optical equipment to communication devices, servers, firewalls, databases, power systems, and smart devices, VBUS® facilitates efficient and centralized management of all these components. It also ensures complete visibility and precise control over your technological environment, marking a radical change in the way you manage your IT infrastructure.
                    <br/><br/>
                    
                    </p>
                    <ActionButton text='CONTACT US' link='/contact' theme='dark' style={{ marginTop: '2rem' }} />
                </div>
            </div>
            <div className="terceraSeccion_Container">
                <div className="s3_header_container">
                    <div className='s3_header_badge'>
                        <ContentTitle text='stories' />
                    </div>
                    <div className='s3_header_title'>
                        <h1>Successful VBUS® projects and plans we developed</h1>
                    </div>
                </div>
                <Projects product="vbus" darkMode= {true} />
                {/* <div className="s3_content_container">
                    <ImageAntd src='/assets/img/horizontalCard1.png' alt='viemy-blog' className='s2_cuartaSeccion_image' />
                    <h1>VBUS® success stories</h1>
                    <p>Proactive Optimization of Mobile Networks: Monitoring and
                        Prediction for Efficient Operations</p>
                    <Badge text='VBUS®' theme='dark' />
                    <ActionButton text='VIEW MORE PROJECTS' link='/projects' theme='dark' style={{ marginTop: '8rem', marginBottom: '8rem' }} />
                </div> */}
            </div>
        </Layout>
    )
}
