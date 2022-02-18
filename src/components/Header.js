import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import Swipeable from "./Swipeable";

const Header = () => {

    return (
<>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Swipeable/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Kanban-board
                </Typography>
            </Toolbar>
        </AppBar>

</>
    );
};

export default Header;