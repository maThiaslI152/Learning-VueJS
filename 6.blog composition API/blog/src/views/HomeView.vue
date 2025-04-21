<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import PostList from "../components/PostList.vue"
import getPosts from "../composables/getPosts"

export default {
  name: 'HomeView',
  components: {PostList},
  setup() {
    const {posts, error, load} = getPosts()

    load()

    return { posts, error}
  },
}
</script>
