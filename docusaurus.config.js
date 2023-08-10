// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codex',
  url: 'https://codex.storage/',
  baseUrl: '/',

  customFields: {},

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Codex',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: false,
                },
              },
            },
          },
        },
        docs: {
          routeBasePath: '/',
          path: 'root-pages',
        },
        og: {},
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        routeBasePath: '/about',
        path: 'about',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: 'search',
          },
          {
            label: 'About',
            to: '/about',
          },
          {
            label: 'Docs',
            to: 'https://docs.codex.storage',
          },
          {
            label: 'Blog',
            href: 'https://blog.codex.storage',
          },
          {
            label: 'Github',
            href: 'https://github.com/codex-storage',
          },
        ],
      },
      footer: {
        copyright: 'Codex @2023<br/>All Rights Reserved.',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/Codex_storage',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/2NXGrsqmDq',
                label: 'Discord',
              },
              {
                href: 'https://docs.codex.storage',
                label: 'Docs',
              },
              {
                href: 'https://blog.codex.storage',
                label: 'Blog',
              },
              {
                href: 'https://github.com/codex-storage',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                href: 'https://jobs.status.im/',
                label: 'Work with us',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
