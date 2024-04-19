import {Button, Stack} from "@mui/material"
import {Link} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close'

function DrawerMenu({onClose}) {
    return (
        <div>
            <Stack direction="column" alignItems="flex-end" sx={{width : "200px"}}>
                <Button
                    sx={{ 
                        textTransform: "none",
                        fontSize: 16,
                        color: "black",
                        paddingTop: 3,
                        paddingRight: 3
                    }} variant="text" 
                    onClick={onClose}>
                    <CloseIcon />
                </Button>
                <Link to="/">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "black",
                            paddingTop: 3,
                            paddingRight: 3
                        }} variant="text">ホーム
                    </Button>
                </Link>
                <Link to="/start">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "black",
                            paddingTop: 1,
                            paddingRight: 3
                        }} variant="text">相談を始める
                    </Button>
                </Link>
                <Link to="/about">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "black",
                            paddingTop: 1,
                            paddingRight: 3
                        }} variant="text">OneChoiceとは
                    </Button>
                </Link>
                <Link to="/advisor">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "black",
                            paddingTop: 1,
                            paddingRight: 3
                        }} variant="text">Advisor一覧
                    </Button>
                </Link>
            </Stack>
        </div>
    )
}

export default DrawerMenu