<template lang="pug">
  .mobile-padding
    .home
      section.section.article-section( id="#articles" )
        h1.section__header Articles
        .section__body
          .link-list( v-for="(list, key) in blogPosts" )
            h3.link-list__title {{key}}
            ul.link-list__list
              li( v-for="page in list" )
                a.article-link( :href="page.path" )
                  span.article-link__title {{page.title}}
</template>

<script>
import groupBy   from 'lodash/groupBy'

export default {
  name: 'Posts',
  props: {
    msg: String
  },
  computed: {
    blogPosts () {
      return groupBy(
        this.$site.pages.filter(post => post.path.startsWith('/posts/') && (post.path !== '/posts/')),
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

.mobile-padding { padding: 0 10px; overflow-x: hidden; }

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

  &__sub-header {
    font-size: 1.15rem;
    color: #d93232;
    margin: none;
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

.article-section .section__sub-header:first-of-type {
  visibility: hidden;
}


.article-link {
  @include accent-for('border-bottom-color');
  text-decoration: none;
  color: inherit;
  margin: .3em 0;
  line-height: 2em;
  padding-bottom: 1px;
  border-bottom-width: 4px;
  border-bottom-style: solid;

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
</style>
