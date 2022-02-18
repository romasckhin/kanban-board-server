import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, List, ListItem} from "@mui/material";


const Swipeable = () => {

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }


    return (
        <>
            <MenuIcon
                onClick={toggleDrawer(true)}/>

            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >

                <List>
                    <ListItem>
                        in developing...
                    </ListItem>
                </List>
            </Drawer>

        </>
    );
};

export default Swipeable;