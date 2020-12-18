<template lang="pug">
  .blog-post-page
    header.header( :style="headerStyle")
      a.header__back-link( href="/" )
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#FF9D33" d="M10 9V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29c-.39.39-.39 1.02 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7V14.9c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
        span back
    .post
      .post__header
        h2.article-category {{ $frontmatter.category }}
        h1.article-title {{ $page.title }}
        //- p.article-description {{ $frontmatter.description }}
      .post__body
        aside( v-if="$page.headers")
          h2 Table of contents
          nav
            a( v-for="header in $page.headers" :key="header.slug" :data-header-level="header.level" :href="`#${header.slug}`") {{ header.title }}
        article
          Content
      footer.article-footer
        img.article-footer__headshot( :src="$site.themeConfig.footerAuthorImgSrc" )
        h2.article-footer__author {{$site.themeConfig.footerAuthorName}}
        p.article-footer__description {{$site.themeConfig.footerAuthorDescription}}
        // a.article-footer__share-link(href="") Share this
    .comments( v-if="hackernewsPostId && comments.length" )
      h2 Comments
        .beta-tag  beta
      .comment( v-for="comment in comments")
        .comment__title {{comment.by}}
        .comment__body(v-html="comment.text")
      a.button( :href="hackernewsLink" target="blank" ) Comment
          //-   p.article-description
          //- img.article-description__headshot( :src="$site.themeConfig.footerAuthorImgSrc" )
          //- span(v-if="$frontmatter.author") {{$frontmatter.author}} • 
          //- span(v-if="$frontmatter.date") {{getHumanReadableDate($frontmatter.date)}} • 
          //- span(v-if="$frontmatter.duration") {{$frontmatter.duration}} read

  </div>
</template>

<script>
export default {
  name: "Layout",
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    this.getComments()
  },
  methods: {
    getHumanReadableDate (dateArg) {
      return (new Date(dateArg)).toUTCString().slice(5, 16)
    },
    getComments () {
      if (!this.hackernewsPostId) return
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${this.hackernewsPostId}.json`)
        .then(data => data.json())
        .then(json => Promise.all(json.kids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(d => d.json()))))
        .then(comments => this.comments = comments)
    },
  },
  computed: {
    headerStyle () {
      return this.$frontmatter.img
        ? `background-image: linear-gradient(180deg, rgba(29,28,27,0.00) 0%, #1D1C1B 100%), url("${this.$frontmatter.img}");`
        : `background-image: linear-gradient(180deg, rgba(29,28,27,0.00) 0%, #1D1C1B 100%), linear-gradient(225deg, #D73A3A 0%, #DD7F28 100%);`
    },
    hackernewsPostId () {
      return this.$frontmatter.hackernewsPostId
    },
    hackernewsLink () {
      return `https://news.ycombinator.com/item?id=${this.hackernewsPostId}`
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";
@import "../styles/mixins.scss";

.blog-post-page {
  background-color: #1D1C1B;
  color: #EBE7E3;
  font-family: Arial, sans-serif;
}

.header {
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-blend-mode: multiply;

  &__back-link {
    position: absolute;
    top: 26px;
    left: 26px;
    text-decoration: none;
    opacity: 0.5;

    span {
      display: block;
      font-size: .5rem;
      text-align: center;
    }

    &:hover {
      opacity: 1;
    }
  }
}

.post {
  max-width: 1120px;
  margin: auto;
  margin-top: -240px;
  padding: 80px 20px;

  // &__header {
  //   margin-bottom: .75rem;
  // }

  &__body {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  article, &__header {
    max-width: calc(100% - 320px - 1.5rem);

    @media (max-width: $sm-break-point) {
      width: 100%;
      max-width: unset;
    }
  }

  aside {
    position: sticky;
    top: 40px;
    align-self: flex-start;
    min-width: calc(320px - 1.5rem);
    margin-left: 3rem;
    opacity: 1;

    h2 {
      font-size: 1rem;
      margin: .4rem 0 .85rem 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    nav a {
      display: block;
      font-size: .75rem;
      font-weight: 400;
      line-height: 1em;
      margin: .75rem 0;
      text-decoration: none;

      &[data-header-level] {
        margin-left: .75rem;
      }

      &[data-header-level="2"] {
        margin-left: .25rem;
      }

      &[data-header-level="1"] {
        margin-left: 0rem;
      }

      &:hover {
        color: #FF9D33;
      }
    }

    @media (max-width: $sm-break-point) {
      display: none;
    }
  }
}

.article-title {
  font-size: 2rem;
  text-transform: uppercase;
  margin: .3em 0;
  letter-spacing: 1px;
}

.article-category {
  font-size: 1rem;
  color: #FF9D33;
  margin: 0;
}

article {
  font-family: 'Georgia', Times, serif;
  color: #EBE7E3;

  & /deep/ h1:first-of-type { // hide first title, we're inserting that manually
    display: none;
  }

  & /deep/ h1, & /deep/ h2, & /deep/ h3 {
    font-family: Arial, sans-serif;
    color: white;
  }

  & /deep/ p:first-of-type {
    font-size: 16px;
    font-weight: 600;
    margin: .25rem 0;
    padding-bottom: 1em;
    font-family: Arial, sans-serif;
  }

  & /deep/ p, & /deep/ li {
    line-height: 1.65em;
    font-weight: 500;
  }

  & /deep/ li {
    margin: .25rem 0;
  }

  & /deep/ h2 {
    margin-top: 1.7em;
  }

  & /deep/ img {
    width: 100%;
    max-height: 720px;
    object-fit: contain;
  }

  & /deep/ a {
    @include accent-for('border-bottom-color');
    color: inherit;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  & /deep/ div { // hide first title, we're inserting that manually
    font-family: Arial, Helvetica, sans-serif;
  }
}

.article-footer {
  position: relative;
  margin: 80px 0px;
  padding: 40px 0;
  border-top: rgba(44, 44, 44, 0.07) 1px solid;
  border-bottom: rgba(44, 44, 44, 0.07) 1px solid;
  text-align: left;
  
  &__headshot {
    $headshot-size: 100px;

    position: absolute;
    top: -1 * ($headshot-size / 2);
    left: calc(50% - #{($headshot-size / 2)});
    width: $headshot-size;
    height: $headshot-size;
    border-radius: 50%;
    border: solid #292726 10px;
    background-color: white;
    object-fit: cover;
  }

  &__author {
    font-size: 1.1rem;
    font-weight: bold;
  }

  &__description {
    opacity: 0.6;
    font-size: 0.8rem;
    line-height: 1.8em;
    max-width: 480px;
  }

  &__share-link {
    font-size: 0.8rem;
    font-weight: 600;
  }
}

.beta-tag {
  display: inline;
  font-size: 0.6rem;
  font-weight: 400;
  color: rgb(238, 66, 66);
}

.comments {
  max-width: 1120px;;
  margin: auto;
  margin-top: -240px;
  padding: 80px 20px;
}

.comment {
  max-width: 800px;
  text-align: left;
  background-color: #272727;
  border-radius: 3px;
  margin: 1rem 0;

  &__title {
    font-weight: 600;
    font-size: 1rem;
    line-height: 2em;
    padding: 0 24px;
  }

  &__body {
    font-size: 0.8rem;
    opacity: 1;
    padding: 18px 24px;
  }
}
</style>
