<script setup>
import {onMounted, ref, useId} from "vue";

const {id} = defineProps(['id'])
const jobs = ref(null)

  onMounted(() => {
    fetch('http://localhost:3000/jobs/' + id)
        .then(res => res.json())
        .then(data => jobs.value = data)
        .catch(err => console.log(err.message))
  })
</script>

<template>
  <div v-if="jobs">
    <h1>{{jobs.title}}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{jobs.details}}</p>
  </div>
  <div v-else>
    <p>Loading Job details...</p>
  </div>
</template>

<style scoped>

</style>