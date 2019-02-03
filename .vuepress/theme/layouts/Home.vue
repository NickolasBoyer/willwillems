<template lang="pug">
  .home
    .section.welcome-section
      .personal-image
        img( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover.jpg'" )
      .text-section
        strong.text-section__sub-header Hi there, I'm
        h1.text-section__title Will Willems
        p.text-section__body Designer developer and web development consultant @NickolasBoyer. I’m mainly working with Vue.js these days with a strong focus on PWA's.
      #writings.info-section
        .info-section__number 01
        Content( slot-key="writings" ).info-section__body
      #projects.info-section
        .info-section__number 02
        Content( slot-key="projects" ).info-section__body
      #contact.info-section
        .info-section__number 03
        Content( slot-key="contact" ).info-section__body
      .article-list
        h1.article-list__title Writings
          span.article-list__title-beta-tag beta
        // .tag-container
          span.tag • Vue
        .article-card-container
          a.article-link( v-for="page in previewPosts" :href="page.path" )
            b.article-link__title {{page.title}}
            span.article-link__date {{page.frontmatter.date}}
            // ArticlePreviewCard(
              :link="page.path"
              :title="page.title"
              :img="page.frontmatter.img"
              :date="page.frontmatter.date"
              )
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/vars.scss";

.welcome-section {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr repeat(11, 90px) 1fr;
  grid-template-rows: 120px 310px 100px auto auto 70px;
  grid-column-gap: 0px;
  grid-template-areas:
    ".              .             .             .             .             .             .             .             .             .             .             .             .             "
    ".              cover-img     cover-img     cover-img     cover-img     cover-img     cover-img     .             cover-text    cover-text    cover-text    cover-text    .             "
    ".              .             .             .             .             .             .             .             .             .             .             .             .             "
    ".              writing-text  writing-text  writing-text  .             projects-text projects-text projects-text .             contact-text  contact-text  contact-text  .             "
    ".              blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    blog-posts    .             "
    ".              .             .             .             .             .             .             .             .             .             .             .             .             ";

  @media (max-width: $md-break-point) {
    display: initial;
  }
}

.personal-image {
  grid-area: cover-img;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}


.text-section {
  grid-area: cover-text;
  margin: 50px 10px;
  max-width: 500px;

  @media (max-width: $sm-break-point) {
    margin: 30px 20px;
  }

  &__sub-header {
    color: $prim-gold;
  }

  &__title {
    margin: 10px 0 5px 0;
    font-size: 3rem;
  }

  &__body {
    margin: 0;
    line-height: 1.8em;
    opacity: 0.85;
    font-size: 0.9rem
  }
}

.info-section {
  margin: 10px;
  @media (max-width: $sm-break-point) {
    margin: 20px;
  }

  &#writings {
    grid-area: writing-text;
  }
  &#projects {
    grid-area: projects-text;
  }
  &#contact {
    grid-area: contact-text;
  }
  &__number {
    color: $prim-gold;
    font-size: 0.8rem;
    font-weight: bold;
    // font-stretch: condensed;
    margin-bottom: 10px;
  }
  &__body {
    & /deep/ h2 {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 5px 0;
      padding: none;
    }
    & /deep/ p {
      font-size: 0.9rem;
      line-height: 1.8em;
      margin: 0;
      opacity: 0.80;
    }
  }
}

.article-list {
  grid-area: blog-posts;
  padding-top: 50px;

  &__title {
    text-align: center;
    margin: 20px 0;
  }

  &__title-beta-tag {
    font-size: 0.8rem;
    color: $prim-gold;
    margin: 0 5px;
  }
}

.article-card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // overflow-x: scroll;
  max-width: 600px;
  margin: 0 auto;

  .article-link {
    margin: .5em 0;
    border-bottom: none;

    &__title {
      border-bottom: 2px solid $prim-gold;;
    }

    &__date {
      float: right;
      opacity: 0.4;
      font-size: 0.8em;
      font-weight: 100;
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
</style>
