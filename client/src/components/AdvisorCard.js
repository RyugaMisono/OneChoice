import { Card, CardContent, Typography } from "@mui/material"
import "./AdvisorCard.css"

function AdvisorCard({ name, nameRoma, location, duration, type, residence, major, comment }) {
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
                                {comment}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdvisorCard