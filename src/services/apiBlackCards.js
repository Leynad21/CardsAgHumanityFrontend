import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:5000";
const BASE_URL = `${BACKEND_DOMAIN}/api/v1`;
const ACCESSTOKEN = JSON.parse(localStorage.getItem("user"))?.token || null

// GET ALL BLACK CARDS

export const getBlackCards = async () => {
    try {
        const config = {
            headers: {
                "Authorization": `${ACCESSTOKEN}`,
                "Content-Type": "application/json",
            },
        };

        const response = await axios.get(`${BASE_URL}/cards/black`, config);

        return response.data;
    } catch (error) {
        console.error("Error fetching black cards:", error);
        throw error;
    }
};

// CREATE BLACK CARD

export const createBlackCard = async (cardData) => {

    try {
        const config = {
            headers: {
                "Authorization": `${ACCESSTOKEN}`,
                "Content-Type": "application/json",
            },
        };

        const response = await axios.post(`${BASE_URL}/cards/black`, cardData, config);

        return response.data;
    } catch (error) {
        console.error("Error creating black cards:", error);
        throw error;
    }
};
