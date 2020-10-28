module.exports = {
  title: 'Will Willems\' Blog',
  description: 'The personal page and blog of Will Willems',
  dest: "dist",
  markdown: {
    externalLinkSymbol: false,
    anchor: {
      permalink: false, permalinkBefore: false // disable links placed before headers
    }
  },
  themeConfig: {
    homeImgSrc: '/img/headshot.jpg',
    footerAuthorImgSrc: 'https://pbs.twimg.com/profile_images/1044574924533313536/8sBWGcTJ_400x400.jpg',
    footerAuthorName: 'Will Willems',
    footerAuthorDescription: 'Web developer @ Nickolas Boyer and dabbling in digital products. Blogs about software development and more.'
  },
  plugins: {
    'feed': {
      canonical_base: 'https://willwillems.com',
      posts_directories: ['/posts/'],
    },
    'autometa': {
      site: {
        name   : 'Will Willems\' Blog',
      },
      author: {
        name   : 'Will Willems',
        twitter: 'will_rut',
      },
      canonical_base: 'https://willwillems.com',
    }
  }
}
