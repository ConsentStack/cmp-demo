module.exports = {
  title: "ConsentStack",
  description: "Documentation, articles and general resources for the ConsentStack project.",
  base: "/docs/",
  dest: "dist/docs",
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://quizzical-franklin-8da6e0.netlify.com/'},
      { text: 'CMP', link: '/cmp/'}
    ],
    sidebar: [{
      title: 'CMP',
      collapsable: true,
      children: [
        '/cmp/',
        '/cmp/install',
        '/cmp/custom'
      ],
    }],
    // displayAllHeaders: true, update on v0.11
  }
}
