import { Card, CardContent, Typography } from "@mui/material"
import AdvisorCard from "./AdvisorCard"
import "./AdvisorList.css"

function AdvisorList() {
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
            career: "経歴\n 2018/3 卒業\n 大阪府立和泉高等学校 グローバル科\n 2019/1 入学\n Seattle Central College\n 2019/9 1年次編入\n Bellevue College Associate Arts & Sciences, Computer Science\n 2022/1 3年次編入\n Temple University Japan Campus Liberal Arts, General Studies"
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
            career: "経歴\n 2016/8 短期留学\n Craigslea State High School\n 2018/3 卒業\n 大阪府立和泉高等学校 グローバル科\n 2019/4 入学\n 信州大学 電子情報システム工学科\n 2023/9 入学\n 信州大学大学院 総合理工学研究科"
        },
        {
            name: "留学 太郎",
            nameRoma: "Ryugaku Taro",
            location: "アメリカ(シアトル)",
            duration: "長期(2年間)",
            type: "進学",
            residence: "ホームステイ",
            major: "何か",
            comment: "良い感じのコメント",
            career: "経歴\n test"
        }
    ]

    return (
        <div className="advisor-list">
            <Typography variant="h4" fontWeight="bold" className="advisor-title">
                Advisor一覧
            </Typography>
            <div className="advisor-cards">
                {advisors.map((advisor, index) => (
                    <AdvisorCard key={index} {...advisor} />
                ))}
            </div>
        </div>
    )
}

export default AdvisorList