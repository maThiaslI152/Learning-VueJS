<script setup>
import {onMounted, ref} from "vue";
console.log('Results component loaded')

//props
const {score} = defineProps(['score'])
//reactive state
const rank = ref('')

// When component mounts, compute rank
onMounted(() => {
  if (score < 200) {
    rank.value = 'Good'
  } else if (score < 250) {
    rank.value = 'Average'
  } else if (score < 500) {
    rank.value = 'Bad'
  } else {
    rank.value = 'Snail'
  }
})
</script>

<template>
  <p>Your reaction time was : {{score}}</p>
  <p class="rank">Rank: {{ rank }}</p>
</template>

<style scoped>
  .rank {
    color: #0faf87;
    font-size: 1.4em;
    font-weight: bold;
  }
</style>