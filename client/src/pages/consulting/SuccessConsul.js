import { Typography, Button } from "@mui/material"
import {Link} from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HeaderSp from "../../components/HeaderSp"
import "../../styles/SuccessConsul.css"
import { useState, useEffect } from "react"

function SuccessConsul() {
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
            <div className="success-text">
                <Typography variant="h5" fontWeight="bold">
                    相談内容を送信しました。
                </Typography>
                <Typography sx={{marginTop:"24px"}}>
                    後日、担当者よりメールにてご案内を送信いたしますので、ご確認いただけますようお願いいたします。
                </Typography>
            </div>
            <div className="to-home-button">
                <Link to="/">
                    <Button variant="contained" disableElevation sx={{width: 200}}>ホームへ戻る</Button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default SuccessConsul