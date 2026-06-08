import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GearFlow Docs',
  tagline: 'The operator manual for AV and theatre rental companies',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
    faster: { swcJsLoader: false },
  },

  url: 'https://twotoned.github.io',
  baseUrl: '/gearflow-docs/',
  trailingSlash: false,

  organizationName: 'TwoToned',
  projectName: 'gearflow-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/TwoToned/gearflow-docs/tree/master/',
          showLastUpdateTime: false,
        },
        blog: false, // No blog — just docs
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/gearflow-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'GearFlow Docs',
      logo: {
        alt: 'GearFlow Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          href: 'https://gearflow.app',
          label: 'gearflow.app',
          position: 'right',
        },
        {
          href: 'https://github.com/TwoToned/gearflow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Inventory',
              to: '/docs/inventory/overview',
            },
            {
              label: 'Projects',
              to: '/docs/projects/overview',
            },
            {
              label: 'Warehouse',
              to: '/docs/warehouse/overview',
            },
          ],
        },
        {
          title: 'GearFlow',
          items: [
            {
              label: 'Website',
              href: 'https://gearflow.app',
            },
            {
              label: 'Sign In',
              href: 'https://gearflow.app/login',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TwoToned/gearflow',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Two Toned Productions. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
