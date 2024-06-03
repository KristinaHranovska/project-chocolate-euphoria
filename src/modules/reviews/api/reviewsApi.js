import axios from 'helpers/axiosConfig';

export const getReviews = async () => {
    try {
        const res = await axios.get('/reviews');
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}