# Installation

The best way is to include the following `script` on your website, inside the `head` tag:

```html
<html>
  <head>
    <script src="//pluto.mgr.consensu.org/cmp" client-id="[CLIENT_ID]" async></script>
  </head>
</html>
```
Please ensure you replace `CLIENT_ID` in the above URL with the ID provided by support, this ensure we load your specific configuration.

The script will trigger the following flow:
- Load the CMP script from this site
- Request the global vendor list
- Lookup existing consent data from the consent cookie
- Determine if the consent tool should be shown to the user:
    - If cookies are disabled: **do nothing**
    - If consent data exists and the vendor list version is current: **do nothing**
    - If no consent data is found: **show the consent tool**
    - If consent data is found and the vendor list version does not match: **show the consent tool**

## Customisation?

Currently we have an on-boarding process in which we will configure the platform on your behalf, we can customise:
- Styling of the consent modal
- Vendor list
- Purpose list

## Install using a Tag Manager?

#### Please reach out to us for docs and help with installation using your specific tag manager.

## Manual Consent Tool Trigger

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

#### For any further help pleace contact: support@pluto-cmp.com