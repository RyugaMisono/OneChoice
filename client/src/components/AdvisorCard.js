import { Card, CardContent, Typography, Button } from "@mui/material"
import "./AdvisorCard.css"
import { useState } from "react"

function AdvisorCard({ name, nameRoma, location, duration, type, residence, major, comment , career}) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className="advisor-card">
            <Card variant="outlined">
                <CardContent>
                    <div className="flex">
                        <div className="profile-img"></div>
                        <div className="advisor-profile">
                            <Typography variant="h5" sx={{ marginBottom: "8px" }}>
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
                    </div> 
                    <Typography fontSize="16px" sx={{marginTop: "6px"}}>
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

export default AdvisorCard