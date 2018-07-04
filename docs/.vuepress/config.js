module.exports = {
  title: "Consent Stack",
  description: "Documentation, articles and general resources for the ConsentStack project.",
  base: "/docs/",
  dest: "dist/docs",
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/'}
    ],
    sidebar: [{
      title: 'Guide',
      collapsable: true,
      children: [
        '/guide/',
        '/guide/install'
      ],
    }],
    // displayAllHeaders: true,
  }
}
