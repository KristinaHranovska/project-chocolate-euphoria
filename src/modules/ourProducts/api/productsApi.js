import axios from 'helpers/axiosConfig';
import toast from 'react-hot-toast';

export const getProducts = async () => {
    try {
        const res = await axios.get('/products');
        return res.data;
    } catch (error) {
        toast.error(error.message);
    }
}