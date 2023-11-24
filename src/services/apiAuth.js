import axios from "axios";


const BACKEND_DOMAIN = "http://localhost:5000"
const BASE_URL = `${BACKEND_DOMAIN}/api/v1`

// REGISTER USER

export const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await axios.post(`${BASE_URL}/users/register`, userData, config)

    return response.data
}


// LOGIN USER

export const login = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await axios.post(`${BASE_URL}/users/login`, userData, config)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}


// GET USER
export const getCurrentUser = () => {
    try {
        // Retrieve user data from local storage
        const userJSON = localStorage.getItem('user');

        // Parse the JSON string to get the user object
        const user = userJSON ? JSON.parse(userJSON) : null;

        // Check if user is not null before accessing its properties
        const userData = user ? { "username": user.user } : null;

        return userData;
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;
    }
};



// LOGOUT USER

export const logout = async () => {
    // const config = {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }

    // const response = await axios.post(`${BASE_URL}/users/logout`, {}, config)

    // if (response.data) {
    //     localStorage.removeItem("user")
    // }

    // return response.data

    localStorage.removeItem("user")
}   