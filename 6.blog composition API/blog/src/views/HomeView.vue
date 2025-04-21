<template>
  <div class="home">
    <h1>Home Page</h1>
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import {computed, ref, watch, watchEffect} from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['yoshi', 'toad', 'koopa', 'luigi', 'bowser', 'mario', 'peach'])

    const stopWatch = watch(search, () => {
      console.log('watch function called')
    })

    const stopWEffect = watchEffect(() => {
      console.log('watchEffect function called', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopWEffect()
    }

    return { names, search, matchingNames, handleClick}
  },
}
</script>
