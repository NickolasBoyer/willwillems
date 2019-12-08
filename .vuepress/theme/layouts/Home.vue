<template lang="pug">
  .mobile-padding
    .home
      section.section.welcome-section
        .welcome-text
          strong.welcome-text__sub-header Hi there, I'm
          h1.welcome-text__title
            div Will
            div Willems
          Content.welcome-text__body
        img.personal-image( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover-dark.png'" )
      section.section.article-sections( id="#articles" )
        h1.section__header Articles
        .section__body
          .link-list( v-for="(list, key) in blogPosts" )
            h3.link-list__title {{key}}
            ul.link-list__list
              li( v-for="page in list" )
                a.article-link( :href="page.path" )
                  span.article-link__title {{page.title}}
      section.section.projects-section( id="#projects" )
        h1.section__header Projects
        .section__body.section__body--horizontal-flow
          a.project-card-container(
            v-for="project in previewProjects" 
            :href="project.frontmatter.projectUrl" 
            :style="`background-image: url('${darkMode ? (project.frontmatter.iconDark || project.frontmatter.icon) : project.frontmatter.icon}');`"
          )
            .project-card
      section.section.about-section( id="#about" )
        h1.section__header About
        Content( slot-key="about" ).section__body
      section.section.contact-section( id="#contact" )
        h1.section__header.contact-section__header Contact
        ul.contact-section__icons
          li
            span.contact-section__icon.contact-section__icon--arrow
              img( src="../../assets/arrow.svg" )
          li
            a( href="mailto:me@willwillems.com" title="Email me" ).contact-section__icon.contact-section__icon--link
              img( src="../../assets/email.svg" )
          li
            a( href="https://twitter.com/will_rut" title="DM me on Twitter" ).contact-section__icon.contact-section__icon--link
              img( src="../../assets/twitter.svg" )
      footer.page-footer
        a( href="mailto:me@willwillems.com" ) Contact
        a( href="/rss.xml" ) RSS
        a( href="https://twitter.com/rut_will" ) Twitter
</template>

<script>
import groupBy from 'lodash/groupBy'

import ArticlePreviewCard from '../components/ArticlePreviewCard.vue'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    ArticlePreviewCard
  },
  data () {
    return {
      darkMode: true,
    }
  },
  mounted () {
    // this.darkMode = !!window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  computed: {
    blogPosts () {
      return groupBy(
          this.$site.pages.filter(post => post.path.startsWith('/posts/')),
          page => page.frontmatter.category
        )
    },
    previewProjects () {
      return this.$site.pages
        .filter(post => post.path.startsWith('/projects/'))
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";
@import "../styles/mixins.scss";

.mobile-padding { padding: 0 10px; }

.home {
  padding: 0; // section blocks take care of padding
  max-width: 960px;
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: 600;
}

.section {
  padding: 4rem 0;

  &__header {
    font-size: calc(4rem + 2.5vw);
  }

  &__body {
    // divide page in two columns but collapse
    // when columns get samller than 360px
    column-count: 2;
    column-width: 360px;

    & > *, & /deep/ > * {
      margin: 10px; // give al chidren te same padding
      display: inline-block; // do not break elements on column switch
      min-width: 340px // do not create super small columns
    }

    &--horizontal-flow {
      column-span: all;
      display: initial;
    }
  }
}

.personal-image {
  width: 500px;
  max-width: 100%;
  object-fit: contain
}

.welcome-section {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  min-height: 100vh;
}

.welcome-text {
  margin: 10px;
  max-width: 400px;

  &__sub-header {
    
  }

  &__title {
    margin: 10px 0 0 0;
    font-size: 6rem;
    line-height: 1em;
    color: inherit;

    div:first-child {
      @include accent-for('color');
    }
  }

  &__body {
    & /deep/ h1 {
      display: none; // hide titles injected into content title is harcoded
    }

    & /deep/ p:first-of-type {
      margin-top: 0;
    }
  }
}

.link-list {
  margin: 10px;

  &__title {
    // font-family: monospace;
  }

  &__list {
    list-style: square;
    margin: 10px 0;
  }
}


.article-link {
  color: inherit;
  margin: .3em 0;
  line-height: 2em;

  &__title {

    &:hover {
      animation: spacecake .5s infinite;

      @keyframes spacecake {
        0% { border-bottom-color: red; }
        10% { border-bottom-color: blue; }
        20% { border-bottom-color: yellow; }
        30% { border-bottom-color: violet; }
        40% { border-bottom-color: greenyellow; }
        50% { border-bottom-color: crimson; }
        60% { border-bottom-color: paleturquoise; }
        70% { border-bottom-color: orchid; }
        80% { border-bottom-color: orange; }
        90% { border-bottom-color: fuchsia; }
        100% { border-bottom-color: green; }
      }
    }
  }
}

.project-card-container {
  $size: calc( 33% - 20px );
  height: 0px;
  width: $size;
  padding-bottom: $size;
  min-width: unset;

  background-color: rgba(128, 128, 128, 0.2);
  border: none;
  border-radius: 20px;
  margin: 10px;
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;

  transition: transform 0.1s ease-out;

  &:hover {
    // transform: scale(1.05);
    animation: pop .3s ease-out;
  }

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
}

.about-text-block {
  display: inline-block;
  margin: 10px
}

.contact-section {
  &__header {
    margin-bottom: -.2em;
  }
  &__icons {
    margin: 0;
    padding-left: 56px;
    list-style: none;

    li {
      display: inline-block;
    }
  }

  &__icon {
    display: inline-block;
    margin: 0 8px;
    height: 56px;
    width: 56px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      transition: transform .3s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    &--arrow {
      margin: 0;
      img {
        margin-bottom: 6px;
      }
    }

    &--link {
      text-decoration: none;
      border: solid 3px $accent-color;
      border-radius: 50%;

      img {
        padding: 12px;
      }
    }
  }
}

.page-footer {
  padding: 4em 0;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.8;

  a {
    font-weight: bold;
    margin: 0 2em;
    opacity: .6;
    border: none;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
