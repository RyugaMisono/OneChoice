import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HeaderSp from "../../components/HeaderSp"
import AboutContents from "./AboutContents"
import React, { useState, useEffect } from "react"


function About() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },)
        
    
    return (
        <div>
            {isSmallScreen ? <HeaderSp /> : <Header />}
            <AboutContents />
            <Footer />
        </div>
    )
}

export default About