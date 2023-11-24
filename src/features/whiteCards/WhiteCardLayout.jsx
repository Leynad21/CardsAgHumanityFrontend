

const WhiteCardLayout = ({ text }) => {
    return (
        <div className="card w-72 h-96 bg-white text-black shadow-around">
            <div className="card-body whitespace-normal w-full">
                {text}
            </div>
        </div>
    )
}

export default WhiteCardLayout