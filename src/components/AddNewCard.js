import React, {useState} from 'react';
import {Button, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions} from "@mui/material";
import axios from "axios";

const AddNewCard = ({setCard}) => {

    const [open,setOpen] = useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const [inputNumber, setInputNumber] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [inputStatus, setInputStatus] = useState('')

    const createNewCard = () => {
        axios({
            method: "POST",
            url: `http://localhost:5000/cards/`,
                data: {
                    id: Math.random(),
                    number: inputNumber,
                    description: inputDescription,
                    status: inputStatus
                }
        })
            .then(res => {
                axios({
                    method: "GET",
                    url: "http://localhost:5000/cards"
                })
                    .then(res => setCard(res.data))
                    .catch(err => console.log('err', err))
            })
            handleClose()

    }

    return (

        <div>

            <Button color='secondary' onClick={handleClickOpen}>Create new Card</Button>

            <Dialog
                open={open}
                onClose={handleClickOpen}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new Card</DialogTitle>
                <DialogContent>
                    <DialogContentText> Create new Card </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="number"
                        label="Number"
                        type="text"
                        fullWidth
                        onChange={event => setInputNumber(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        onChange={event => setInputDescription(event.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Status"
                        label="Status"
                        type="text"
                        fullWidth
                        onChange={event => setInputStatus(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={createNewCard}>Create</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default AddNewCard;