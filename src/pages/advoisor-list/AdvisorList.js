import { Typography } from "@mui/material"
import AdvisorCard from "./AdvisorCard"
import AdvisorCardSp from "./AdvisorCardSp"
import "../../styles/AdvisorList.css"
import React, { useState, useEffect } from "react"


function AdvisorList() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700)
    const advisors = [
        {
            name: "弥園 立我",
            nameRoma: "Misono Ryuga",
            location: "アメリカ(ワシントン州)",
            duration: "長期(2年間)",
            type: "進学",
            residence: "寮、ホームステイ",
            major: "Computer Science",
            comment: "こんにちは！コミカレ、日本への編入を経験してます。アメリカでの運転免許取得や課外活動など色んな質問に対応できます！",
            career: "経歴\n 2018/3 大阪府立和泉高等学校 グローバル科 卒業\n 2019/1 Seattle Central College 入学\n 2019/9 Bellevue College Associate Arts & Sciences, Computer Science 1年次編入\n 2022/1 Temple University Japan Campus Liberal Arts, General Studies 3年次編入",
            imgUrl: "./img/ryuga.png"
        },
        {
            name: "中濱 颯太",
            nameRoma: "Nakahama Sota",
            location: "アメリカ(ユタ州)",
            duration: "長期(2年間)",
            type: "進学",
            residence: "寮、ホームステイ",
            major: "Mechanical Engineering",
            comment: "高校卒業後の２年のギャップイヤーや奨学金など費用面の相談にも対応できます。また、海外で就職を考えている方のサポートも行えます。",
            career: "経歴\n 2018/3 大阪府立和泉高等学校 グローバル科 卒業\n 2020/1 Southern Utah University 入学\n 2022/5 Southern Utah University Research Assistant, Academic Tutor\n 2023/8 Talos Engineering（ワシントン州） 就職",
            imgUrl: "./img/sota.jpg"
        },
        {
            name: "三輪 丈馬",
            nameRoma: "Miwa Joma",
            location: "オーストラリア(ブリスベン)",
            duration: "短期(10日間)",
            type: "語学留学",
            residence: "ホームステイ",
            major: "Computer Science",
            comment: "私は高校生時代にオーストラリアへの短期留学を経験しています！当時は英語力がない状態での留学でしたが何とか乗り越えることができました！英語力に不安がある方へおすすめの英語学習方法を教えるといったサポートを主に行いたいと思います！",
            career: "経歴\n 2016/8 Craigslea State High School 短期留学\n 2018/3 大阪府立和泉高等学校 グローバル科 卒業\n 2019/4 信州大学 電子情報システム工学科 入学\n 2023/9 信州大学大学院 総合理工学研究科 入学",
            imgUrl: "./img/joma.jpg"
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 700)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },)

    return (
        <div className="bg-advisors">
            <div className="advisor-list">
                <Typography variant="h4" fontWeight="bold" className="advisor-title">
                    Advisor一覧
                </Typography>
                <div className="advisor-cards">
                    {advisors.map((advisor, index) => (
                        isSmallScreen ? <AdvisorCardSp key={index} {...advisor} /> : <AdvisorCard key={index} {...advisor}/>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default AdvisorList