<script setup>
import {onMounted, ref} from 'vue'

const jobs= ref([])

onMounted(() => {
  fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => jobs.value = data)
      .catch(err => console.log(err.message))
})
</script>

<template>
  <div v-if="jobs.length">
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to='{name: "JobDetails", params: {id: job.id}}'>
      <h2>{{job.title}}</h2>
    </router-link>
  </div>
  </div>
  <div v-else>
    <p>Loading Jobs...</p>
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