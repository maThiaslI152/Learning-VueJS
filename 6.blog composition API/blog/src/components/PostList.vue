<script setup>
  import SinglePost from "@/components/SinglePost.vue";
  import {onMounted, onUnmounted} from "vue";

  const props = defineProps(['posts'])

  onMounted(() => {
    console.log('component mounted')
  })
  onUnmounted(() => {
    console.log('component unmounted')
  })
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<style scoped>

</style>