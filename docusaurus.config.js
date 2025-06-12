// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ETOS Documentation',
  tagline: '',
  favicon: 'img/logo.ico',

  url: 'https://adelineafgr.github.io',
  baseUrl: '/etos-docs/',
  organizationName: 'adelineafgr',
  projectName: 'etos-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ✅ Preset utama hanya untuk blog dan theme
  presets: [
    [
      'classic',
      {
        docs: false, // disable default docs
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // ✅ Tambahkan tema mermaid untuk diagram
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  // ✅ Multiple docs plugin
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'user',
        path: 'docs/user',
        routeBasePath: 'user',
        sidebarPath: require.resolve('./sidebars/sidebar-user.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pm',
        path: 'docs/pm',
        routeBasePath: 'pm', 
        sidebarPath: require.resolve('./sidebars/sidebar-pm.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tech',
        path: 'docs/tech',
        routeBasePath: 'tech', 
        sidebarPath: require.resolve('./sidebars/sidebar-tech.js'),
      }, 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ETOS DOCS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            docsPluginId: 'pm',
            sidebarId: 'default',
            position: 'left',
            label: 'Project Management',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'tech',
            sidebarId: 'default',
            position: 'left',
            label: 'IT Technical Guides',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'user',
            sidebarId: 'default',
            position: 'left',
            label: 'Panduan Pengguna',
          },
          
          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://erp.etos.app/helpdesk/tiket/saya',
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
              {label: 'ETL Mobile', to: '/etl-mobile/overview'},
              {label: 'ETL Standby', to: '/etl-standby/overview'},
              {label: 'ETOS STARS', to: '/etos-stars/overview'},
              {label: 'ERP-V1', to: '/erp-v1/overview'},
              {label: 'ERP-V2', to: '/erp-v2/overview'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Website', href: 'https://etos.co.id/'},
              {label: 'LinkedIn', href: 'https://id.linkedin.com/company/etosindonusa'},
              {label: 'Instagram', href: 'https://www.instagram.com/etosindonusa/'},
              {label: 'Youtube', href: 'https://www.youtube.com/channel/UCJ5QSPqj-vF8IHODrwHzUHw'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'Helpdesk', href: 'https://erp.etos.app/helpdesk/tiket/saya'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ETOS Indonusa, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: { // <--- BAGIAN INI DITAMBAHKAN
        theme: {
          light: 'neutral', // Tema default untuk mode terang
          dark: 'forest',   // Tema default untuk mode gelap
        },
      },
    }),
};

export default config;
