<template>
    <div class="view home-view">
        <PostsHome />
    </div>
</template>

<script lang="ts">
import PostsHome from '@/components/PostsHome.vue';

export default {
    name: 'HomeView',
    components: {
        PostsHome,
    },
};
</script>
