import axios from 'helpers/axiosConfig';

export const postOrder = async (value) => {
    try {
        const res = await axios.post('/order', value);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}