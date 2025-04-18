<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>


  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #6a6aff;
}
button {
  color: white;
  background-color: #6a6aff;
  margin: 0 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    },
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  }
}

</script>