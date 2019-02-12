<template lang="pug">
  .home
    section.welcome-section
      .personal-image
        span ☺︎
        // img( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover.jpg'" )
      .text-section
        strong.text-section__sub-header Hi there, I'm
        h1.text-section__title Will Willems
        p.text-section__body Designer developer and web development consultant @NickolasBoyer. I’m mainly working with Vue.js these days with a strong focus on PWA's.
    section.article-section
      h1.article-section__title Articles
      .article-link-container
        ul
          li( v-for="page in previewPosts" )
            a.article-link( :href="page.path" )
              span.article-link__title 
                b {{page.title}}
              // .article-link__date {{getHumanReadableDate(page.frontmatter.date)}}
    section.projects-section
      h1.article-section__title Projects
      .project-item-container
        a.project-card( v-for="page in previewPosts" :href="page.path" )
          .project-card__title 
            b {{page.title}}
          .project-card__date {{getHumanReadableDate(page.frontmatter.date)}}
        p
    footer.page-footer
      a( href="mailto:me@willwillems.com" ) Contact
      span •
      a( href="/rss.xml" ) RSS
      span •
      a( href="https://twitter.com/rut_will" ) Twitter
</template>

<script>
import ArticlePreviewCard from '../components/ArticlePreviewCard.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ArticlePreviewCard
  },
  computed: {
    previewPosts () {
      return this.$site.pages
        .filter(post => !!post.frontmatter.img)
        .slice(0, 10)
    }
  },
  methods: {
    getHumanReadableDate (dateArg) {
      return (new Date(dateArg)).toUTCString().slice(5, 16)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/vars.scss";

.home {
  background-color: rgb(12, 12, 12);
  color: white;
  padding: 120px 240px;
}

.welcome-section {
  
}

.personal-image {
  margin: 10px;
  font-size: 8rem;
}


.text-section {
  margin: 10px;
  max-width: 500px;

  &__sub-header {
    color: $prim-gold;
  }

  &__title {
    margin: 10px 0 5px 0;
    font-size: 3rem;
    color: rgb(236, 236, 236) !important;
  }

  &__body {
    margin: 0;
    line-height: 1.8em;
    opacity: 0.85;
    font-size: 0.9rem
  }
}


.article-section {
  grid-area: blog-posts;
  padding: 30px 0;
  
  &__title {
    margin: 20px 0;
    color: rgb(236, 236, 236) !important;
  }

  &__title-beta-tag {
    font-size: 0.8rem;
    color: $prim-gold;
    margin: 0 5px;
  }
}

.article-link-container {
  font-family: 'Courier', Helvetica, 'SF Pro Text', Arial, sans-serif;


  .article-link {
    margin: .3em 0;
    border-bottom: none;
    line-height: 2em;

    &__title {
      b {
        border-bottom: 2px solid $prim-gold;
      }
    }

    &__date {
      opacity: 0.6;
      font-size: 0.7em;
      font-weight: 100;
      margin: 0 20px;
    }
  }

}

.tag-container {
  text-align: center;
  margin: -10px 0 10px 0;

  .tag {
    font-size: .7em;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: pink;
    font-weight: bold;
  }
}

.page-footer {
  padding: 4em 0;
  text-align: center;
  opacity: 0.6;
  font-size: 0.8rem;

  a {
    font-weight: bold;
    border-bottom: solid grey 1px;
    margin: 0 .4em;

    &:hover {
      opacity: 1;
      border-bottom: solid $prim-gold 2px;
    }
  }
}
</style>
