import React from 'react'
import { useBlackCards } from './useBlackCards'
import BlackCardLayout from './BlackCardLayout'

const DisplayAllBlackCards = () => {

    const { isLoading, error, blackCards } = useBlackCards()

    if (isLoading) return <div><span className="loading loading-infinity loading-md"></span></div>;

    // console.log(blackCards.cards.cards);


    return (
        <>
            <div className=' flex flex-wrap gap-4 py-4 justify-around'>
                {blackCards.cards.cards.map((blackCard) => (
                    <BlackCardLayout key={blackCard._id} text={blackCard.text} />
                ))}
            </div>
        </>
    )
}

export default DisplayAllBlackCards