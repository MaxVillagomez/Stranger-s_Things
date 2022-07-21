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