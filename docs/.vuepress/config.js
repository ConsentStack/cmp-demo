module.exports = {
  title: "ConsentStack",
  description: "Documentation, articles and general resources for the ConsentStack project.",
  base: "/docs/",
  dest: "dist/docs",
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://consentstack.org/'},
      { text: 'CMP', link: '/cmp/'}
    ],
    sidebar: [{
      title: 'CMP',
      collapsable: true,
      children: [
        '/cmp/',
        '/cmp/install',
        '/cmp/custom',
        '/cmp/tag-manager',
        '/cmp/faq'
      ],
    }],
    // displayAllHeaders: true, update on v0.11
  }
}
