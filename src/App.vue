<template>
  <div id="app">
    <img src="./assets/pluto2.svg">
    <HomePage msg="Welcome to the Pluto CMP Demo"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background-color: #f4f4f4;
}
img {
  width:100px;
  height:100px;
}
</style>
