<template>
    <div class="post-home">
        <div
            class="post-home__wrap"
            :class="editMode === 'edit' ? 'editable' : ''"
        >
            <p class="post-home__user">User ID: {{ post.userId }}</p>
            <h3
                class="post-home__title"
                :contenteditable="editMode === 'edit' ? true : false"
            >
                {{ post.title }}
            </h3>
            <p
                class="post-home__body"
                :contenteditable="editMode === 'edit' ? true : false"
            >
                {{ post.body }}
            </p>

            <div class="post-home__bottom">
                <PostEdit
                    :post="post"
                    :edit-mode="editMode"
                    @change-mode="changeEditMode"
                />
                <PostDelete :post="post" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { Post, PostEditMode } from '@/interfaces/post';
import PostEdit from './PostEdit.vue';
import PostDelete from './PostDelete.vue';

export default {
    name: 'PostHome',
    data: () => {
        return {
            editMode: 'view' as PostEditMode['mode'],
        };
    },
    props: {
        post: {
            type: Object,
            default: () => ({}) as Post,
        },
    },
    watch: {
        post(oldVal, newVal) {
            if (oldVal.id !== newVal.id) {
                this.editMode = 'view';
            }
        },
    },
    components: {
        PostEdit,
        PostDelete,
    },
    methods: {
        changeEditMode(mode: PostEditMode['mode']) {
            this.editMode = mode;
        },
    },
};
</script>
