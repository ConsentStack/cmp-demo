<template>
  <div class="container">
  <form name="contact" method="POST" netlify>
    <h3>
      Keep an eye on ConsentStack
    </h3>
    <p>
      <input type="email" name="email" placeholder="your@email.com"/>
      <button class="website-button" type="submit">Subscribe</button>
    </p>
  </form>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data () {
    return {}
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-left: 1%;
  text-align: left;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
}
button {
  height: 30px;
}
p { 
  margin: 0;
}
h3 {
  font-size: 20px;
  padding: 2px;
  margin: 0;
}
input {
  padding: 0;
  height: 30px;
  width: 300px;
  border: none;
  text-align: left;
  -moz-box-shadow:    inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 1px 3px 0 rgba(0,0,0,.25);
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  padding-left: 5px;
}
::-moz-placeholder { /* Firefox 19+ */
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
}
:-ms-input-placeholder { /* IE 10+ */
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
}
:-moz-placeholder { /* Firefox 18- */
  font-family: LabGrotesque-Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
