import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteCard from "./DeleteCard";
import EditIcon from '@mui/icons-material/Edit';
import EditCard from "./EditCard";

const Cards = ({cards, deleteCard}) => {

    return (


        <Card sx={{minWidth: 275, marginTop: " 10px"}}>
            <CardContent>
                <Typography
                    sx={{
                        fontSize: 14,
                        display: "flex",
                        justifyContent: "space-between"
                    }} id="margin-none" color="text.secondary" gutterBottom>
                    {cards.number}
                    <EditCard/>
                    <DeleteCard
                        deleteCard={deleteCard}
                        cards={cards}
                    />
                </Typography>
                <Typography>
                    {cards.description}
                </Typography>
                <Typography>
                    {cards.status}
                </Typography>
            </CardContent>
        </Card>

    )
};

export default Cards;