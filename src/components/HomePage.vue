<template>
  <div>
    <h1 class="title">Treat your user's <span class="green-text">data</span> fairly.</h1>
    <h3>Open source, developer focused & human centric consent management platform.</h3>
    <button class="website-button" @click="gotoGit()">Dev Docs</button>
    <button class="website-button" @click="gotoDocs()">Usage Docs</button>
  </div>
</template>

<script>
import FormComponent from './FormComponent.vue'

export default {
  name: 'HomePage',
  components: {
    FormComponent
  },
  data () {
    return {}
  },
  methods: {
    gotoDocs () {
      window.location.href = '/docs/'
    },
    gotoGit () {
      window.location.href = 'https://github.com/ConsentStack/cmp'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  padding-top: 60px;
}
.green-text {
  color: #00e6b8;
}
button {
  margin: 30px;
}

</style>
