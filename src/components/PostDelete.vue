<template>
    <div class="post-delete">
        <button
            class="post-delete__btn button button-outline-primary"
            :disabled="loading"
            @click="removePost(post.id)"
        >
            Delete
        </button>
    </div>
</template>

<script lang="ts">
import type { Post } from '@/interfaces/post';
import { mapState, mapActions } from 'pinia';
import { usePostsStore } from '@/stores/posts-store.js';

export default {
    name: 'PostDelete',
    props: {
        post: {
            type: Object,
            default: () => ({}) as Post,
        },
    },
    computed: {
        ...mapState(usePostsStore, ['loading']),
    },
    methods: {
        ...mapActions(usePostsStore, ['removePost']),
    },
};
</script>
