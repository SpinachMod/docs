/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SpinachMod Documentation',
  url: 'https://spinachmod.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'SpinachMod',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'SpinachMod Documentation',
      items: [
        {
          href: 'https://types.nitrobolt.org/',
          label: 'NitroBolt Type Reference',
          position: 'left'
        },
        {
          href: 'https://spinachmod.github.io/',
          label: 'SpinachMod',
          position: 'right'
        },
        {
          href: 'https://github.com/SpinachMod',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
      additionalLanguages: ['json']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
