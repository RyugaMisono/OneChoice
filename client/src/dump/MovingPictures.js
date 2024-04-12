import "./MovingPictures.css"
import {Card, CardContent, Typography, Button} from "@mui/material"
import 'swiper/css'

function MovingPictures() {
    return (
        <div className="movingPictures">
            <div>
            </div>
            <div className="centeredCard">
                <Card sx={{ maxWidth: 640, maxHeight: 320}}>
                    <CardContent>
                        <Typography variant="h3" component="div" fontWeight="bold" textAlign="center">
                            海外進学を一つの選択肢に
                        </Typography>
                        <Typography variant="subtitle1">
                            海外進学や留学に興味があーだこーだ。不安がありますよね？あーだこーだ
                            <br></br>
                            お金とか英語力とかなんとかかんとかあーだこーだ
                            実際に海外進学を経験した先輩に相談してみませんか？
                        </Typography>
                        <div className="consulButton">
                            <Button variant="contained" size="large">相談を始める</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default MovingPictures