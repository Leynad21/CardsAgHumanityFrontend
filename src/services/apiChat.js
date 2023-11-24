import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const user = JSON.parse(localStorage.getItem("user"));
const ACCESSTOKEN = user ? user.token : null;


// GET ALL CHATS

export const fetchChats = async () => {
    try {
        const config = {
            headers: {
                "Authorization": ACCESSTOKEN,
                "Content-Type": "application/Json"
            }
        }

        const response = await axios.get(`${BASE_URL}/chat`, config)

        return response.data


    } catch (error) {
        console.log("Error fetching chats:", error)
    }
}

export const createRoom = async (roomData) => {

    try {
        const config = {
            headers: {
                "Authorization": ACCESSTOKEN,
                "Content-Type": "application/Json"
            }
        }

        const response = await axios.post(`${BASE_URL}/chat/group`, roomData, config)

        return response.data

    } catch (error) {
        console.log("Error fetching chats:", error)
    }
}