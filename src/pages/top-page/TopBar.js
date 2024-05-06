import "../../styles/TopBar.css"
import {Button} from "@mui/material"
import {Link} from "react-router-dom"

function TopBar() {
    return (
        <div className="top-bar">
            <Link to="/start">
                <Button className="button" variant="contained" disableElevation sx={{width: 200}}>
                    相談を始める(無料)
                </Button>
            </Link>
        </div>
    )
}

export default TopBar