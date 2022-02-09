import React, {useEffect, useState} from 'react';
import Statuses from "./components/Statuses";
import {Container} from "@mui/material";
import axios from 'axios'
import AddNewCard from "./components/AddNewCard";

const App = () => {

    const status = ['to do', 'in progress', 'in review', 'done']

    const [card, setCard] = useState([])

    useEffect(() => {
       axios({
           method: "GET",
           url: "http://localhost:5000/cards"
       })
           .then(res => setCard(res.data))
           .catch(err => console.log('err', err))
    },[])

    const deleteCard = (id) => {
        axios({
            method: "DELETE",
            url: `http://localhost:5000/cards/${id}`
        })
            .then(res => {
                axios({
                    method: "GET",
                    url: "http://localhost:5000/cards"
                })
                    .then(res => setCard(res.data))
                    .catch(err => console.log('err', err))
            })
    }

    return (

        <Container sx={{
            padding: "25px",
            background: '#f2f6f8',
            boxShadow:" 2px 2px 2px 2px #d9d6c8",
        }} >

            <AddNewCard
                setCard={setCard}
            />

            <Statuses
                deleteCard={deleteCard}
                status={status}
                card={card}
            />

        </Container>
    );
};

export default App;