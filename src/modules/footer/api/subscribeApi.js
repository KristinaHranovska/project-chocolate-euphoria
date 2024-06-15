import axios from 'helpers/axiosConfig';
import toast from 'react-hot-toast';

export const postSubscribe = async (value) => {
    try {
        const res = await axios.post('/subscribe', value);
        return res.data;
    } catch (error) {
        if (error.response.status === 409) {
            toast.error('This email is already subscribed.');
        } else {
            toast.error('Subscription failed. Please try again later.');
        }
        throw new Error(error.response.status);
    }
}