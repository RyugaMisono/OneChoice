import { Button, Typography } from "@mui/material"
import "./MainContents.css"

function MainContents() {
    return (
        <div className="main-contents">
            <div className="flex">
                <div className="smartphone-img"></div>
                <div className="top-text">
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
                    <br></br>
                    <Button variant="contained" disableElevation size="large" sx={{width: 200}} className="main-text-button">もっとくわしく</Button>
                </div>
            </div>
            <div className="how-to">
                <Typography variant="h4" fontWeight="bold" className="how-to-text">利用の流れ</Typography>
                <div className="how-to-img"></div>
                <div className="flex-text">
                    <span className="each-text">
                    <Typography variant="h6" fontWeight="bold">プロフィールを入力</Typography>
                    <Typography variant="p" className="top-p-text">
                        あなたのプロフィールや興味のある留学形式について入力しましょう！
                        自分に正直に、まずはあなたの理想を教えてください！</Typography>
                    </span>
                    <span className="each-text">
                    <Typography variant="h6" fontWeight="bold">アドバイザーを選択</Typography>
                    <Typography variant="p" className="top-p-text">
                        入力した内容をもとに、アドバイザーを複数人提案します。
                        各アドバイザーのプロフィールを読み、相談したい相手を選択してください！</Typography>
                    </span>
                    <span className="each-text">
                    <Typography variant="h6" fontWeight="bold">実際に相談する</Typography>
                    <Typography variant="p" className="top-p-text">
                        気になることや不安なこと、分からないことなど何でもお尋ねください！
                        経験豊富なアドバイザーがあなたをサポートします！</Typography>
                    </span>
                </div>
                <Button variant="contained" disableElevation size="large" sx={{width: 200}} className="bottom-button">相談を始める(無料)</Button>
            </div>
        </div>
    )
}

export default MainContents