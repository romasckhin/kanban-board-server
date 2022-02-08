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

    return (

        <Container sx={{
            padding: "25px",
            background: '#e0eee2',
            boxShadow: "0px 0px 3px 1px"
        }} >

            <AddNewCard/>

            <Statuses
                status={status}
                card={card}
            />

        </Container>
    );
};

export default App;