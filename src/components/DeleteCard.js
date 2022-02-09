import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

const DeleteCard = ({cards, deleteCard}) => {

    const [open, setOpen] = useState(false)

    const openDeleteIcon = () => {
        setOpen(true)
    }

    return (
        <>
            <DeleteIcon onClick={openDeleteIcon}/>

            <Dialog
                 open={open}
                // onClose={openDeleteIcon}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Delete card?</DialogTitle>
                <DialogActions>
                    <Button onClick={() => deleteCard(cards.id)} color="secondary">Yes</Button>
                    <Button onClick={() => setOpen(false)} color="secondary">No</Button>
                </DialogActions>
            </Dialog>

        </>
    );
};

export default DeleteCard;


//
// sx={{
//     cursor: "pointer"
// }}
// onClick={() => deleteCard(cards.id)}