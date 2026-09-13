import React, { use, useState } from 'react';
import type { InCardType } from '../../Type/InCardsType';
import MainCards from './MainCards';
import SideCards from './SideCards';


interface CardsProps {
    cardsPromis: Promise<InCardType[]>;
    
}

const PrentCards = ({cardsPromis} : CardsProps) => {
   
    const cards = use(cardsPromis);
    const [coin , setCoin ] = useState(0);
    const [selectedSideCard , setselectedSideCard] = useState<InCardType[]>([])
     
    return (
        <div>
            <h1>Explore the Technologies</h1>
            <p>Pick one technology per category to build your ideal stack.</p>
          
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
    
    <div className="lg:col-span-3">
        <MainCards coin={coin} 
        setCoin={setCoin} cards={cards} 
        selectedSideCard={selectedSideCard} setselectedSideCard={setselectedSideCard}  >

        </MainCards>
    </div>

    <div className="lg:col-span-1">
        <SideCards coin={coin} setCoin={setCoin} 
        selectedSideCard={selectedSideCard} setselectedSideCard={setselectedSideCard} 
        ></SideCards>
    </div>

</div>

        </div>
    );
};

export default PrentCards;