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
                        実際にその道を歩んだ先輩による<br></br>
                        サポートを提供しています。<br></br>
                        <br></br>
                        あなたの状況に合った<br></br>
                        アドバイザーからサポートを受け<br></br>
                        海外進学を現実的な選択肢の一つにしましょう！
                    </Typography>
                    <br></br>
                    <br></br>
                    <Link to="about">
                        <Button variant="contained" disableElevation size="large" sx={{width: 200}} className="main-text-button-sp">もっとくわしく</Button>
                    </Link>
                </div>
                <div className="how-to-sp">
                    <Typography variant="h4" fontWeight="bold" className="how-to-text-sp">利用の流れ</Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{marginTop: 2}}>①プロフィールを入力</Typography>
                    <div className="p-text-sp">
                        <Typography variant="p">
                            あなたのプロフィールや興味のある留学形式について入力しましょう！<br></br>
                            自分に正直に、まずはあなたの理想を教えてください！
                        </Typography>
                    </div>
                    <Typography variant="h6" fontWeight="bold" sx={{marginTop: 2}}>②アドバイザーを選択</Typography>
                    <div className="p-text-sp">
                        <Typography variant="p">
                            入力した内容をもとに、アドバイザーを複数人提案します。<br></br>
                            各アドバイザーのプロフィールを読み、相談したい相手を選択してください！
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" sx={{marginTop: 2}}>③実際に相談する</Typography>
                    </div>
                    <div className="p-text-sp">
                        <Typography variant="p">
                            気になることや不安なこと、分からないことなど何でもお尋ねください！<br></br>
                            経験豊富なアドバイザーがあなたをサポートします！
                        </Typography>
                    </div>
                    <div className="bottom-button">
                        <Link to="start">
                            <Button variant="contained" disableElevation size="large" sx={{width: 200}}>相談を始める(無料)</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContentsSp