<template>
  <div class="footer-container">
    <div class="branding">
      Made with ❤️ by <a target="blank" href="//orbislabs.org">OrbisLabs</a> & released under an <a target="blank" href="https://github.com/ConsentStack/cmp/blob/master/LICENSE">MIT</a> license.
      </div>
  </div>
</template>

<script>
import FormComponent from './FormComponent.vue'
export default {
  name: 'HomePage',
  components: {
    FormComponent
  }
}
</script>

<style scoped>
.footer-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #b3b3b3;
  color: white;
  text-align: center;
}
.branding {
  padding: 10px;
}
a {
  color:#00e6b8;
}
a:visited {
  color:#00e6b8;
}
</style>

