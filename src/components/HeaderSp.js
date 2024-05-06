import "../styles/Header.css"
import {Stack, Button, Drawer, IconButton} from "@mui/material"
import { useState } from "react"
import {Link} from "react-router-dom"
import DrawerMenu from "./DrawerMenu"
import MenuIcon from '@mui/icons-material/Menu'

function HeaderSp() {
    const [drawerOpened, setDrawerOpened] = useState(false)

    const closeDrawer = () => {
        setDrawerOpened(false);
    }

    return (
        <div className="header">
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                <Link to="/">
                    <Button 
                        sx={{ 
                            textTransform: "none",
                            fontSize: 20,
                            color: "black",
                            paddingLeft: "24px"
                        }} variant="text">OneChoice
                    </Button>
                </Link>
                <div className="right-items">
                    <IconButton onClick={() => setDrawerOpened(true)} sx={{paddingRight: "24px"}}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor={"right"} open={drawerOpened} onClose={() => setDrawerOpened(false)}>
                        <DrawerMenu onClose={closeDrawer}/>
                    </Drawer>
                </div>
            </Stack>
        </div>
    )
}

export default HeaderSp