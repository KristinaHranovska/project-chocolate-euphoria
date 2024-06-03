import axios from 'helpers/axiosConfig';
import toast from 'react-hot-toast';

export const getReviews = async () => {
    try {
        const res = await axios.get('/reviews');
        return res.data;
    } catch (error) {
        toast.error(error.message);
    }
}

export const postReviews = async (value) => {
    try {
        const res = await axios.post('/reviews', value);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}