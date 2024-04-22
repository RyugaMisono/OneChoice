import "../styles/Header.css"
import {Stack, Button} from "@mui/material"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                <Link to="/">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 20,
                            color: "black"
                        }} variant="text">OneChoice
                    </Button>
                </Link>
                <div className="right-items">
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
            </Stack>
        </div>
    )
}

export default Header