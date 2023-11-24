import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { useCreateBlackCard } from './useCreateBlackCard';

const CreateBlackCard = () => {
    const [cardInput, setCardInput] = useState('');
    const [cardOptions, setCardOptions] = useState(0);
    const textareaRef = useRef(null);
    const { isCreating, createBlackCard } = useCreateBlackCard();

    const addCardOption = () => {
        if (cardOptions > 2) {
            toast.error('You can only have 3 options maximum');
            return;
        }

        const stringToAdd = " ________ ";

        setCardInput(cardInput + stringToAdd);
        setCardOptions(cardOptions + 1);
        console.log(cardOptions);
        console.log(cardInput);

        // Focus the textarea
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    const reset = () => {
        setCardInput('');
        setCardOptions(0);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.dismiss();

        if (cardInput === '') {
            toast.error('Card cannot be empty');
            return;
        }

        if (cardOptions === 0) {
            toast.error('You must have at least one option');
            return;
        }

        const cardData = {
            text: cardInput,
            pick: cardOptions
        }

        // Create card
        createBlackCard(cardData, {
            onSettled: () => {
                reset()
            }
        });

    }

    return (
        <>
            <div className="card w-72 h-96 bg-black text-white shadow-xl">
                <div className="card-body whitespace-normal w-full">
                    <textarea
                        rows="10"
                        type="text"
                        placeholder="Type here..."
                        value={cardInput}
                        onChange={(e) => setCardInput(e.target.value)}
                        ref={textareaRef}
                        className="bg-transparent whitespace-normal text-white text-lg font-semibold cursor-text focus:outline-none resize-none"
                    />
                </div>
            </div>
            <div className='flex gap-4 mt-2 justify-center'>
                <button className='btn btn-neutral' onClick={reset}>Reset</button>
                <button className='btn btn-primary' onClick={addCardOption}>Add option</button>
            </div>
            <button className='btn btn-outline mt-2 w-full' onClick={handleSubmit}>Create Card</button>
        </>
    );
};

export default CreateBlackCard;
