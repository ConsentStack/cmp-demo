<template>
  <div>
    <h1>Welcome to the CMP Demo</h1>
    <p>
      For guidance on how to implement the application on your own website, please<br>
      get in touch with
      <a href="mailto:dennis@miqdigital.com" target="_blank">ConsentStack support</a>.
    </p>
    <h3>Try the stuff below...</h3>

<button class="website-button" @click="loadCmp">Load CMP</button>
<button class="website-button" @click="showCookie = !showCookie">View Cookie</button>
<button class="website-button" @click="deleteCookie">Delete Cookie</button>

    <code><pre>
      <div class="code" v-if="showCookie"><p>{{cookieObject}}</p>
        <div class="code" v-if="!cookieObject"><p>No cookie, please load the CMP!</p></div>
      </div>
    </pre></code>

  </div>
</template>

<script>
import { decodeVendorCookieValue } from '../../cookie/cookieutils.js';

export default {
  name: 'DemoPage',
  data () {
    return {
      showCookie : false,
      cookieString : '',
      cookieObject : {},
    }
  },
  methods: {
    loadCmp() {
      window.__cmp('showConsentTool');
    },
    getCookieString() {
      const name = 'euconsent';
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
      return;
    },
    decodeCookie() {
      this.cookieString = this.getCookieString();
      this.cookieObject = decodeVendorCookieValue(this.cookieString)
    },
    deleteCookie() {
      document.cookie = 'euconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.consentstack.org;';
      document.cookie = 'custom=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.consentstack.org;';
      document.cookie = 'euconsent=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'custom=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.cookieString = this.getCookieString();
      this.cookieObject = decodeVendorCookieValue(this.cookieString);
    },
    updateCookieObject() {
      setInterval(() => {
        this.cookieString = this.getCookieString();
        this.cookieObject = decodeVendorCookieValue(this.cookieString);
      }, 500)
    }
  },
  mounted() {
    this.cookieString = this.getCookieString();
    this.cookieObject = decodeVendorCookieValue(this.cookieString);
    this.updateCookieObject();
    // GTM Code
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NRVMLP2');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: 30px;
}
</style>
