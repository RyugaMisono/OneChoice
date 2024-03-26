import React, {useEffect, useState} from "react"
import "./TopMessage.css";

function TopMessage() {
    const [isVisibleFirstLine, setIsVisibleFirstLine] = useState(false)
    const [isVisibleSecondLine, setIsVisibleSecondLine] = useState(false)
    const [isVisibleBackground, setIsVisibleBackground] = useState(false)

    useEffect(() => {
        setIsVisibleBackground(true)
        setTimeout(() => {
            setIsVisibleFirstLine(true)
            setTimeout(() => {
                setIsVisibleSecondLine(true)
            }, 800)//一行目がフェードインした700ms後に2行目がフェードイン
        }, 1300) //背景がフェードインした1000ms後に1行目がフェードイン
    }, [])

    return (
        <div className="top-message">
            {isVisibleBackground && (
                <div className={isVisibleBackground ? "background-fade-in" : ""}></div>
            )}
            {/* isVisibleSecondLineがtrueの時のみ文字を表示 */}
            {isVisibleFirstLine && <p className="first-text-fade-in">海外進学を</p>}
            {isVisibleSecondLine && <p className="second-text-fade-in">選択肢の一つに</p>}
        </div>
    )
}

export default TopMessage