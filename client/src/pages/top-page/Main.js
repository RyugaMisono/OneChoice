import Header from "../../components/Header"
import HeaderSp from "../../components/HeaderSp"
import Footer from "../../components/Footer"
import TopBar from "./TopBar"
import MainContents from "./MainContents"
import React, { useState, useEffect } from "react"

function Main() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },);

    return (
        <div>
            {isSmallScreen ? <HeaderSp /> : <Header />}
            <TopBar />
            <MainContents />
            <Footer />
        </div>
    )
}

export default Main