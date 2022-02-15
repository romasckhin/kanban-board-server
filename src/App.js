import React, {useEffect, useState} from 'react';
import axios from "axios";
import Statuses from "./components/Statuses";
import {Container} from "@mui/material";

const App = () => {

    const [ boards , setBoards ] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:5000/cards"
        })
            .then(res => setBoards(res.data))
            .catch(err => console.log('err GET', err))
    },[])



    return (

        <Container>

            <Statuses
                boards={boards}
                setBoards={setBoards}
            />

        </Container>
    );
};

export default App;