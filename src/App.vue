<template>
<div>
  <navbar-component></navbar-component>
  <div id="app">
    <router-view></router-view>
  </div>
  <footer-component></footer-component>
</div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent,
    FooterComponent,
  }
}
</script>

<style>
@font-face {
    font-family: LabGrotesque-Medium;
    src: url(./assets/labgrotesque-medium.ttf);
    font-weight: 700
}
@font-face {
    font-family: LabGrotesque-Regular;
    src: url(./assets/labgrotesque-regular.ttf);
}
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f4f4;
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
}
#app {
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}
h1 {
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 50px;
  letter-spacing: 1px;
}
h3 {
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: 100;
}
.website-button {
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  width: 170px;
  height: 50px;
  outline: none;
  color: #000;
  background-color: #fff;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.website-button:hover {
  background-color: #00e6b8;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
.code {
  text-align: left;
  width: 600px; 
  margin: 0 auto;
  background: #fff;
}
</style>
