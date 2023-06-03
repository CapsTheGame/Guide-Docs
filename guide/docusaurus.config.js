// TODO: Create social card and replace default
// TODO: Add search engine after going public

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  noIndex: true, // TEMP robots.txt equialent, Defaults to `false`

  title: 'CAPS • Guide & Docs',
  tagline: 'Get complete information about how to start play CAPS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.mycaps.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: undefined,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        // Use system settings
        respectPrefersColorScheme: true,
      },
      // TEMP, Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'CAPS Logo',
          src: 'img/caps-logo.svg',
        },
        items: [
          {
            type: 'doc',
            label: 'Guide & Docs',
            docId: 'introduction',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://mycaps.app',
            label: 'App',
            position: 'right',
          },
          {
            href: 'https://github.com/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        // Only for sidebar table of contents
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Explore',
            items: [
              {
                label: 'Guide & Docs',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/CapsWorldChat',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/WAY5ZDhBMW',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CollectTheCaps',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'App',
                href: 'https://mycaps.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
            ],
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
