import React, { useRef, useEffect, useState } from "react";
import "./BlogComponent.css";

export const BlogComponent = (props) => {

    const { product } = props;
    const { random } = props;
    const { darkMode } = props;
    const [filteredArraySuccesCases, setFilteredArraySuccessCases] = useState([])
    

    const blogEntries = [
        {
            image_url: "/assets/img/vicentMolina.jpg",
            title: "Interview with Vicent Molina",
            subtitle: "Javier Madero, Editorial Director of Voices of Leaders, Newsweek Special Report Representatives. Mexico City, Mexico.",
            category: "Blog",
            blog_url: "/blog/vicent-molina",
            date:"2024-06-01",
            active: true,
            showInHome: true,
        }
    ];

    // const filteredSuccesCases = () => {
    //     if(random){
    //         let randomNumberOne = Math.floor(Math.random() * (successCases.length -1))
    //         let randomNumberTwo = Math.floor(Math.random() * (successCases.length - 1))
    //         while(randomNumberOne == randomNumberTwo){
    //             randomNumberTwo = Math.floor(Math.random() * (successCases.length - 1))
    //         }
    //         let successCasesRandom = [];
    //         successCasesRandom.push(successCases[randomNumberOne])
    //         successCasesRandom.push(successCases[randomNumberTwo])
    //         console.log("random1",randomNumberOne)
    //         console.log("random2",randomNumberTwo)
    //         setFilteredArraySuccessCases(successCasesRandom)
    //     }
    //     else{
    //         if(product != undefined && product != null){
    //             if(product === 'all'){
    //                 setFilteredArraySuccessCases(successCases);
    //             }
    //             else if(product === "home"){
    //                 setFilteredArraySuccessCases(successCases.filter(x => x.showInHome === true))
    //             }
    //             else{
    //                 setFilteredArraySuccessCases(successCases.filter(x => x.productId === product))
    //             }
    //         }
    //         else{
    //             setFilteredArraySuccessCases(successCases);
    //         }
    //     } 
    // }

    // useEffect(() => {
    //     filteredSuccesCases()
    // },[]);

    return (
        <>

            <div className="blogEntriesContainer">
                {
                    blogEntries.map((blog, index) => {
                        return <a href={blog.blog_url} className={'blogItem' + (darkMode? ' dark':'')} key={index}>
                                    <div className="imgContainer">
                                        <div className="image"><img src={blog.image_url}></img></div>
                                    </div>
                                    <div className="dataContainer">
                                        <div className="titleSubtitle">
                                            <div className={'title' + (darkMode? ' dark':'')}>{blog.title}</div>
                                            <div className={'subtitle' + (darkMode? ' dark':'')}>{blog.subtitle}</div>
                                        </div>
                                        <div className="info">
                                            <div className={'category' + (darkMode? ' dark':'')}>{blog.category}</div>
                                            <div className={'date' + (darkMode? ' dark':'')}></div>
                                        </div>
                                    </div>
                                </a>
                    })
                }
            </div>
        </>
    );
};
