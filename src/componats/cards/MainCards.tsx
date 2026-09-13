import React, { type Dispatch, type SetStateAction } from 'react';
import type { InCardType } from '../../Type/InCardsType';
import Cards from './Cards';

interface MainCardsType {
  cards : InCardType[];
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
  selectedSideCard: InCardType[];
        setselectedSideCard :Dispatch<SetStateAction<InCardType[]>>
}

const MainCards = ({cards , coin , setCoin ,selectedSideCard,setselectedSideCard}: MainCardsType) => {
    
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
             {
                cards.map((card : InCardType , ind : number)=>{
                    return <Cards
                     selectedSideCard={selectedSideCard} 
                     setselectedSideCard={setselectedSideCard} 
                     coin={coin} setCoin={setCoin} key={ind} card={card}>
                      
                     </Cards>
                })
             }
        </div>
    );
};

export default MainCards;