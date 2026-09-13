import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { InCardType } from '../../Type/InCardsType';
import { Bounce, toast } from 'react-toastify';

interface CardsType {
   isSelected : boolean ;
    setisSelected: Dispatch<SetStateAction<boolean>>;
  card : InCardType;
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>
  selectedSideCard: InCardType[];
        setselectedSideCard :Dispatch<SetStateAction<InCardType[]>>
}

const Cards = ({isSelected,setisSelected,card , coin, setCoin ,selectedSideCard,setselectedSideCard}: CardsType) => {

  

  const handelarSelectedBTN = ()=>{
    const newCoins = coin + 1 ;
    

    if (newCoins > 0) {
       setCoin(newCoins)

       setisSelected(true);
setselectedSideCard([...selectedSideCard,card])

       

       toast.success(`${card.category} added susscesfully`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }

   
  }

    return (
       <div className="rounded-xl border
        border-gray-200 bg-white p-3 shadow-sm  transition-all 
        duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">

      {/* Top: Icon + Badge */}
      <div className="flex items-center justify-between">
        
        <img
          src={card.icon}
          alt={card.name}
          className="h-7 w-7 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-2 py-1 text-[8px] font-medium text-pink-500">
          {card.badge}
        </span>

      </div>

      {/* Name */}
      <h2 className="mt-3 text-lg font-bold text-gray-800">
        {card.name}
      </h2>

      {/* Description */}
      <p className="mt-1 h-8 overflow-hidden text-[12px] font-semibold leading-3 text-gray-400">
        {card.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-3 flex items-center justify-between text-[10px]">

        <span className="rounded bg-gray-100 px-2 py-1 font-bold text-[12px] text-gray-500">
          {card.category}
        </span>

        <span className="text-gray-500 font-bold text-[12px]">
          {card.difficulty}
        </span>

        <span className="flex items-center font-bold text-[12px] gap-1 text-gray-700">
          <span className="text-yellow-400">★</span>
          {card.rating}
        </span>

      </div>

      {/* Button */}
      <button onClick={handelarSelectedBTN}
        className={`mt-3 w-full rounded-md bg-gray-950 py-2 text-[8px] 
        font-medium text-white transition
         hover:bg-gray-800`} disabled={isSelected===true? true : false}
      >
        {isSelected === true ? 'selected' : 'Add to Stack'}
      </button>

    </div>
    );
};

export default Cards;