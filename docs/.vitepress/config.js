module.exports = {
  title: "w3bprivacy",
  description: "Just doing something about web3.0,sample and safe access",
  base: "/w3bprivacy/",
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },

    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: "w3bprivacy",
    logo: "/logo.svg",
    nav: [
      { text: "Team", link: "/team" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "#" },
          { text: "Item B", link: "#" },
          { text: "Item C", link: "#" },
        ],
      },
      { text: "Demos", link: "/demo" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    sidebar: [
      {
        text: "Section Title A",
        collapsible: true,
        items: [
          { text: "Item A", link: "#" },
          { text: "Item B", link: "#" },
        ],
      },
      {
        text: "Section Title B",
        items: [
          { text: "Item C", link: "#" },
          { text: "Item D", link: "#" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present hz",
    },
  },
};
