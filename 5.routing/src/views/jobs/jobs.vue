<script setup>
import {ref} from 'vue'

const jobs= ref([
      {title: 'UX Designer', id:1, details: 'bla'},
      {title: 'Web Designer', id:2, details: 'bla2'},
      {title: 'Vue Developer', id:3, details: 'bla3'},
    ])
</script>

<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to='{name: "jobDetails", params: {id: job.id}}'>
      <h2>{{job.title}}</h2>
    </router-link>
  </div>
</template>

<style scoped>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a{
  text-decoration: none;
  color: inherit;
}
</style>