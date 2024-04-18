import {Button} from "@mui/material"
import {Link} from "react-router-dom"

function DrawerMenu() {
    return (
        <div>
            <Link to="/">
                <Button 
                    sx={{ 
                        textTransform: "none",
                        fontSize: 16,
                        color: "black",
                        paddingLeft: 2
                    }} variant="text">ホーム
                </Button>
            </Link>
            <Link to="/start">
                <Button 
                    sx={{ 
                        textTransform: "none",
                        fontSize: 16,
                        color: "black",
                        paddingLeft: 2
                    }} variant="text">相談を始める
                </Button>
            </Link>
            <Link to="/about">
                <Button 
                    sx={{ 
                        textTransform: "none",
                        fontSize: 16,
                        color: "black",
                        paddingLeft: 2
                    }} variant="text">OneChoiceとは
                </Button>
            </Link>
            <Link to="/advisor">
                <Button 
                    sx={{ 
                        textTransform: "none",
                        fontSize: 16,
                        color: "black",
                        paddingLeft: 2
                    }} variant="text">Advisor一覧
                </Button>
            </Link>
        </div>
    )
}

export default DrawerMenu