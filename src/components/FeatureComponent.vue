<template>
  <div class="container">
    <div class="grid-container">
      <div class="grid-item">
        <div class="feature-text">
          <div class="heading-medium">
            <div class="green-circle">1</div>
            Open Source
          </div>
          blah
        </div>
      </div>
      <div class="grid-item">
        <div class="heading-medium">
          <div class="green-circle">2</div>
          Developer Focused
        </div>
      </div>
      <div class="grid-item">
        <div class="heading-medium">
          <div class="green-circle">3</div>
          Human Centric
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureComponent',
  data () {
    return {}
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.green-circle {
  text-align: center;
  width: 36px;
  height: 36px;
  display: inline-block;
  color: #fff!important;
  background-color: rgba(0,230,184,.97);
  border-radius: 50%;
  font-family: LabGrotesque-Medium;
  font-size: 24px;
  line-height: 36px;
  position: relative;
  margin-left: -45px;
  top: -4px;
  left: -7px
}
.heading-medium {
  font-family: LabGrotesque-Medium,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 24px;
  line-height: 50px;
  color: #333
}
</style>
