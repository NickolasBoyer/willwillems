<template lang="pug">
  .home
    section.section.welcome-section
      .section__body
        div
          .personal-image
            span ☺︎
            // img( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover.jpg'" )
          .welcome-text
            strong.welcome-text__sub-header Hi there, I'm
            h1.welcome-text__title
              span( style="color: lightgray;" ) Will
              br
              span Willems
            p.welcome-text__body Designer developer and web development consultant @NickolasBoyer. I’m mainly working with Vue.js these days with a strong focus on PWA's.
    section.section.article-section
      h1.section__header Articles
      .section__body
        b Vue.js
        ul.link-list
          li( v-for="page in previewPosts" )
            a.article-link( :href="page.path" )
              span.article-link__title 
                b {{page.title}}
              // .article-link__date {{getHumanReadableDate(page.frontmatter.date)}}
        b Personal
        ul.link-list
          li( v-for="page in previewPosts" )
            a.article-link( :href="page.path" )
              span.article-link__title 
                b {{page.title}}
              // .article-link__date {{getHumanReadableDate(page.frontmatter.date)}}
    section.section.projects-section
      h1.section__header Projects
      .section__body.section__body--horizontal-flow
        a.project-card-container( v-for="project in [...previewProjects, ...previewProjects]" :href="project.path" :style="`background-image: url('${project.frontmatter.icon || '/img/icon/rssdigest.svg'}');`" )
          .project-card
        p
    section.section.about-section
      h1.section__header About
      .section__body
        p.about-text-block This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
        p.about-text-block If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).
        p.about-text-block By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
        p.about-text-block If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children.
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
        .filter(post => post.path.startsWith('/posts/'))
        .slice(0, 10)
    },
    previewProjects () {
      return this.$site.pages
        .filter(post => post.path.startsWith('/projects/'))
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

$bg-color: black;
$accent-color: #F5A623;

.home {
  background-color: $bg-color;// $bg-black;
  color: $accent-color;
  padding: 40px 0;
  max-width: 960px;
  margin: 0 auto;
  font-size: 24px;
}

.section {
  padding: 4rem 0;
  min-height: 100vh;

  &__header {
    font-size: 5rem;
    // &:hover {
    //   animation: spacecake1 .5s infinite;
    // }

    // @keyframes spacecake1 {
    //   0% { color: red; }
    //   10% { color: blue; }
    //   20% { color: yellow; }
    //   30% { color: violet; }
    //   40% { color: greenyellow; }
    //   50% { color: crimson; }
    //   60% { color: paleturquoise; }
    //   70% { color: orchid; }
    //   80% { color: orange; }
    //   90% { color: fuchsia; }
    //   100% { color: green; }
    // }
  }

  &__body {
    column-count: 2;
    column-width: 400px;

    & > * {
      display: inline-block;
    }

    &--horizontal-flow {
      //columns: none;
      column-span: all;
      display: initial;
    }
  }
}

.welcome-section {
  
}

.personal-image {
  margin: 10px;
  font-size: 8rem;
}


.welcome-text {
  margin: 10px;
  max-width: 500px;

  &__sub-header {
    
  }

  &__title {
    margin: 10px 0 5px 0;
    font-size: 6rem;
    color: inherit;
  }

  &__body {
  }
}


.article-link {
  color: lightgray;
  margin: .3em 0;
  border-bottom: none;
  line-height: 2em;
  // font-family: 'Courier', Helvetica, 'SF Pro Text', Arial, sans-serif;

  &__title {
    b {
      border-bottom: 2px solid $accent-color;
    }

    &:hover {
      b {
        &:hover {
          animation: spacecake .5s infinite;
        }

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
}

.project-card-container {
  $size: calc( 33% - 20px );
  height: 0px;
  width: $size;
  padding-bottom: $size;
  min-width: unset;

  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 20px;
  margin: 10px;
  background-image: url("/img/live.svg");
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
      border-bottom: solid $accent-color 2px;
    }
  }
}
</style>
