

const BlackCardLayout = ({ text }) => {

    return (
        <>
            <div className="card w-72 h-96 bg-black text-white shadow-xl">
                <div className="card-body">
                    <p className='bg-transparent text-white text-lg font-semibold cursor-text focus:outline-none' >
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlackCardLayout