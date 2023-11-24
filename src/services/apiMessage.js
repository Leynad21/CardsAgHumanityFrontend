import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL


// GET ALL MESSAGES FROM A CHAT


export const getChatMessages = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const ACCESSTOKEN = user ? user.token : null
    try {
        const config = {
            headers: {
                "Authorization": ACCESSTOKEN,
                "Content-Type": "application/json"
            }
        }

        const response = await axios.get(`${BASE_URL}/messages/655f42b189ec5d9cde817316`, config)
        // ${messageData.chatId}

        return response.data

    } catch (error) {
        console.log("Error fetching messages:", error)
    }
}

export const sendMessage = async (messageData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const ACCESSTOKEN = user ? user.token : null

    try {
        const config = {
            headers: {
                "Authorization": ACCESSTOKEN,
                "Content-Type": "application/json"
            }
        }

        const response = await axios.post(`${BASE_URL}/messages`, messageData, config)

        return response.data

    } catch (error) {
        console.log("Error sending message:", error)
    }
}