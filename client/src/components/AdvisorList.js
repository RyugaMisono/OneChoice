import { Card, CardContent, Typography } from "@mui/material"
import AdvisorCard from "./AdvisorCard"

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
            comment: "こんにちは！コミカレ、日本への編入を経験してます。アメリカでの免許取得や課外活動などいろんな質問に対応できます！"
        },
        {
            name: "三輪 丈馬",
            nameRoma: "Miwa Joma",
            location: "オーストラリア(ブリスベン)",
            duration: "短期(10日間)",
            type: "語学留学",
            residence: "ホームステイ",
            major: "Computer Science",
            comment: "私は高校生時代にオーストラリアへの短期留学を経験しています！当時は英語力がない状態での留学でしたが何とか乗り越えることができました！英語学習の方法などサポートできます！"
        },
        {
            name: "留学 太郎",
            nameRoma: "Ryugaku Taro",
            location: "アメリカ(シアトル)",
            duration: "長期(2年間)",
            type: "進学",
            residence: "ホームステイ",
            major: "何か",
            comment: "良い感じのコメント"
        }
    ]

    return (
        <div className="advisor-list">
            <Typography variant="h4" fontWeight="bold" className="advisor-title">
                Advisor一覧
            </Typography>
            {advisors.map((advisor, index) => (
                <AdvisorCard key={index} {...advisor} />
            ))}
        </div>
    )
}

export default AdvisorList