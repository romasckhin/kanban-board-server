import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

const EditCard = () => {
    return (
        <div>
            <Typography
                sx={{
                    marginLeft: "130px"
                }}
            >
                <EditIcon/>
            </Typography>
        </div>
    );
};

export default EditCard;