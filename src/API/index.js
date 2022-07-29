import axios from "axios";

const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME = '2206-FTB-ET-WEB-FT-B';
const API_URL = BASE_URL + COHORT_NAME;

export const getAllPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export async function getMe(token) {
    try {
        const { data } = await axios.get(`${API_URL}/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        return data;
    } catch (error) {
        throw error;
    }
}


export async function login(user) {
    try {
        const { data } = await axios.post(`${API_URL}/users/login`, { user });
        return data;
    } catch (error) {
        throw error;
    }
}

// export async function register(user) {
//     try {
//         const { token } = await axios.post(`${API_URL}/users/register`, { user });
//         return token;
//     } catch (error) {
//         throw error;
//     }
// }