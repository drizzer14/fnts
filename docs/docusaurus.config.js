// @ts-check

const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const lightCodeTheme = require('prism-react-renderer/themes/github');

const packageJSON = require('../package.json');

const { name: title, version, repository, homepage, description, author } = packageJSON;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  favicon: '/favicon.ico',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  organizationName: author,
  projectName: title,
  deploymentBranch: 'gh-pages',
  url: homepage.slice(0, -6),
  baseUrl: '/fnts',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${repository}/docs`,
          routeBasePath: '/',
        },
        theme: {
          customCss: [require.resolve('./src/theme/palette.css'), require.resolve('./src/css/custom.css')]
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      respectPrefersColorScheme: true,
      navbar: {
        title,
        logo: {
          alt: title,
          src: '/logo.svg',
        },
        items: [
          {
            label: `v${version}`,
            position: 'right',
            href: `https://github.com/drizzer14/fnts/releases/tag/v${version}`
          },
          {
            href: repository,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
