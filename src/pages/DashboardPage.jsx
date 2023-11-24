import { Link } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import { useCreateRoom } from "../features/chat/useCreateRoom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

    const [play, setPlay] = useState(false)
    const [roomData, setRoomData] = useState({
        name: "",
        users: ["654b76d3588633e9dd141ce9", "654c016e544afb93a33be11c", "6554fcb7f055441f3ef8f54e"]
    })

    const navigate = useNavigate()

    const { isLoading, user } = useUser();
    const { isCreating, createRoom } = useCreateRoom()

    const handleCreateRoomSubmit = () => {
        navigate("/room")

        const roomDataSend = {
            name: roomData.name,
            users: JSON.stringify(roomData.users)
        }

        createRoom(roomDataSend)

    }





    const handleCreateRoomChange = (e) => {
        setRoomData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    if (isLoading) { return <div className="flex items-center justify-center h-screen"><span className="loading loading-infinity loading-lg"></span></div> }
    return (

        <div className="flex items-center justify-center ">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8 mt-8 rounded-md">Welcome, {user.username}</h1>
                <img
                    src="/images/cards-home.jpg"
                    alt="Cards Against Universe"
                    className="w-full h-auto max-w-md mx-auto mb-8 rounded-[2rem]"
                />
                {!play ? (
                    <div className="flex space-x-4 justify-center mt-8 gap-4 md:gap-8">
                        <button onClick={() => setPlay(true)} className="btn btn-neutral md:text-lg">Play</button>
                        <Link to="/mySpace" className="btn btn-outline md:text-lg">My Space</Link>
                    </div>)
                    :
                    (
                        <div className="flex space-x-4 justify-center mt-8 gap-4 md:gap-8">
                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-neutral md:text-lg">Create Room</button>
                            <Link to="/room" className="btn btn-outline md:text-lg">Join Room</Link>
                        </div>)
                }
            </div>
            <dialog id="my_modal_3" className="modal items-start pt-44">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Create Room</h3>
                    <p className="py-4">Add a code for others to join your room</p>
                    <div>
                        <label className="label">
                            <span className="label-text">Room Name</span>
                        </label>
                        <input type="text" placeholder="Insert Room Name" name="name" value={roomData.name}
                            onChange={handleCreateRoomChange} className="input input-bordered input-primary w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Code</span>
                        </label>
                        <input type="text" placeholder="Type code" name="roomCode" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <button onClick={handleCreateRoomSubmit} className="btn btn-primary mt-4">Create</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default DashboardPage