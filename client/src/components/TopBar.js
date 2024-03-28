import "./TopBar.css"
import {Stack, Button} from "@mui/material"

function TopBar() {
    return (
        <div className="top-bar">
            <Button className="button" variant="contained" disableElevation sx={{width: 200}}>
                相談を始める(無料)
            </Button>
        </div>
    )
}

export default TopBar