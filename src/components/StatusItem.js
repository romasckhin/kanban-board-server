import React from 'react';
import Cards from "./Cards";

const StatusItem = ({statuses, card}) => {
    return (
        <div>
            {statuses}
            {card
                .filter(el => el.status === statuses)
                .map(el =>
                <Cards
                    key={el.id}
                    cards={el}
                />)}
        </div>
    );
};

export default StatusItem;