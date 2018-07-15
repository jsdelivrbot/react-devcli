/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
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
    tagline: '✨ Generate, test, document and share your components',
    // url: 'https://github.com/steevehook/react-devcli',
    // baseUrl: '/',
    baseUrl: '/react-devcli',
    projectName: 'react-devcli',
    organizationName: 'steevehook',

    headerLinks: [
        {doc: 'doc1', label: 'Docs'},
        {doc: 'doc4', label: 'API'},
        { href: 'https://github.com/steevehook/react-devcli', label: 'GitHub' },
        {page: 'help', label: 'Help'},
        {blog: true, label: 'Blog'},
        { languages: true }
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/logo.svg',
    footerIcon: 'img/logo-white.svg',
    favicon: 'img/favicon.png',

    /* colors for website */
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

    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Steve Hook',

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags
    scripts: ['https://buttons.github.io/buttons.js'],

    /* On page navigation for the current documentation page */
    onPageNav: 'separate',

    /* Open Graph and Twitter card images */
    ogImage: 'img/docusaurus.png',
    twitterImage: 'img/docusaurus.png',

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/steevehook/react-devcli',
};

module.exports = siteConfig;
