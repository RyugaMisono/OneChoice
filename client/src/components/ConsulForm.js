import { Card, CardContent, TextField, Typography, Button } from "@mui/material"
import "./ConsulForm.css"

function ConsulForm() {
    return (
        <div className="consul-form">
            <Typography variant="h4" fontWeight="bold" className="consul-title">留学相談を始める</Typography>
            <div className="card-form">
                <Card variant="outlined">
                    <CardContent>
                        <Typography>
                            入力内容を参考にあなたに最適なアドバイザーを選定いたします。<br></br>
                            まずはご自身の気持ちに正直に、現時点での希望を記入していただければと思います。<br></br>
                            なお、不明な点や未定の項目はその旨をご記載いただけると幸いです。
                        </Typography>
                        <br></br>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">名前</Typography>
                                <Typography fontSize="14px" color="gray">(ニックネーム可)</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="留学太郎"
                            className="textfield"></TextField>
                        </div>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">メールアドレス</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="ryugaku@example.com"
                            className="textfield"></TextField>
                        </div>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">留学先</Typography>
                                <Typography fontSize="14px" color="gray">(国、地域など)</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="アメリカ、シアトル"
                            className="textfield"></TextField>
                        </div>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">留学の期間</Typography>
                                <Typography fontSize="14px" color="gray">(〇年間、長期・短期など)</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="4年間"
                            className="textfield"></TextField>
                        </div>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">留学のタイプ</Typography>
                                <Typography fontSize="14px" color="gray">(勉学、スポーツなど)</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="大学進学"
                            className="textfield"></TextField>
                        </div>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">留学の期間</Typography>
                                <Typography fontSize="14px" color="gray">(〇年間、長期・短期など)</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="4年間"
                            className="textfield"></TextField>
                        </div>
                        <div className="flex-form">
                            <div>
                                <Typography fontSize="16px" fontWeight="bold">不安点や疑問点、質問事項など</Typography>
                                <Typography fontSize="14px" color="gray">(何でもお気軽に書いてください！)</Typography>
                            </div>
                            <TextField 
                            variant="outlined" 
                            fullWidth 
                            sx={{maxWidth: "400px"}} 
                            size="small"
                            placeholder="〇〇はどうしたらいいですか？"
                            className="textfield"
                            multiline
                            minRows="10"></TextField>
                        </div>
                        <div className="form-button">
                            <Button variant="contained" disableElevation sx={{width: "200px"}}>送信する</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ConsulForm