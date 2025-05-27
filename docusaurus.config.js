// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ETOS Documentation',
  tagline: '',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://github.com/adelineafgr/etos-docs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/etos-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adelineafgr', // Usually your GitHub org/user name.
  projectName: 'etos-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    {
      blog: {
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    },
  ],
],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'etl-mobile',
        path: 'docs/etl-mobile',
        routeBasePath: 'etl-mobile',
        sidebarPath: require.resolve('./sidebars/etl-mobile-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'etl-standby',
        path: 'docs/etl-standby',
        routeBasePath: 'etl-standby',
        sidebarPath: require.resolve('./sidebars/etl-standby-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'etos-stars',
        path: 'docs/etos-stars',
        routeBasePath: 'etos-stars',
        sidebarPath: require.resolve('./sidebars/etos-stars-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'erp-v1',
        path: 'docs/erp-v1',
        routeBasePath: 'erp-v1',
        sidebarPath: require.resolve('./sidebars/erp-v1-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'erp-v2',
        path: 'docs/erp-v2',
        routeBasePath: 'erp-v2',
        sidebarPath: require.resolve('./sidebars/erp-v2-sidebar.js'),
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ETOS DOCS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/etl-mobile/overview',
            label: 'ETL Mobile',
            position: 'left',
            activeBaseRegex: '/etl-mobile/',
          },
          {
            to: '/etl-standby/overview',
            label: 'ETL Standby',
            position: 'left',
            activeBaseRegex: '/etl-standby/',
          },
          {
            to: '/etos-stars/overview',
            label: 'ETOS STARS',
            position: 'left',
            activeBaseRegex: '/etos-stars/',
          },
          {
            to: '/erp-v1/overview',
            label: 'ERP-V1',
            position: 'left',
            activeBaseRegex: '/erp-v2/',
          },
          {
            to: '/erp-v2/overview',
            label: 'ERP-V2',
            position: 'left',
            activeBaseRegex: '/erp-v2/',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://erp.etos.app/helpdesk/tiket/list',
            label: 'Helpdesk',
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
                label: 'ETL Mobile',
                to: '/etl-mobile/overview',
              },
              {
                label: 'ETL Standby',
                to: '/etl-standby/overview',
              },
              {
                label: 'ETOS STARS',
                to: '/etos-stars/overview',
              },
              {
                label: 'ERP-V1',
                to: '/erp-v1/overview',
              },
              {
                label: 'ERP-V2',
                to: 'erp-v2/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'https://etos.co.id/',
              },
              {
                label: 'LinkedIn',
                href: 'https://id.linkedin.com/company/etosindonusa',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/etosindonusa/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCJ5QSPqj-vF8IHODrwHzUHw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Helpdesk',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ETOS Indonusa, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
