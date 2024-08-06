import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './vaasPage.css'
import Image from 'next/image'
import ViemyLogo from '@/assets/img/logo-viemy.png'
import VaasLogo from '@/assets/img/logo-vaas-color-vertical.png'
import ViemyApp1 from '@/assets/img/viemy-app1.png'
import ViemyApp2 from '@/assets/img/viemy-app2.png'
import ViemyApp3 from '@/assets/img/viemy-app3.png'

import vBusPantalla1 from '@/assets/img/vbus-pantalla1.jpg'
import vBusPantalla2 from '@/assets/img/vbus-pantalla2.jpg'
import vBusPantalla3 from '@/assets/img/vbus-pantalla3.jpg'

import ViemyBlog from '@/assets/img/horizontalCard2.png'
import { ActionButton } from '../Shared/ActionButton/ActionButton'
import { ContentTitle } from '../Shared/ContentTitle/ContentTitle'
import { Badge } from '../Shared/Badge/Badge'
import {Image as ImageAntd} from 'antd';



export const VaasPage = () => {

    const viemyItems = [
        {
            title: 'Advanced Algorithms',
            desc: 'Mathematical custom models and exploration tools, data discovery, profiling behavior, event prediction and advanced data analysis are achieved, among many other functions; This gives all users, regardless of their technical skills, the ability to find the answer they need easily, quickly, and efficiently.'
        },
        {
            title: 'Exceptional Interface',
            desc: 'The interface is designed with the aim of offering the end user a totally intuitive use, navigation, and data discovery experience and with an extensive series of tools that ensures that any user can get the most out of the platform without requiring extensive training.'
        },
        {
            title: 'Performance',
            desc: 'Each component has been optimized to offer the best performance in loading advanced graphics, displaying large volumes of information, interactive maps, smart filters, etc. what offers the user remarkable agility of use.'
        }
    ]


    return (
        <Layout>
            <div className="primeraSeccion_Container">
                <div className="s1_mainTitle__container">
                    <h1>VAAS™©<br />
                        Vigia Advanced Algorithmic Suite
                    </h1>
                </div>
                <div className="s1_subTitle__container">
                    <h5>VIGIA® Advanced Algorithmic Suite® is the solution that we developed with the ability to learn and precisely predict the behavior of each element and service in the network. It is a valuable tool that adds assertive decision making in a proactive way. Based on indicators that generate accurate and real-time reports on current behavior anticipating what may happen in the future with managed services.</h5>
                </div>
            </div>
            <div className="segundaSeccion_Container">
                <div className="s2_primeraSeccion__container">
                    <div className='s2_primeraSeccion_title'>
                        <Image src={VaasLogo} alt='viemy' />
                        
                        <h1>Avant-garde technology for failure prediction</h1>
                    </div>
                    <div className='s2_primeraSeccion_content'>
                        <h2>Eliminate delays in responding to critical events and take control of your operation with our innovative solution powered by machine learning. It accurately predicts the behavior of each element and service within your network, providing you with crucial information to act proactively and precisely.</h2>
                        <ActionButton style={{ marginTop: '3rem' }} text='Start now' link='/contact' />
                        {/* <p>But that&apos;s not all. VBUS® also has the extraordinary ability to collect crucial information and share critical data in real time. This ensures that you receive the most relevant information, facilitating quick decisions based on accurate data. With VBUS®, your organization will always be one step ahead, guaranteeing an optimal and secure technological environment.</p> */}
                    </div>
                </div>
                <div className="s2_segundaSeccion_container">
                    <div className="s2_segundaSeccion_header">
                        <div className="s2_segundaSeccion_column">
                            <ContentTitle text='01' />
                            <h1>Scalability</h1>
                            <p>Precisely detect causal relationships between events, enabling early and precise intervention.</p>
                        </div>
                        <div className="s2_segundaSeccion_column">
                            <ContentTitle text='02' />
                            <h1>Reliability</h1>
                            <p>Identify connections between devices of the same technological family to optimize compatibility and performance.</p>
                        </div>
                        <div className="s2_segundaSeccion_column">
                            <ContentTitle text='03' />
                            <h1>Artificial Intelligence</h1>
                            <p>Discover links between equipment from different families, promoting complete integration.</p>
                        </div>
                    </div>
                    <div className="s2_segundaSeccion_videoContainer">
                        <iframe src="https://player.vimeo.com/video/653730196?api=1" frameBorder="0"></iframe>
                    </div>

                </div>
                <div className="s2_terceraSeccion_container">
                    <h1>Outstanding Features</h1>
                    <div className='viemy_tabs__mainContainer'>
                        {
                            viemyItems.map((item, index) => {
                                return (
                                    <div key={index + 1} className='viemy_tabs__container'>
                                        <div className='viemy_tabs_index'>
                                            <ContentTitle text={index + 1} />
                                        </div>
                                        <div className='viemy_tabs_title'>
                                            <h1>{item.title}</h1>
                                        </div>
                                        <div className='viemy_tabs_text'>
                                            <h5>{item.desc}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
                <div className="s2_cuartaSeccion_container">
                    {/* <div className="s2_cuartaSeccion_item">
                        <div className='s2_cuartaSeccion_imageContainer'>
                            <Image src={ViemyApp1} alt='viemy1' width={694} height={396} className='s2_cuartaSeccion_image'/>
                        </div>
                        <div className="s2_cuartaSeccion_textContainer">
                            <h1>Nombre de la pantalla</h1>
                            <p>Our customers are the driving force behind everything we do. We put their needs, desires, and satisfaction at the heart of our operations. By actively listening to their feedback and understanding their pain points, we continuously enhance our products and services to exceed their expectations.</p>
                        </div>
                    </div> */}
                    <div className="s2_cuartaSeccion_item galeria">
                        <div className='s2_cuartaSeccion_imageContainer'>
                            <ImageAntd src="/assets/img/vaas-pantalla1.jpg" className='imgGaleria' />
                            <ImageAntd src="/assets/img/vaas-pantalla2.jpg"  className='imgGaleria'/>
                            <ImageAntd src="/assets/img/vaas-pantalla3.jpg" className='imgGaleria'/>
                        </div>
                        <div className="s2_cuartaSeccion_textContainer">
                            <h1>VAAS™: The future of business intelligence.</h1>
                            <p>
                            Prepare for tomorrow&apos;s success with VAAS™. Our next-generation platform provides you with the tools you need to:
                            <br></br><br></br>
                            
                                <div><strong>Accelerate business analytics</strong>: Gain valuable insights from your data in real time.</div>
                                <div><strong>Guaranteed success</strong>: Make strategic decisions based on accurate and reliable data.</div>
                                <div><strong>Scale your business</strong>: Adapt the platform to your present and future needs.</div>
                            
                            <br></br><br></br>
                            <div className='innerTitle'>The pillars of VAAS™:</div>
                            
                                <div><strong>Real-time analytics</strong> Get up-to-date information instantly.</div>
                                <div><strong>Intelligent decision-making</strong> Based on accurate and reliable data.</div>
                                <div><strong>Unlimited scalability</strong> Adapt the platform to your needs.</div>
                                <div><strong>Guaranteed security</strong> Protect your data with the latest technologies.</div>
                                <div><strong>Constant innovation</strong> Access the latest artificial intelligence features.</div>
                                
                            
                            </p>
                            
                        </div>
                    </div>
                    <div className="s2_quintaSeccion_container">
                        
                        <div className='textSection altura100 alignVerticalCenter'>
                            <div className='column-60 '>
                                <h1>Cutting Edge Technology for Fault Prediction</h1>
                                <p className='fontSize3 .alignVerticalCenter'>
                                We&apos;ve crafted a solution focused on the development of sophisticated learning algorithms that accumulate experience and knowledge over time. It&apos;s adept at understanding and anticipating the present and future behaviors of all elements and services in the ecosystem. This foresight enables preemptive decision-making, ensuring readiness for any scenario.
                                </p>
                            </div>
                            <div className='column-40 centerContent'>
                                <ActionButton style={{ marginTop: '3rem' }} text='More information' link='/contact' />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="terceraSeccion_Container">
                <div className="s3_header_container">
                    <div className='s3_header_badge'>
                        <ContentTitle text='stories' />
                    </div>
                    <div className='s3_header_title'>
                        <h1>Successful VAAS™© projects and plans we developed</h1>
                    </div>
                </div>
                <div className="s3_content_container">
                    <Image src={ViemyBlog} alt='viemy-blog' width={710} height={529} className='s2_cuartaSeccion_image'/>
                    <h1>VAAS™© success stories</h1>
                    <p>Precise measurements of Energy Consumption</p>
                    <Badge text='VAAS™©' theme='dark'/>
                    <ActionButton text='VIEW MORE PROJECTS' link='/projects' theme='dark' style={{marginTop: '8rem', marginBottom: '8rem'}}/>
                </div>
            </div>
        </Layout>
    )
}
