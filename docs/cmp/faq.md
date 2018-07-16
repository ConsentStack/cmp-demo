# Frequently Asked Questions

### General
- [Are you registered as CMP with the IAB?](#are-you-registered-as-cmp-with-the-iab)

### Installation
- [Can the CMP be installed via a Tag Management System?](#can-the-cmp-be-installed-via-a-tag-management-system)

### Customisation
- [Do you allow for custom copy and messaging?](#do-you-allow-for-custom-copy-and-messaging)
- [Do you support custom vendors and purposes?](#do-you-support-custom-vendors-and-purposes)
- [Is there a limit in the number of vendors the CMP can display?](#is-there-a-limit-in-the-number-of-vendors-the-cmp-can-display)

### Reporting
- [Can you report on rates of consent?](#can-you-report-on-rates-of-consent)

### Technical
- [Does the CMP block third party tags on a website?](#does-the-cmp-block-third-party-tags-on-a-website)
- [Can the CMP operate with non JavaScript tags?](#can-the-cmp-operate-with-non-javascript-tags)
- [Does the CMP use cookies to identify users?](#does-the-cmp-use-cookies-to-identify-users)
- [What happens if visitors delete all cookies?](#what-happens-if-visitors-delete-all-cookies)

### Cost
- [Is there a cost for usage of the CMP?](#is-there-a-cost-for-usage-of-the-cmp)

### Support
- [Is support available?](#is-support-available)


___


## Are you registered as CMP with the IAB?
Yes, we are registered with the IAB and have been assigned the ID of **52**, you can see a full list located on the [IAB website](http://advertisingconsent.eu/cmp-list/).

## Can the CMP be installed via a Tag Management System?
Yes, we have two methods of installation **Blocking**, which will stop the firing of trackers on the page and **Non-Blocking**. Full instructions can be found [here](./tag-manager.md).

## Do you allow for custom copy and messaging?
Yes, as we are evolving the product we are very happy :smile: to create custom versions for our clients. In the future there will be a self-serve option to make changes to copy and styling via a web application. Today this can be done by the ConsentStack team, more details can be found [here](./custom.md).

## Do you support custom vendors and purposes?
Yes, we do allow for custom vendors and purposes. However, if your vendors are outside of the [IAB registered vendors](http://advertisingconsent.eu/vendor-list/) there will be no direct way for the CMP to pass the consent signal to them. You can however use a blocking install to stop the firing of their tracker or script.

## Is there a limit in the number of vendors the CMP can display?
No, there is no limit.

## Can you report on rates of consent?
Yes, today we have reporting which can be supplied via email by a ConsentStack support team member. There is a self-serve web application in progress to allow for clients to setup & view reports. We are also interested to hear of any custom reporting needs you may have.

## Does the CMP block third party tags on a website?
When you opt for a [blocking installation](./tag-manager.md) via a tag management system the CMP can stop the firing of other trackers on the page.

## Can the CMP operate with non JavaScript tags?
The CMP itself is a more complicated technology than for example a pixel, therefore it cannot function as an image tag. 

It can however manage the firing of both JS and Image trackers.

## Does the CMP use cookies to identify users?
The CMP sets a cookie in a specific format which has been decided by the IAB as part of the [Transparency and Consent Framework](http://advertisingconsent.eu/). This cookie is not unique per user, and cannot be used to **directly identify** a user, but simply their consent choices. 

## What happens if visitors delete all cookies?
The CMP would be loaded again on their next visit to the website.

## Is there a cost for usage of the CMP?
ConsentStack base CMP will remain free, the project will also be open sourced which means anyone can download and host the CMP themselves. There will be paid for premium services such as advanced analytics. However we strongly believe in providing end users privacy controls over data is needed to create better relationships, and will keep this free for website owners.

## Is support available?
Yes, today it is available email at [support](mailto:support@consentstack.org), and will soon be moved into a dedicated web portal.

### Is anything missing from this document? Please email us @ [support](mailto:support@consentstack.org) to let us know!
