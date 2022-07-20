export const getAllPosts = async () => {
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts');
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};