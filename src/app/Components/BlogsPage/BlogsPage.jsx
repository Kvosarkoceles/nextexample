import React from 'react'
import { Layout } from '../Shared/Layout/Layout'
import './blogsPage.css'
import { ContentTitle } from '../Shared/ContentTitle/ContentTitle'
import Image from 'next/image'
import blogImg1 from '@/assets/img/blogs-img1.png'
import blogImg2 from '@/assets/img/blogs-img2.png'
import blogImg3 from '@/assets/img/blogs-img3.png'
import blogImg4 from '@/assets/img/blogs-img4.png'
import blogImg5 from '@/assets/img/blogs-img5.png'
import blogImg6 from '@/assets/img/blogs-img6.png'
import blogImg7 from '@/assets/img/blogs-img7.png'
import blogImg8 from '@/assets/img/blogs-img8.png'
import { CircleArrowButton } from '../Shared/CircleArrowButton/CircleArrowButton'
import { Badge } from '../Shared/Badge/Badge'
import { BlogComponent } from '../Shared/BlogComponent/BlogComponent'

export const BlogsPage = () => {

    const blogs = [
        {
            title: "Los datos como un activo",
            categorie: "Data",
            image: blogImg1,
            date: "July 2023",
        },
        {
            title: "Las antiguas ciudades del futuro inteligente",
            categorie: "Intelligence Technology",
            image: blogImg2,
            date: "July 25, 2023",
        },
        {
            title: "Talento: el activo más valioso del mundo",
            categorie: "Organizational Consulting",
            image: blogImg3,
            date: "July 12, 2023",
        },
        {
            title: "Transforma tu centro de operaciones",
            categorie: "Control de Operaciones",
            image: blogImg4,
            date: "July 12, 2023",
        },
        {
            title: "¿Por qué es estratégica la inversión en infraestructura? ",
            categorie: "Infraestructura",
            image: blogImg5,
            date: "August 18, 2022",
        },
        {
            title: "Un caso de telecomunicaciones bajo cero",
            categorie: "Telecomunicaciones",
            image: blogImg6,
            date: "August 17, 2022",
        },
        {
            title: "Experiencia comprobada en mantenimiento preventivo",
            categorie: "Machine Life Extended",
            image: blogImg7,
            date: "August 16, 2022",
        },
        {
            title: "T7 International Group®, el creador de la mejor IA para el sector bancario",
            categorie: "Bank",
            image: blogImg8,
            date: "August 15, 2022",
        },
    ]

    return (
        <Layout posicion={"blogs"}>
            <div className="blogs_mainContainer">
                <div className="headerCOntainer">
                    <video autoPlay muted loop playsInline className="video-background">
                        <source src="https://d2qm0sabnuthoi.cloudfront.net/videos/web/2403023_Abstract_Background_Light_1920x1080_1.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <div className="blogs_primeraSeccion">
                        <div className="blogs_s1_titleContainer">
                            <h1>Sharing is caring so we make time to write about our experience</h1>
                        </div>
                        {/* <div className="blogs_s1_filterContainer">
                            <div className='filter_itemContainer'>
                                <h2>All</h2>
                                <ContentTitle text='15' />
                            </div>
                        </div> */}
                    </div>
                </div>
                
{/*                 
                <div className="blogs_segundaSeccion">
                    {
                        blogs.map((item, index) => {
                            return (
                                <div key={index+1} className="s2_blogContainer">
                                    <div className='s2_blogImageContainer'>
                                        <Image src={item.image} alt='blog1' className='img_blog'/>
                                    </div>
                                    <div className="s2_blogInfoContainer">
                                        <h1>{item.title}</h1>
                                        <div className="s2_blogInfo_badges">
                                            <Badge text={item.categorie} />
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='s2_blogButtonContainer'>
                                        <CircleArrowButton theme='light' height={80} width={80} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div> */}
            </div>
            <div className="blogListContainer">
                <BlogComponent/>
            </div>
        </Layout>
    )
}
