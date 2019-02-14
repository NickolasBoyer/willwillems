<template lang="pug">
  .home
    section.section.welcome-section
      .section__body
        div
          .personal-image
            span
              <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Desktop-HD" transform="translate(-150.000000, -150.000000)" fill="currentColor" fill-rule="nonzero">
                          <path d="M230,190.032706 C230,201.065741 226.097068,210.485107 218.291087,218.291087 C210.485107,226.097068 201.043937,230 189.967294,230 C178.934259,230 169.514893,226.097068 161.708913,218.291087 C153.902932,210.485107 150,201.065741 150,190.032706 C150,178.956063 153.902932,169.514893 161.708913,161.708913 C169.514893,153.902932 178.934259,150 189.967294,150 C201.043937,150 210.485107,153.902932 218.291087,161.708913 C226.097068,169.514893 230,178.956063 230,190.032706 Z M224,190.032536 C224,180.618773 220.681373,172.593335 214.044019,165.955981 C207.406665,159.318627 199.381227,156 189.967464,156 C180.597082,156 172.593335,159.318627 165.955981,165.955981 C159.318627,172.593335 156,180.618773 156,190.032536 C156,199.402918 159.318627,207.406665 165.955981,214.044019 C172.593335,220.681373 180.597082,224 189.967464,224 C199.381227,224 207.406665,220.681373 214.044019,214.044019 C220.681373,207.406665 224,199.402918 224,190.032536 Z M180,181.967742 C180,183.344093 179.505381,184.526877 178.516129,185.516129 C177.526877,186.505381 176.344093,187 174.967742,187 C173.591391,187 172.41936,186.505381 171.451613,185.516129 C170.483866,184.526877 170,183.344093 170,181.967742 C170,180.591391 170.483866,179.41936 171.451613,178.451613 C172.41936,177.483866 173.591391,177 174.967742,177 C176.344093,177 177.526877,177.483866 178.516129,178.451613 C179.505381,179.41936 180,180.591391 180,181.967742 Z M210,181.967742 C210,183.344093 209.516134,184.526877 208.548387,185.516129 C207.58064,186.505381 206.408609,187 205.032258,187 C203.655907,187 202.473123,186.505381 201.483871,185.516129 C200.494619,184.526877 200,183.344093 200,181.967742 C200,180.591391 200.494619,179.41936 201.483871,178.451613 C202.473123,177.483866 203.655907,177 205.032258,177 C206.408609,177 207.58064,177.483866 208.548387,178.451613 C209.516134,179.41936 210,180.591391 210,181.967742 Z M172,202.364865 L175.93617,200 C179.260064,206.216247 184.114625,209.324324 190.5,209.324324 C196.885375,209.324324 201.739936,206.216247 205.06383,200 L209,202.364865 C204.713927,210.78833 198.547322,215 190.5,215 C186.432604,215 182.857285,213.91893 179.773936,211.756757 C176.690587,209.594584 174.099301,206.463984 172,202.364865 Z" id="☺"></path>
                      </g>
                  </g>
              </svg>
            // img( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover.jpg'" )
          .welcome-text
            strong.welcome-text__sub-header Hi there, I'm
            h1.welcome-text__title
              span( style="color: lightgray;" ) Will
              br
              span Willems
            Content.welcome-text__body 
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
          :style="`background-image: url('${project.frontmatter.icon || '/img/icon/rssdigest.svg'}');`"
        )
          .project-card
    section.section.about-section( id="#about" )
      h1.section__header About
      Content( slot-key="about" ).section__body
        //- p.about-text-block This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
        //- p.about-text-block If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).
        //- p.about-text-block By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
        //- p.about-text-block If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children.
    // section.section.about-section( id="#contact" )
      h1.section__header Contact
    footer.page-footer
      a( href="mailto:me@willwillems.com" ) Contact
      span •
      a( href="/rss.xml" ) RSS
      span •
      a( href="https://twitter.com/rut_will" ) Twitter
</template>

<script>
import groupBy from 'lodash/groupBy'

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
    blogPosts () {
      return groupBy(
          this.$site.pages.filter(post => post.path.startsWith('/posts/')),
          page => page.frontmatter.category
        )
    },
    previewProjects () {
      return this.$site.pages
        .filter(post => post.path.startsWith('/projects/'))
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
  color: $accent-color;
  padding: 0; // section blocks take care of padding
  max-width: 960px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 600;
}

.section {
  padding: 4rem 0;
  // min-height: 100vh;

  &__header {
    font-size: 5rem;
  }

  &__body {
    // divide page in two columns but collapse
    // when columns get samller than 360px
    column-count: 2;
    column-width: 360px;

    & > *, & /deep/ > * {
      margin: 10px; // give al chidren te same padding
      display: inline-block; // do not break elements on column switch
      min-width: 360px // do not create super small columns
    }

    &--horizontal-flow {
      column-span: all;
      display: initial;
    }
  }
}

.personal-image {
  margin: 60px 10px;
}


.welcome-text {
  margin: 10px;
  max-width: 500px;

  &__sub-header {
    
  }

  &__title {
    margin: 10px 0 0 0;
    font-size: 6rem;
    color: inherit;
  }

  &__body {
    & /deep/ h1 {
      display: none; // hide titles injected into content title is harcoded
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
  color: lightgray;
  margin: .3em 0;
  border-bottom: none;
  line-height: 2em;

  // cursor: url("/img/cursor.png"), auto;

  &__title {
    border-bottom: 2px solid $accent-color;

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
