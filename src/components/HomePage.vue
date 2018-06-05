<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      For guidance on how to implement the application on your own website, please<br>
      get in touch with
      <a href="mailto:dennis@miqdigital.com" target="_blank">Pluto support</a>.
    </p>
    <h3>Try the stuff below...</h3>
    <ul>
      <li><button @click="loadCmp">Load CMP</button></li>
      <li><button @click="viewCookie">View Cookie</button></li>
      <li><button @click="deleteCookie">Delete Cookie</button></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  methods : {
    loadCmp() {
      window.__cmp('showConsentTool');
    },
    viewCookie() {
      function getCookieValue() {
        const name = 'euconsent';
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + name + '=');
        if (parts.length === 2) {
          return parts.pop().split(';').shift();
        }
        return
      }
      console.log(getCookieValue())
    },
    deleteCookie() {
      // need to allow this to call to consensu.org script to delete those cookies 
      // document.cookie = 'euconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.consensu.org;';
      document.cookie = 'euconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.pluto-cmp.com;';
      document.cookie = 'custom=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.pluto-cmp.com;';
      document.cookie = 'euconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'custom=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  },
  mounted () {
/*     const plutoScript = document.createElement('script');
    plutoScript.setAttribute('id', 'pluto-cmp-js-src');
    plutoScript.setAttribute('client-id', 1);
    plutoScript.setAttribute('src', 'https://pluto.mgr.consensu.org/cmp');
    document.head.appendChild(plutoScript); */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00e6b8;
}
button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #b3b3b3;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 0px solid #00e6b8;
  width : 170px;
  font-size: 12pt;
}

</style>
