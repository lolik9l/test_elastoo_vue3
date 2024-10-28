import axios from 'axios';
import { HOST, request } from './index';
import type { Post } from '@/interfaces/post';

export const createPostAPI = async (newPost: Post) => {
    const url = `${HOST}/posts`;

    return request(async () => {
        const response = await axios.post(url, newPost);

        if (response.status === 201) {
            return response.data;
        }
    });
};

export const editPostAPI = async (postId: number, updatedData: Post) => {
    const url = `${HOST}/posts/${postId}`;

    return request(async () => {
        const response = await axios.put(url, updatedData);

        if (response.status === 200) {
            const { data } = response;
            return data;
        }
    });
};

export const removePostAPI = async (postId: number) => {
    const url = `${HOST}/posts/${postId}`;

    return request(async () => {
        const response = await axios.delete(url);

        if (response.status === 200) {
            return true;
        }
    });
};
