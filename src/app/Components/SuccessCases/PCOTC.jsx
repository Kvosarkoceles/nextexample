import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './PCOTC.css'
import { ActionButton } from '../Shared/ActionButton/ActionButton'
import { ContentTitle } from '../Shared/ContentTitle/ContentTitle'
import { Badge } from '../Shared/Badge/Badge'
import { Image as ImageAntd } from 'antd';



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
                        <h1 className='title-big fit-content lightTx'>
                        Profitable CAPEX and OPEX in Telephony Case
                        </h1><br/><br/>
                        <p className='headerText gold '>Industry</p>
                        <p className='headerText lightTx'>Telecommunications</p><br/><br/>
                        <p className='headerText gold'>Services</p>
                        <p className='headerText lightTx'>Support</p>
                    </div>
                    <div className="width-50 padding-sides-4">
                        {/* <h5>Maximize the Performance of Your Technology with Our Specialized Support</h5> */}
                        <h1 className='headerTitle lightTx'>Improving connectivity in developing
                        regions supports economic growth.
                        </h1>
                    </div>
                </div>
            </div>
            {/* <div className="principalContainer width-100 height-100 padding-tops-0 top-10neg">
                <ImageAntd preview={false} src='/assets/img/mleatt1_optimized.jpg'></ImageAntd>
            </div> */}
            <div className="space-5 lightBg"></div>
            <div className="principalContainer fit-content lightBg">
                <h1 className='title-badge-orange'>About the Customer</h1>
                <div className="generalContainer display-row">
                    <div className="left-column padding-right-4">
                        <p className='text-resalted'>
                            <strong>Main Services</strong>:<br />
                            Mobile and landline telephony, satellite television, broadband, IPTV and cable television.
                            <br /><br />

                            <strong>The Problem</strong>:<br />
                            Need to provide operational continuity to the 4G mobile network.
                           <br /><br />

                            <strong>Our Solution</strong>:<br />
                            Specialized technical support to extend the lifespan of physical and logical components that were about to reach their EoL/EoS.
                            <br /><br />
                        </p>
                    </div>
                    <div className="right-column">
                        <p className='text-normal'>
                            <strong className='text-resalted'>Focusing on customer satisfaction and technological advancement has been the key to achieving a strong positioning among companies in the sector in Central and South America.</strong><br /><br />

                            Our client is a pioneering giant in Central America telecommunications that quickly established itself as a key player in the industry. This company began to stand out for its commitment to providing innovative and reliable mobile communication services. Over the years, it has expanded its range of services to include mobile telephony, data, and Internet, catering to a diverse customer base.<br /><br />

                            Shrewdly, the company introduced competitive prices and played a crucial role in democratizing access to mobile communications. It has been essential in driving the adoption of advanced technologies, contributing to the region’s digital transformation.<br /><br />

                            As the demand for high-speed internet and reliable mobile services increased, our client faced significant challenges in maintaining the operational continuity of its 4G mobile network. It needed to find solutions for issues such as network congestion, technological obsolescence, and rising consumer expectations.<br /><br />
                        </p>
                    </div>
                </div>

            </div>

            <div className="generalContainer">
                <div className="commentComponent">
                    <div className="icon">
                        <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55 0C40 1.6 34.2 9.40001 34.2 22.8V51.6H59.8V23.2H48V20.6C48 14 52.4 12.6 59.6 11.8L55 0ZM20.8 0C5.8 1.6 0 9.40001 0 22.8V51.6H25.6V23.2H13.8V20.6C13.8 14 18.2 12.6 25.4 11.8L20.8 0Z" fill="#9F8F7F" />
                        </svg>

                    </div>
                    <div className="comment">
                    “An initially favorable impact on Information and Communication Technologies in Central America could not be ignored. Little by little, a valuable business opportunity was discovered in the region.”
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
                        <h1 className='title-badge-orange'>What we did</h1>
                    </div>
                    <div className="right-column">
                        <p className='text-normal'>
                        To overcome these challenges, we implemented a series of strategic initiatives aimed at strengthening their 4G network infrastructure. The situation required technological upgrades to improve capacity and performance, so we established a dedicated team to monitor the network 24/7. These efforts resulted in a more resilient and reliable network, ensuring the satisfaction of their customers&apos; needs and maintaining their competitive advantage.
                        </p>                        
                    </div>
                </div>
            </div>
            <div className="principalContainer darkBg lightTx fit-content">
                <h1 className='title-badge-orange'>In numbers</h1>
                <div className="generalContainer fit-content display-row">
                    <div className="left-column fit-content display-column">
                        <h1 className='title-big lightTx'>These are our customer´s benefits!</h1>
                        <ActionButton text='Let´s Create' link='/contact' theme='dark' style={{ marginTop: '5rem' }} />
                    </div>
                    <div className="right-column fit-content">
                        <ul className='text-normal lightTx'>
                            <li>
                            Investment preservation in technology.
                            </li><br />
                            <li>Extended OSS lifespan.</li><br />
                            <li>
                            Greater efficiency in monthly support cost.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="principalContainer darkBg lightTx fit-content">             
                <div className="generalContainer fit-content display-row flexwrap centerContent">                 
                                    
                    <div className="componentStandar rounded-full border-3px width400px padding-sides-2 lightTx margin1rem">
                        <div className="primary">+5M USD</div>
                        <div className="second">OPEX/CAPEX Annual Savings</div>                       
                    </div>
                    <div className="componentStandar rounded-full border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">+1,700</div>
                        <div className="second">Core & Access Node Operation</div>                     
                    </div>
                    <div className="componentStandar rounded-full border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">100% Remote Operations</div>
                        <div className="second">L2, L3</div>                        
                    </div>
                    <div className="componentStandar rounded-full border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary"> &gt;99%</div>
                        <div className="second">OSS HA</div>                       
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}
