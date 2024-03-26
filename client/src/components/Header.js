import "./Header.css"
import {Stack, Button} from "@mui/material"

function Header() {
    return (
        <div className="header">
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                <Button 
                    sx={{ 
                        textTransform: "none",
                        fontSize: 20,
                        color: "black"
                    }} variant="text">OneChoice
                </Button>
                <div className="right-items">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 16,
                            color: "black",
                            paddingLeft: 2
                        }} variant="text">相談を始める
                    </Button>
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 16,
                            color: "black",
                            paddingLeft: 2
                        }} variant="text">OneChoiceとは
                    </Button>
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 16,
                            color: "black",
                            paddingLeft: 2
                        }} variant="text">Adviser一覧
                    </Button>
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 16,
                            color: "black",
                            paddingLeft: 2
                        }} variant="text">よくあるご質問
                    </Button>
                </div>
            </Stack>
        </div>
    )
}

export default Header