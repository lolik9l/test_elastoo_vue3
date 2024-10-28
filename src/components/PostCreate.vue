<template>
    <div class="post-create">
        <button
            class="post-create__btn button button-primary"
            :disabled="loading"
            @click="createPost"
        >
            Create Post
        </button>
    </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia';
import { usePostsStore } from '@/stores/posts-store.js';

export default {
    name: 'PostCreate',
    computed: {
        ...mapState(usePostsStore, ['loading']),
    },
    methods: {
        ...mapActions(usePostsStore, ['createPost']),
    },
};
</script>
