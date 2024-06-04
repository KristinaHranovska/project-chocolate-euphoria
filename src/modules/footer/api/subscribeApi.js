import axios from 'helpers/axiosConfig';

export const postSubscribe = async (value) => {
    try {
        const res = await axios.post('/subscribe', value);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}