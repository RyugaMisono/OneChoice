import { Card, CardContent, TextField, Typography, Button } from "@mui/material"
import "../../styles/ConsulForm.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../../firebase"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function ConsulForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        duration: "",
        category: "",
        question: ""
    })

    // POST成功後に画面遷移するためのオブジェクト
    const navigate = useNavigate()

    // userデータの追加
    async function handlePush() {
        if (formData.name !== "" && formData.email !== "") {
            await addDoc(collection(db, 'profile'), {
                name: formData.name,
                email: formData.email,
                country: formData.country,
                duration: formData.duration,
                category: formData.category,
                question: formData.question,
                timestamp: serverTimestamp(),
            })
            navigate("/success")
        }
    }

    return (
        <div className="bg-consul">
            <div className="consul-form">
                <Typography variant="h4" fontWeight="bold" className="consul-title">留学相談を始める</Typography>
                <div className="card-form">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography>
                                入力内容を参考に最適なアドバイザーを選定いたします。<br></br>
                                まずはご自身の気持ちに正直に、現時点での希望を記入していただければと思います。<br></br>
                                なお、不明な点や未定の項目はその旨をご記載いただけると幸いです。<br></br>
                                (* が付いている項目は入力必須)
                            </Typography>
                            <br></br>
                            <div className="flex-form">
                                <div>
                                    <Typography fontSize="16px" fontWeight="bold">名前 *</Typography>
                                    <Typography fontSize="14px" color="gray">(ニックネーム可)</Typography>
                                </div>
                                <TextField 
                                variant="outlined" 
                                fullWidth 
                                sx={{maxWidth: "400px"}} 
                                size="small"
                                placeholder="留学太郎"
                                className="textfield"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}></TextField>
                            </div>
                            <div className="flex-form">
                                <div>
                                    <Typography fontSize="16px" fontWeight="bold">メールアドレス *</Typography>
                                </div>
                                <TextField 
                                variant="outlined" 
                                fullWidth 
                                sx={{maxWidth: "400px"}} 
                                size="small"
                                placeholder="ryugaku@example.com"
                                className="textfield"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}></TextField>
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
                                className="textfield"
                                value={formData.country}
                                onChange={(e) => setFormData({...formData, country: e.target.value})}></TextField>
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
                                className="textfield"
                                value={formData.duration}
                                onChange={(e) => setFormData({...formData, duration: e.target.value})}></TextField>
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
                                placeholder="進学"
                                className="textfield"
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}></TextField>
                            </div>
                            <div className="flex-form">
                                <div>
                                    <Typography fontSize="16px" fontWeight="bold">不安点や疑問点、質問事項など</Typography>
                                    <Typography fontSize="14px" color="gray">(何でもお気軽にお尋ねください！)</Typography>
                                </div>
                                <TextField 
                                variant="outlined" 
                                fullWidth 
                                sx={{maxWidth: "400px"}} 
                                size="small"
                                placeholder="〇〇はどうしたらいいですか？"
                                className="textfield"
                                multiline
                                minRows="10"
                                value={formData.question}
                                onChange={(e) => setFormData({...formData, question: e.target.value})}></TextField>
                            </div>
                            <div className="form-button">
                                <Button 
                                variant="contained" 
                                disableElevation 
                                sx={{width: "200px"}}
                                onClick={handlePush}>
                                    送信する</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        
    )
}

export default ConsulForm