// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Physical & Robotics",
  tagline: "Advanced Physical AI & Humanoid Robotics",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // IMPORTANT: GitHub Pages URL
  url: "https://AyeshaNasirWebDeveloper.github.io",

  // IMPORTANT: Repo name (matches exactly your GitHub repo)
  baseUrl: "/Heckathon---AI-Book/",

  organizationName: "AyeshaNasirWebDeveloper",
  projectName: "Heckathon---AI-Book",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "AI Physical & Robotics",
      logo: {
        alt: "AI Robotics Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/modules", label: "Modules", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/AyeshaNasirWebDeveloper/Heckathon---AI-Book",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Tutorial", to: "/docs/intro" }],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            {
              label: "GitHub",
              href: "https://github.com/AyeshaNasirWebDeveloper/Heckathon---AI-Book",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Physical & Robotics.`,
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
