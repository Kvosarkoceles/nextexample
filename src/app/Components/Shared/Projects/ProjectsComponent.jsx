import React, { useRef, useEffect, useState } from "react";
import "./ProjectComponent.css";

export const Projects = (props) => {

    const { product } = props;
    const { random } = props;
    const { darkMode } = props;
    const [filteredArraySuccesCases, setFilteredArraySuccessCases] = useState([])
    

    const successCases = [
        {
            image_url: "/assets/img/viemysce.png",
            title: "Optimized Operations Success",
            subtitle: "Incorporating the operational knowledge of a mobile network into a virtual intelligent assistant.",
            product: "VIGIA Assistance",
            product_url: "/projects/viemy",
            productId: "viemy",
            active: true,
            showInHome: true,
        },
        {
            image_url: "/assets/img/mleatt2_optimized.jpg",
            title: "Obsolescence Mitigation Case",
            subtitle: "Extending the life of legacy hardware and software is possible. Our support service makes it happen.",
            product: "Support",
            productId: "mle",
            product_url: "/success-case/obsolescence-mitigation-case",
            active: true,
            showInHome: true
        },
        {
            image_url: "/assets/img/vbus_airbus.jpg",
            title: "National Security Case",
            subtitle: "Shielding and keeping a nation’s communication 100% operational is an essential matter.",
            product: "VIGIA Observability",
            productId: "vbus",
            product_url: "/success-case/national-security-case",
            active: true,
            showInHome: true
        }, {
            image_url: "/assets/img/viot-sussescase.jpg",
            title: "Decrease in Energy Consumption Case",
            subtitle: "Quantifying real electricity consumption and controlling billing resulted in significant savings.",
            product: "VIGIA Telemetry",
            productId: "VIoT²™",
            product_url: "/success-case/viot",
            active: true,
            showInHome: true
        },{
            image_url: "/assets/img/vass-sussescase.jpeg",
            title: "LTE and 5G Network Predictions",
            subtitle: "An accurate KPI prediction to improve LTE and 5G network performance.",
            product: "VIGIA Prediction",
            productId: "VAAS™",
            product_url: "/success-case/LTE-and-5G-network-predictions",
            active: true,
            showInHome: true
        },
        {
            image_url: "/assets/img/MCUCMN.jpeg",
            title: "Mission Critical Use Case in Military Networks",
            subtitle: "Comprehensive solutions to secure and support national technology infrastructure.",
            product: "Support",
            productId: "MLE™",
            product_url: "success-case/mission-critical-use-case-in-military-networks",
            active: true,
            showInHome: true
        },
        {
            image_url: "/assets/img/PCOTC.jpeg",
            title: "Profitable CAPEX and OPEX in Telephony Case",
            subtitle: "Establishing strategic alliances with technology leaders guarantees access to cutting-edge solutions.",
            product: "Support",
            productId: "MLE™",
            product_url: "success-case/profitable-capex-and-opex-in-telephony-case",
            active: true,
            showInHome: true
        }
        
    ];

    const filteredSuccesCases = () => {
        if(random){
            let randomNumberOne = Math.floor(Math.random() * (successCases.length -1))
            let randomNumberTwo = Math.floor(Math.random() * (successCases.length - 1))
            while(randomNumberOne == randomNumberTwo){
                randomNumberTwo = Math.floor(Math.random() * (successCases.length - 1))
            }
            let successCasesRandom = [];
            successCasesRandom.push(successCases[randomNumberOne])
            successCasesRandom.push(successCases[randomNumberTwo])
            console.log("random1",randomNumberOne)
            console.log("random2",randomNumberTwo)
            setFilteredArraySuccessCases(successCasesRandom)
        }
        else{
            if(product != undefined && product != null){
                if(product === 'all'){
                    setFilteredArraySuccessCases(successCases);
                }
                else if(product === "home"){
                    setFilteredArraySuccessCases(successCases.filter(x => x.showInHome === true))
                }
                else{
                    setFilteredArraySuccessCases(successCases.filter(x => x.productId === product))
                }
            }
            else{
                setFilteredArraySuccessCases(successCases);
            }
        } 
    }

    useEffect(() => {
        filteredSuccesCases()
    },[]);

    return (
        <>

            <div className="productsContainer">
                {
                    filteredArraySuccesCases.map((producto, index) => {
                        return <a href={producto.product_url} className={'productItem' + (darkMode? ' dark':'')} key={index}>
                                    <div className="image"><img src={producto.image_url}></img></div>
                                    <div className={'title' + (darkMode? ' dark':'')}>{producto.title}</div>
                                    <div className={'subtitle' + (darkMode? ' dark':'')}>{producto.subtitle}</div>
                                    <div className={'productBadge' + (darkMode? ' dark':'')}>{producto.product}</div>
                                </a>
                    })
                }
            </div>
        </>
    );
};
