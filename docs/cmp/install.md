# Installation

Installation of the CMP is very simple and resembles the addition of a tracking pixel to the site. The quickest way is to include the following `script` on your website, inside the `head` tag on all pages:

```html
<html>
  <head>
    <script src="//pluto.mgr.consensu.org/cmp" id="pluto-cmp-js-src" client-id="[CLIENT_ID]" async></script>
  </head>
</html>
```
::: tip 
Please ensure you replace `[CLIENT_ID]` in the above URL with the ID provided by support, this ensures we load your specific configuration for the CMP. 
::: 


#### The script will trigger the following flow:
- Load the `loader` module which fetches varies data for the main CMP module.
- Pass this information to the `CMP` module, which will perform the following flow:
    - Lookup existing consent data from the consent cookie, if present.
    - Determine if the consent tool should be shown to the user, based on client settings.
    - If cookies are disabled: **do nothing**.
    - If consent data exists and the vendor list version is current: **do nothing**.
    - If no consent data is found: **show the consent tool**.
    - If consent data is found and the vendor list version does not match: **show the consent tool**.

## Tag Management System Installation

Documentation for installation via a TMS install can be found [here](./tag-manager.md).

## Manual Triggering

If you need to manually show the consent tool you could add a click event to an element:

```html
<html>
  <body>
    <button onclick="window.__cmp('showConsentTool')">My Consent Settings</button>
  </body>
</html>
```

Or you can make a call to the CMP API directly:

```javascript
window.__cmp('showConsentTool', parameters, callback);
```
:::tip
#### For any further help please contact [support](mailto:support@consentstack.org).
:::