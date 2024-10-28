<template>
    <div class="posts-home">
        <template v-if="posts.length !== 0">
            <PostCreate />

            <div class="posts-home__list">
                <PostHome v-for="(post, i) in posts" :key="i" :post="post" />
            </div>
        </template>

        <Transition>
            <div v-show="loading" class="preloader">
                <div class="spinner"></div>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia';
import { usePostsStore } from '@/stores/posts-store.js';
import PostHome from './PostHome.vue';
import PostCreate from './PostCreate.vue';

export default {
    name: 'PostsHome',
    components: {
        PostHome,
        PostCreate,
    },
    computed: {
        ...mapState(usePostsStore, ['posts', 'loading']),
    },
    created() {
        this.getAllPosts();
    },
    methods: {
        ...mapActions(usePostsStore, ['getAllPosts']),
    },
};
</script>
