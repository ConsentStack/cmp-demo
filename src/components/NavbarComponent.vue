<template>
  <div class="navbar-container">
    <nav class="navbar">
      <a class="navbar-brand" href="/#/"><img border="0" alt="Consent Stack" src="../assets/logo.png" height="50"></a>
      
      <a class="navbar-item" href="https://github.com/ConsentStack/cmp" target="blank">github</a>
      <a class="navbar-item" href="/docs/" target="blank">docs</a>
      <a class="navbar-item" href="/#/demo">demo</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data () {
    return {}
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
a:visited {
  color: #2c3e50;
}
a:hover {
  color: #00e6b8;
}
.navbar-item {
  float: right;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 120%;
}

</style>
