import "../../styles/TopBarSp.css"
import {Button} from "@mui/material"
import {Link} from "react-router-dom"
import topBarImage from "../../img/topBar4.jpg"

function TopBarSp() {
    return (
        <div>
            <div className="top-bar-sp">
                <img src={topBarImage} alt="Top Bar" className="top-bar-image" />
            </div>
        </div>
    )
}

export default TopBarSp