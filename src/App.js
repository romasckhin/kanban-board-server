import React, {useEffect, useState} from 'react';
import axios from "axios";
import Statuses from "./components/Statuses";
import {Container} from "@mui/material";
import Header from "./components/Header";
import './App.css'

const App = () => {

    const [boards, setBoards] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:5000/cards"
        })
            .then(res => setBoards(res.data))
            .catch(err => console.log('err GET', err))
    }, [])


    return (
        <>
            <Header/>



            <Container>
                <Statuses
                    boards={boards}
                    setBoards={setBoards}
                />
            </Container>
        </>
    );
};

export default App;