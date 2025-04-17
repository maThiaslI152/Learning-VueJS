<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from "vue"

const props = defineProps(['delay'])
const emit = defineEmits(['end'])

const showBlock = ref(false)
const startTime = ref(0)

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true
    startTime.value = Date.now()
  }, props.delay)
})

function handleClick() {
  const endTime = Date.now()
  const reactionTime = endTime - startTime.value
  emit('end', reactionTime)
}
</script>

<template>
  <div class="block" v-if="showBlock" @click="handleClick">
   click me
  </div>
</template>

<style scoped>
  .block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>