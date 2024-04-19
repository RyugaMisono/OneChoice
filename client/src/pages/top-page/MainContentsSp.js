import "../../styles/MainContents.css"
import "../../styles/MainContentsSp.css"
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function MainContentsSp() {
    return (
        <div className="bg-main">
            <div className="main-contents-sp">
                <div className="smartphone-img-sp"></div>
                <div className="top-text-sp">
                        <Typography variant="h4" fontWeight="bold">OneChoiceとは？</Typography>
                        <br></br>
                        <Typography variant="p" className="top-p-text">
                            海外進学に興味のある学生に対して<br></br>
                            実際にその道を歩んだ先輩によるサポートを提供しています。<br></br>
                            <br></br>
                            あなたの状況に合ったアドバイザーからサポートを受け<br></br>
                            海外進学を現実的な選択肢の一つにしましょう！
                        </Typography>
                        <br></br>
                        <br></br>
                        <Link to="about">
                            <Button variant="contained" disableElevation size="large" sx={{width: 200}} className="main-text-button-sp">もっとくわしく</Button>
                        </Link>
                    </div>
            </div>
            aaa
        </div>
    )
}

export default MainContentsSp