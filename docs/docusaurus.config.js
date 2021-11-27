// @ts-check

const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const lightCodeTheme = require('prism-react-renderer/themes/github');

const packageJSON = require('../package.json');

const { name: title, repository, homepage, description, author } = packageJSON;

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
  url: homepage,
  baseUrl: process.env.NODE_ENV === 'production' ? '/fnts/' : '/',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebar.config.js'),
          editUrl: `${repository}/docs`,
          routeBasePath: '/',
        },
        theme: {
          customCss: [require.resolve('./src/theme/palette.css')]
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
            href: repository,
            label: 'GitHub',
            position: 'right',
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
