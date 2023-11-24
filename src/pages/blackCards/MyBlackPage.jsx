import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyBlackPage = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <nav className='flex flex-grow justify-center gap-12 mt-4 border-b-2 border-black pb-2'>
                <Link to="" className=" w-48 bg-slate-200 flex items-center justify-center rounded-2xl cursor-pointer hover:opacity-80 transition py-2">
                    <h2 className="text-xl font-bold">See All Cards</h2>
                </Link>
                <Link to="allMyCards" className=" w-48 bg-slate-200 flex items-center justify-center rounded-2xl cursor-pointer hover:opacity-80 transition">
                    <h2 className="text-xl font-bold">Check My Cards</h2>
                </Link>
                <Link to="createCard" className=" w-48 bg-slate-200 flex items-center justify-center rounded-2xl cursor-pointer hover:opacity-80 transition">
                    <h2 className="text-xl font-bold">Create Card</h2>
                </Link>
            </nav>
            <div className='mt-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default MyBlackPage