import React from 'react';
import Cards from "./Cards";


const BoardItems = ({stat,setCurrentBoard,setCurrentItem}) => {


    return (

       <>
           {stat.items.map (el =>
               <Cards
                   key={el.id}
                   stat={stat}
                   el={el}
                   setCurrentBoard={setCurrentBoard}
                   setCurrentItem={setCurrentItem}
               />)}
       </>
    );
};

export default BoardItems;