import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const Cards = ({el, setCurrentItem, setCurrentBoard, stat}) => {

    function dragStartHandler(event, stat, el) {
        setCurrentBoard(stat)
        setCurrentItem(el)
    }

    // function dragLeaveHandler(event) {
    //     event.target.style.background = 'white'
    // }
    //
    // function dragEndHandler(event) {
    //     event.target.style.background = 'white'
    //
    // }
    //
    // function dragOverHandler(event) {
    //     event.target.style.background = 'red'
    //
    // }

    // function dropHandler(event) {
    //     event.preventDefault()
    // }


    return (
        <Card sx={{
            minWidth: "100%",
            marginTop: "10px"
        }}
              onDragStart={event => dragStartHandler(event, stat, el)}
            // onDragLeave={event => dragLeaveHandler(event)}
            // onDragEnd={event => dragEndHandler(event)}
            // onDragOver={event => dragOverHandler(event)}
            //onDrop={event => dropHandler(event)}
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
