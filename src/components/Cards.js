import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const Cards = ({el, setCurrentItem, setCurrentBoard, stat}) => {

    function dragStartHandler(event, stat, el) {
        setCurrentBoard(stat)
        setCurrentItem(el)
    }



    return (
        <Card sx={{
            minWidth: "100%",
            marginTop: "10px"
        }}
              onDragStart={event => dragStartHandler(event, stat, el)}
              draggable={true}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    {el.numberCard}
                </Typography>
                <Typography>
                    {el.statusCard}
                </Typography>
                <Typography>
                    {el.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cards;
