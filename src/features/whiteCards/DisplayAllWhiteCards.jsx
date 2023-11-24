import React from 'react'
import { useWhiteCards } from './useWhiteCards'
import WhiteCardLayout from './WhiteCardLayout'


const DisplayAllWhiteCards = () => {

    const { isLoading, error, whiteCards } = useWhiteCards()

    if (isLoading) return <div><span className="loading loading-infinity loading-md"></span></div>;
    return (
        <>
            <div className=' flex flex-wrap gap-4 py-4 justify-around'>
                {whiteCards.cards.cards.map((whiteCard) => (
                    <WhiteCardLayout key={whiteCard._id} text={whiteCard.text} />
                ))}
            </div>
        </>
    )
}

export default DisplayAllWhiteCards