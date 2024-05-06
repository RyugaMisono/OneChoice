import { Card, CardContent, Typography, Button } from "@mui/material"
import "../../styles/AdvisorCardSp.css"
import { useState } from "react"

function AdvisorCardSp({ name, nameRoma, location, duration, type, residence, major, comment , career, imgUrl}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="advisor-card-sp">
            <Card variant="outlined">
                <CardContent>
                    <div className="profile-img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
                    <div className="advisor-profile-sp">
                        <Typography variant="h5" sx={{ marginBottom: "8px" , marginTop: "6px"}}>
                            {name} ({nameRoma})
                        </Typography>
                        <Typography fontSize="18px">
                            留学先：{location}<br />
                            期間：{duration}<br />
                            種類：{type}<br />
                            住居：{residence}<br />
                            専攻：{major}<br />
                        </Typography>
                        <Typography fontSize="16px" sx={{ marginTop: "6px" }}>
                            コメント<br />
                            {expanded ? comment : comment.slice(0, 84)}
                        </Typography>
                        <Typography fontSize="16px" sx={{ marginTop: "6px" }}>
                        </Typography>
                    </div>
                    <Typography fontSize="16px" className="career-sp">
                        {expanded && career.split('\n').map((line, index) => <div key={index}>{line}</div>)}
                    </Typography>
                    <div className="more-button">
                        <Button onClick={() => setExpanded(!expanded)}>{expanded ? "閉じる" : "もっと見る"}</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdvisorCardSp