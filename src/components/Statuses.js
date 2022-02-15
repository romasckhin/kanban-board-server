import React, {useState} from 'react';
import BoardItems from "./BoardItems";
import {Box} from "@mui/material";

const Statuses = ({boards,setBoards}) => {

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)


    function dragOverHandler(event) {
        event.preventDefault()
        if (event.target.className === 'item') {
            event.target.style.boxShadow = '0 2px 3px gray'
        }
    }

    function dropCardHandler(event, stat) {
        stat.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === stat.id) {
                return stat
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
        event.target.style.boxShadow = 'none'
    }

    return (

        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {boards.map(stat =>
                <Box
                    sx={{
                        minWidth: "250px",
                        minHeight: "90vh",
                        background: '#ececf3',
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: "20px 10px",
                        borderRadius: "5px",
                        margin: "10px"
                    }}
                    onDragOver={event => dragOverHandler(event)}
                    onDrop={event => dropCardHandler(event, stat)}
                >
                    <BoardItems
                        key={stat.id}
                        stat={stat}
                        setCurrentBoard={setCurrentBoard}
                        setCurrentItem={setCurrentItem}

                    />
                </Box>
            )}
        </Box>
    );
};

export default Statuses;