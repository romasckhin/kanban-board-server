import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Cards = ({cards}) => {

    return (

        <div>
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        {cards.number}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};

export default Cards;