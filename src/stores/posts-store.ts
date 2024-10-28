import { defineStore } from 'pinia';
import { getAllPostsAPI } from '@/api/api-posts';
import getRandomNumber from '@/helpers/get-random-number';
import { createPostAPI, editPostAPI, removePostAPI } from '@/api/api-post';

import type { Post } from '@/interfaces/post';

export const usePostsStore = defineStore({
    id: 'posts',
    state: () => ({
        loading: false as boolean,
        posts: [] as Post[],
        emptyPost: {
            userId: 0,
            title: 'Elastoo-test',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut ',
        } as Post,
    }),
    actions: {
        // For easy toggle Loading
        async executeWithLoading(action: () => Promise<unknown>) {
            this.loading = true;

            try {
                await action();
            } finally {
                this.loading = false;
            }
        },
        async getAllPosts() {
            await this.executeWithLoading(async () => {
                const response = await getAllPostsAPI();

                if (typeof response === 'object') {
                    this.posts = response;
                }
            });
        },
        async createPost() {
            await this.executeWithLoading(async () => {
                const cloneEmptyPost = JSON.parse(
                    JSON.stringify(this.emptyPost),
                );
                cloneEmptyPost.userId = getRandomNumber();

                const response = await createPostAPI(cloneEmptyPost);

                if (typeof response === 'object') {
                    this.posts.push(response);
                }
            });
        },
        async editPost(updatedPost: Post) {
            await this.executeWithLoading(async () => {
                const postId = updatedPost.id;
                const response = await editPostAPI(postId, updatedPost);

                if (typeof response === 'object') {
                    const index = this.posts.findIndex(
                        post => post.id === postId,
                    );
                    if (index !== -1) {
                        this.posts[index] = response;
                    }
                }
            });
        },
        async removePost(postId: number) {
            await this.executeWithLoading(async () => {
                await removePostAPI(postId);
                this.posts = this.posts.filter(post => post.id !== postId);
            });
        },
    },
});
