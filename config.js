'use strict';

module.exports = {
  url: 'https://lekszander.blog',
  pathPrefix: '/',
  title: 'Lekszander\'s Blog',
  subtitle: 'This blog is dedicated to sharing my experiences as an indie game developer.',
  copyright: '© 2019 Lekszander\'s Blog.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-151365523-1',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'Portfolio',
      path: '/pages/portfolio',
    },
    {
      label: 'About',
      path: '/pages/about'
    },
    {
      label: 'Contact',
      path: '/pages/contact'
    }
  ],
  author: {
    name: 'Lekszander\'s Blog',
    photo: '/photo.jpg',
    bio: 'This blog is dedicated to sharing my experiences as an indie game developer.',
    contacts: {
      email: 'lekszander.dev@gmail.com',
      twitter: 'lekszander',
      github: 'lekszander',
      rss: 'rss.xml',
      linkedin: 'alexandremg',
    }
  }
};