<template>
  <div id="app">
    <img id="logo-img" src="./assets/pluto2.svg">
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import StagingPage from './components/StagingPage.vue'

export default {
  name: 'app',
  components: {
    HomePage,
    StagingPage
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
#logo-img {
  width: 100px;
  height: 100px;
}
</style>
