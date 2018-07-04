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
      <li><button @click="showCookie = !showCookie, viewCookie(), decodeCookie()">View Cookie</button></li>
      <li><button @click="deleteCookie">Delete Cookie</button></li>
    </ul>
    <code><pre>
      <div class="code" v-if="showCookie"><p>{{cookieObject}}</p>
        <div class="code" v-if="!cookieObject"><p>No cookie, please load the CMP!</p></div>
      </div>
    </pre></code>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="/docs" target="_self">Install Docs</a></li>
      <li><a href="#" target="_self">API Docs</a></li>
      <li><a href="#" target="_self">Homepage</a></li>
      <li><a href="#" target="_self">Blog</a></li>
    </ul>

  </div>
</template>

<script>
import { decodeVendorCookieValue } from '../../cookie/cookieutils.js';

export default {
  name: 'HomePage',
  data () {
    return {
      showCookie : false,
      base64Cookie : '',
      cookieObject : {},
    }
  },
  props: {
    msg: String
  },
  computed : {
    viewCookieComp () {
      const name = 'pubeuconsent';
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
      return
    },
    get() {
      return this.$cookies.euconsent || null;
    }
  },
  methods : {
    loadCmp() {
      window.__cmp('showConsentTool');
    },
    viewCookie() {
      const name = 'pubeuconsent';
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
      return
    },
    decodeCookie() {
      this.base64Cookie = this.viewCookie();
      this.cookieObject = decodeVendorCookieValue(this.base64Cookie)
    },
    deleteCookie() {
      this.$removeCookie('pubeuconsent')
      this.base64Cookie = this.viewCookie();
      this.cookieObject = decodeVendorCookieValue(this.base64Cookie);
      document.cookie = 'pubeuconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.consentstack.org;';
      document.cookie = 'custom=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.consentstack.org;';
      document.cookie = 'pubeuconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'custom=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  },
  mounted () {
    this.base64Cookie = this.viewCookie();
    this.cookieObject = decodeVendorCookieValue(this.base64Cookie);
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
  outline: 0;
}
button:active { 
    background-color: #00e6b8;
}

p {
  padding-left: 10px;
}
.code {
  text-align: left;
  width: 600px; 
  margin:0 auto;
  background: #fff;
}

</style>
