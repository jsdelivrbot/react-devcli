const users = [
    {
        caption: 'Searching...',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/docusaurus.svg'.
        image: '/img/searching.svg',
        infoLink: 'https://www.npmjs.com/package/react-devcli',
        pinned: true,
    },
];

const siteConfig = {
    title: 'React Dev CLI',
    tagline: '🗡 Generate, test, document and share your components',
    url: 'https://steevehook.github.io',
    baseUrl: '/',
    projectName: 'react-devcli',
    organizationName: 'steevehook',

    headerLinks: [
        {doc: 'getting-started/installation', label: 'Docs'},
        {doc: 'index', label: 'API'},
        { href: 'https://github.com/steevehook/react-devcli', label: 'GitHub' },
        {page: 'help', label: 'Help'},
        {blog: true, label: 'Blog'},
        { languages: true }
    ],
    users,
    headerIcon: 'img/logo.svg',
    footerIcon: 'img/logo-white.svg',
    favicon: 'img/favicon.png',
    colors: {
        primaryColor: '#64B5F6',
        secondaryColor: '#2196F3',
    },

    /* custom fonts for website */
    /*fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },*/

    copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Steve Hook',

    highlight: {
        theme: 'default',
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate',
    ogImage: 'img/docusaurus.png',
    twitterImage: 'img/docusaurus.png',

    repoUrl: 'https://github.com/steevehook/react-devcli',
};

module.exports = siteConfig;
