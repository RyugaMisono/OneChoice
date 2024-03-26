import "./MainText.css"
import {Button} from "@mui/material"

function MainText() {
    return (
        <div className="main-contents">
            <h1>OneChoice</h1>
            <p className="body">多くの日本人は高校卒業後に大学進学か就職を選択しますが、その他にも『海外進学』という魅力的な選択肢が存在します。
                OneChoiceでは海外進学に興味がある皆さんが、実際にその道を歩んだ先輩たちに相談できるプラットフォームを提供しています。
                あなたの興味がある国や地域、留学形式に合ったアドバイザーからサポートを受けることで『海外進学』を現実的な選択肢の一つにしましょう！
            </p>
            <h1>利用方法</h1>
            <p className="body">利用方法は非常に簡単です！
                下記のボタンから相談フォームに進み、あなたの簡単なプロフィールや興味のある国や地域、留学形式などを入力してください。
                フォームの送信が完了すると、入力した内容からあなたに適したアドバイザーを紹介いたします。
                経験豊富なアドバイザーに疑問点や不安点を相談することで、『海外進学』を現実的な選択肢の一つにしましょう！
            </p>
            <Button>相談を始める</Button>
        </div>
    )
}

export default MainText