import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HeaderSp from "../../components/HeaderSp"
import ConsulForm from "./ConsulForm"
import React, { useState, useEffect } from "react"

function StartAdvice() {
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
            <ConsulForm />
            <Footer />
        </div>
    )
}

export default StartAdvice