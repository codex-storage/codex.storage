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
          id: 'root-pages',
          breadcrumbs: false, // TODO: not working
          routeBasePath: '/',
          path: 'root-pages',
        },
        generated: {
          jobList: {
            jobBoard: 'codex',
          },
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
    [
      '@acid-info/docusaurus-umami',
      {
        websiteId: '31dab6fa-8450-4098-aa53-70cea9ae72cf',
        scriptSrc: 'https://umami.bi.status.im/script.js',
        dataDomains: 'codex.storage,codex-storage.vercel.app',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: 'search',
          },
          {
            label: 'About Codex',
            to: '/about',
          },
          {
            label: 'Community',
            to: '/community',
          },
          {
            title: 'Codex GitHub repository',
            href: 'https://github.com/codex-storage',
            position: 'right',
            className: 'header-github-link',
            'data-umami-event': 'Github redirection',
            'data-umami-event-source': 'navbar',
          },
          {
            label: 'Docs',
            href: 'https://docs.codex.storage',
          },
          {
            label: 'Blog',
            href: 'https://blog.codex.storage',
          },
          {
            label: 'News',
            to: '/news',
          },
          {
            label: 'Join Us',
            href: '/join-us',
          },
        ],
      },
      footer: {
        copyright: 'Codex',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/Codex_storage',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/codex-storage',
                label: 'Discord',
              },
              {
                href: 'https://www.youtube.com/@CodexStorage',
                label: 'YouTube',
              },
              {
                href: 'https://www.linkedin.com/company/codexstorage/',
                label: 'LinkedIn',
              },
              {
                href: 'https://far.quest/codexstorage',
                label: 'Farcaster',
              },
              {
                href: 'https://blog.codex.storage',
                label: 'Blog',
              },
            ],
          },
          {
            items: [
              {
                href: 'https://docs.codex.storage',
                label: 'Docs',
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
                to: '/join-us',
                label: 'Work with us',
              },
              {
                href: 'https://guide.codex.storage/',
                label: 'Brand Guidelines',
              },
            ],
          },
          {
            items: [
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
