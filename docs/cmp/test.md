# Testing the CMP

**You are able to test the CMP on your own webpage without completing an integration.**

The process for this is very simple, on [Google Chrome](https://www.google.com/chrome/) you simply need to **Add a Bookmark** and copy and paste the below snippet of code into the address bar. When you want to test the CMP, simply navigate to the page, and then click on the bookmark.

```javascript
javascript:(function () {let d = document, s = d.createElement('script');s.id = 'pluto-cmp-js-src';s.src = '//pluto.mgr.consensu.org/cmp';(d.head || d.body).appendChild(s)}());
```
