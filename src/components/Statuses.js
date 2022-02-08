import React from 'react';
import StatusItem from "./StatusItem";
import {Box} from "@mui/material";

const Statuses = ({status,card}) => {

    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
            {status.map(el =>
                <StatusItem
                    key={el}
                    statuses={el}
                    card={card}
                />)}
            </Box>
        </div>
    );
};

export default Statuses;