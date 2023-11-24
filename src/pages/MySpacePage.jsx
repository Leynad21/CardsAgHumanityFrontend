import React from 'react'
import { Link } from 'react-router-dom'

const MySpacePage = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 h-[80vh] ">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://ipruc.fi/wp-content/uploads/iStock-1030479214.jpg" alt="Black" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Black Cards</h2>
                    <div className="card-actions justify-end">
                        <Link to="blackCards" className="btn btn-primary">Go</Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.freepik.com/free-photo/white-brush-stroke-texture-background_53876-167180.jpg" alt="white-cards" /></figure>
                <div className="card-body">
                    <h2 className="card-title">White Cards</h2>
                    <div className="card-actions justify-end">
                        <Link to="whiteCards" className="btn btn-primary">Go</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySpacePage