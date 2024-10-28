import axios from 'axios';
import { HOST, request } from './index';

export const getAllPostsAPI = async () => {
    const url = `${HOST}/posts`;

    return request(async () => {
        const response = await axios.get(url);

        if (response.status === 200) {
            const data = response.data;

            console.log(data, 'data');

            return data;
        }
    });
};
