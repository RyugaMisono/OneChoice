import { Card, CardContent, Typography, Button } from "@mui/material"
import "../../styles/AboutContents.css"
import { Link } from "react-router-dom"

function AboutContentsSp() {
    return (
        <div className="bg-about">
            <div className="about-contents">
                <Card variant="outlined" sx={{margin: "10px"}}>
                    <CardContent>
                        <Typography variant="h4" fontWeight="bold" className="about-title">
                            OneChoiceとは
                        </Typography>
                        <Typography variant="h5" className="about-sub-title">
                            Mission
                        </Typography>
                        <Typography variant="h5" className="about-goal-text">
                            <span className="under-line">海外進学を選択肢の一つへ</span>
                        </Typography>
                        <Typography fontSize="16px" className="about-text">
                            日本の高校生は卒業後、大学進学や企業への就職を行うことが一般的です。<br></br>
                            しかしその他に、<span className="under-line">海外進学</span>という選択肢も存在します。<br></br>
                            昨今、海外進学を選択する学生が増えている状況ではありますが、
                            まだまだ一般的な選択肢とは言えないでしょう。<br></br>
                            OneChoiceでは、海外進学を含む様々な選択肢についてサポートを提供し、皆様の<span className="under-line">視野を広げる</span>ことを目的としています。
                        </Typography>
                        <Typography variant="h5" className="about-sub-title">
                            Member
                        </Typography>
                        <Typography fontSize="16px" className="about-text">
                            OneChoiceは、日本国内外で<span className="under-line">経験豊富な専門家や留学経験者</span>からなるチームで構成されています。<br></br>
                            皆様を実際にサポートするアドバイザーの詳細については<Link to="/advisor">こちらのページ</Link>をご参照ください。<br></br>
                        </Typography>
                        <Typography variant="h5" className="about-sub-title">
                            How-to
                        </Typography>
                        <Typography fontSize="18px" className="about-how-title">
                            STEP1 プロフィールを入力
                        </Typography>
                        <Typography fontSize="16px" className="about-how-text">
                            <Link to="/start">こちらのページ</Link>から、あなたの希望の留学先や留学方法、疑問点や質問内容などをご記入ください。
                        </Typography>
                        <Typography fontSize="18px" className="about-how-title">
                            STEP2 アドバイザーを決める
                        </Typography>
                        <Typography fontSize="16px" className="about-how-text">
                            入力内容を基に、あなたに適したアドバイザーを複数名提案します。<br></br>
                            各アドバイザーのプロフィールを読み、あなたが相談したい相手をお選びください。
                        </Typography>
                        <Typography fontSize="18px" className="about-how-title">
                            STEP3 実際に相談する
                        </Typography>
                        <Typography fontSize="16px" className="about-how-text">
                        気になることや不安なこと、分からないことなど何でもお尋ねください！<br></br>
                        経験豊富なアドバイザーがあなたをサポートします！
                        </Typography>
                        <Link to="/start">
                            <div className="about-button">
                                <Button variant="contained" disableElevation size="large" sx={{width: 200}}>相談を始める(無料)</Button>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    )
}

export default AboutContentsSp