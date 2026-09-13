import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { InCardType } from '../../Type/InCardsType';

interface SideCardsType {
    coin: number;
    setCoin : Dispatch<SetStateAction<number>>;
    selectedSideCard: InCardType[];
    setselectedSideCard: Dispatch<SetStateAction<InCardType[]>>
}

const SideCards = ({ coin, setCoin , selectedSideCard, setselectedSideCard }: SideCardsType) => {

    const handelRemoveBTN = (SideCard: InCardType) => {
        const restCard = selectedSideCard.filter(SelectedCard => SelectedCard.name != SideCard.name);

        setselectedSideCard(restCard);

        const updetCoins = coin - 1;
        setCoin(updetCoins);

    }

    if (selectedSideCard.length === 0) {
        
        return <div>
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
  
  <h2 className="text-2xl font-bold text-gray-900">
    Your Stack
  </h2>

  <p className="mt-1 text-lg text-slate-400">
    No technologies selected yet.
  </p>

  <div className="mt-5 flex h-24 items-center justify-center rounded-2xl border border-dashed border-slate-200">
    <p className="text-lg text-slate-400">
      Your stack is empty.
    </p>
  </div>

</div>
        </div>
    }


    return (
        <div>
            <div className="w-[310px] rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Your Stack</h2>
                <p className="mt-1 text-sm text-slate-400"> {coin} Technology Selected</p>

                {
                    selectedSideCard.map((SideCard)  => {
                        return <div>

                            <div className="w-full max-w-[255px] h-[78px] border border-slate-200
                         rounded-lg px-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={SideCard.icon} className="text-3xl text-orange-500" alt="" />
                                    <div>
                                        <h3 className="text-sm font-semibold">{SideCard.name}</h3>
                                        <p className="text-[9px] text-gray-400">Frontend</p>
                                    </div>
                                </div>

                                <button
                                 onClick={() => handelRemoveBTN(SideCard)} 
                                 className="text-2xl text-gray-400 cursor-pointer">×</button>
                            </div>

                        </div>
                    })
                }

                <button className="mt-12 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50">
                    Remove All
                </button>
            </div>
        </div>
    );
};

export default SideCards;