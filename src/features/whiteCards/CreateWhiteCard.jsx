import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { useCreateWhiteCard } from './useCreateWhiteCard';

const CreateWhiteCard = () => {
    const [cardInput, setCardInput] = useState('');
    const { createWhiteCard, isCreating } = useCreateWhiteCard();



    const handleSubmit = () => {


        if (cardInput === '') {
            toast.error('Please enter a card');
            return;
        }

        const cardData = {
            text: cardInput,
        }

        createWhiteCard(cardData);
        reset();
    }


    const reset = () => {
        setCardInput('');
    }

    return (
        <>
            <div className="card w-72 h-96 bg-white text-black shadow-around">
                <div className="card-body whitespace-normal w-full">
                    <textarea
                        rows="10"
                        type="text"
                        placeholder="Type here..."
                        value={cardInput}
                        onChange={(e) => setCardInput(e.target.value)}
                        className="bg-transparent whitespace-normal text-lg font-semibold cursor-text focus:outline-none resize-none"
                    />
                </div>
            </div>
            <div className='flex gap-4 mt-2 justify-center'>
                <button className='btn btn-neutral' onClick={reset}>Reset</button>
                <button className='btn btn-outline' onClick={handleSubmit}>Create Card</button>
            </div>
        </>
    );
};

export default CreateWhiteCard;
