<template>
    <div class="post-edit">
        <button
            class="post-edit__btn button button-outline-primary"
            :disabled="loading"
            @click="actionEditPost"
        >
            <span v-if="editMode === 'view'">Edit</span>
            <span v-if="editMode === 'edit'">Save</span>
        </button>
    </div>
</template>

<script lang="ts">
import type { Post } from '@/interfaces/post';
import { mapState, mapActions } from 'pinia';
import { usePostsStore } from '@/stores/posts-store.js';

export default {
    name: 'PostEdit',
    props: {
        post: {
            type: Object,
            default: () => ({}) as Post,
        },
        editMode: {
            type: String,
            default: 'view',
        },
    },
    emits: ['change-mode'],
    data: () => ({}),
    computed: {
        ...mapState(usePostsStore, ['loading']),
    },
    methods: {
        ...mapActions(usePostsStore, ['editPost']),
        async actionEditPost() {
            if (this.editMode === 'view') {
                this.$emit('change-mode', 'edit');
            } else if (this.editMode === 'edit') {
                await this.editPost(this.post as Post);
                this.$emit('change-mode', 'view');
            }
        },
    },
};
</script>
