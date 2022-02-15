import React from 'react';
import {Card} from "@mui/material";

const Cards = ({el,setCurrentItem,setCurrentBoard,stat}) => {

    function dragStartHandler(event, stat, el) {
        setCurrentBoard(stat)
        setCurrentItem(el)
    }

    function dragLeaveHandler(event) {
        event.target.style.boxShadow = 'none'
    }

    function dragEndHandler(event) {
        event.target.style.boxShadow = 'none'

    }

    function dragOverHandler(event) {
        event.preventDefault()
        if (event.target.className === 'item') {
            event.target.style.boxShadow = '0 2px 3px gray'
        }
    }

    function dropHandler(event) {
        event.preventDefault()
    }


    return (
        <Card sx={{
            minWidth: "95%",
            padding: "10px",
            marginTop: "10px"
        }}
              onDragStart={event => dragStartHandler(event, stat, el)}
              onDragLeave={event => dragLeaveHandler(event)}
              onDragEnd={event => dragEndHandler(event)}
              onDragOver={event => dragOverHandler(event)}
              onDrop={event => dropHandler(event)}
              draggable={true}
        >
                    <div>
                        {el.numberCard}
                    </div>
                    <div>
                        {el.statusCard}
                    </div>
                    <div>
                        {el.description}
                    </div>
        </Card>
    );
};

export default Cards;