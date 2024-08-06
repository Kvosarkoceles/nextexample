import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './MLEATT.css'
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
                            Obsolescence Mitigation Case
                        </h1><br/><br/>
                        <p className='headerText gold '>Industry</p>
                        <p className='headerText lightTx'>Telecommunications</p><br/><br/>
                        <p className='headerText gold'>Services</p>
                        <p className='headerText lightTx'>Machine Life Extended™</p>
                    </div>
                    <div className="width-50 padding-sides-4">
                        {/* <h5>Maximize the Performance of Your Technology with Our Specialized Support</h5> */}
                        <h1 className='headerTitle lightTx'>
                            Our customer offers not only a technical communication solution, but everything that hides behind it: The importance of people staying in touch.
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
                            Mobile telephony, mobile internet, mobile broadband services, etc.<br /><br />

                            <strong>The Problem</strong>:<br />
                            The risk of facing the physical components obsolescence due to the company’s technological growth.<br /><br />

                            <strong>Our Solution</strong>:<br />
                            Provide MORE useful life to legacy equipment through a comprehensive support and assistance service.<br /><br />
                        </p>
                    </div>
                    <div className="right-column">
                        <p className='text-normal'>
                            <strong className='text-resalted'>Optimizing equipment performance to help customers stay connected.</strong><br /><br />

                            Our customer was becoming a victim of its own growth when facing a heterogeneous, complex ecosystem full of manufacturers and converging technologies. Without a doubt, this could become chaotic.<br /><br />

                            This company makes communication more convenient, allowing its millions of customers to stay in touch easily, whether in social or business settings. Something that is vital today for people and companies.<br /><br />

                            However, its own technological evolution became a great challenge. The time was approaching to admit the end of the useful life of its installed technology... and, therefore, spend millions to renew physical and logical equipment.<br /><br />
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
                        “A global company dedicated to communicate millions of people could not afford to fall behind, provoking disappointment among its customers and losing their loyalty.”
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
                            We deployed our Machine Life Extended™ solution. We began by carrying out a series of audits to fully understand the problem.
                        </p><br /><br />
                        <p className='text-normal'>
                            Subsequently, we executed proactive support, preventive maintenance and corrective support of the installed logical and physical devices.
                        </p><br /><br />
                        <p className='text-normal'>
                            The goal of these actions is to maximize the useful life of the acquired equipment, thus breaking the myth that obsolete equipment can no longer provide more.
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
                        <p className='text-normal lightTx'>
                            For 8 years it has been possible to extend the useful life of more than 10,000 pieces of equipment, thereby avoiding the investment to renew technology.
                        </p>
                    </div>
                </div>
            </div>
            <div className="principalContainer darkBg lightTx fit-content">
                <div className="generalContainer fit-content display-row">
                    <div className="width-50 padding-sides-2">
                        <div className="numberComponentOne lightTx">
                            <div className="data">
                                <div className="amount">+25M USD</div>                                                                
                            </div>
                            <div className="description">
                                <div className="principal"> <strong>OPEX Annual Savings </strong></div>
                                
                            </div>

                            <div className="third">for maintenance contracts with manufacturer by extension of useful life of equipment</div>
                        </div>
                    </div>
                    <div className="width-50 padding-sides-2">
                        <div className="componentStandar rounded-full lightTx">
                            <div className="primary">+7 years of life and +8M USD saved</div>
                            <div className="second">3,000 Devices</div>
                            <div className="third">nortel | nec | tellabs | radwin | veraz | alu | corian</div>
                        </div>
                    </div>
                </div>
                <div className="generalContainer fit-content display-row flexwrap centerContent">
                    <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">+7 years of life and +8M USD saved</div>
                        <div className="second">2,000 Devices</div>
                        <div className="third">Huawei</div>
                    </div>
                    <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">+4 years of life and +4M USD saved</div>
                        <div className="second">550 Servers</div>
                        <div className="third">HP / DELL</div>
                    </div>
                    <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">+5 years of life and +1M USD saved</div>
                        <div className="second">250 Servers</div>
                        <div className="third">Oracle</div>
                    </div>
                    <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">+7 years of life and +4M USD saved</div>
                        <div className="second">1,200 Devices</div>
                        <div className="third">MW Ceragon</div>
                    </div>
                    <div className="componentStandar rounded-10px border-3px width400px padding-sides-1 lightTx margin1rem">
                        <div className="primary">+4 years of life and +5M USD saved</div>
                        <div className="second">3,000 Switches</div>
                        <div className="third">Cisco</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
