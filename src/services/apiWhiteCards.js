import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const ACCESSTOKEN = JSON.parse(localStorage.getItem("user"))?.token 

// GET ALL WHITE CARDS

export const getWhiteCards = async () => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${ACCESSTOKEN}`,
            },
        };

        const response = await axios.get(`${BASE_URL}/cards/white`, config);

        return response.data;
    } catch (error) {
        console.error("Error fetching white cards:", error);
        throw error;
    }
};

// CREATE WHITE CARD

export const createWhiteCard = async (cardData) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${ACCESSTOKEN}`,
            },
        };

        const response = await axios.post(`${BASE_URL}/cards/white`, cardData, config);

        return response.data;
    } catch (error) {
        console.error("Error creating white cards:", error);
        throw error;
    }
};
