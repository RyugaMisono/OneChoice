import { Typography, Button } from "@mui/material";
import {Link} from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";
import "./SuccessConsul.css"

function SuccessConsul() {
    return (
        <div>
            <Header />
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