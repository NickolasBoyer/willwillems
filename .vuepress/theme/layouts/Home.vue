<template lang="pug">
  .mobile-padding
    .home
      section.section.welcome-section
        .section__body
          div
            .personal-image
              span
                <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Desktop-HD" transform="translate(-150.000000, -150.000000)" fill="currentColor" fill-rule="nonzero">
                            <path d="M250,200.040883 C250,213.832176 245.121335,225.606383 235.363859,235.363859 C225.606383,245.121335 213.804921,250 199.959117,250 C186.167824,250 174.393617,245.121335 164.636141,235.363859 C154.878665,225.606383 150,213.832176 150,200.040883 C150,186.195079 154.878665,174.393617 164.636141,164.636141 C174.393617,154.878665 186.167824,150 199.959117,150 C213.804921,150 225.606383,154.878665 235.363859,164.636141 C245.121335,174.393617 250,186.195079 250,200.040883 Z M242.436975,200.04061 C242.436975,188.290856 238.294843,178.273935 230.010454,169.989546 C221.726065,161.705157 211.709144,157.563025 199.95939,157.563025 C188.263783,157.563025 178.273935,161.705157 169.989546,169.989546 C161.705157,178.273935 157.563025,188.290856 157.563025,200.04061 C157.563025,211.736217 161.705157,221.726065 169.989546,230.010454 C178.273935,238.294843 188.263783,242.436975 199.95939,242.436975 C211.709144,242.436975 221.726065,238.294843 230.010454,230.010454 C238.294843,221.726065 242.436975,211.736217 242.436975,200.04061 Z M187.815126,189.875305 C187.815126,191.610201 187.191657,193.101105 185.9447,194.348062 C184.697744,195.595018 183.20684,196.218487 181.471944,196.218487 C179.737047,196.218487 178.259697,195.595018 177.039848,194.348062 C175.819999,193.101105 175.210084,191.610201 175.210084,189.875305 C175.210084,188.140409 175.819999,186.663058 177.039848,185.44321 C178.259697,184.223361 179.737047,183.613445 181.471944,183.613445 C183.20684,183.613445 184.697744,184.223361 185.9447,185.44321 C187.191657,186.663058 187.815126,188.140409 187.815126,189.875305 Z M224.789916,189.875305 C224.789916,191.610201 224.180001,193.101105 222.960152,194.348062 C221.740303,195.595018 220.262953,196.218487 218.528056,196.218487 C216.79316,196.218487 215.302256,195.595018 214.0553,194.348062 C212.808343,193.101105 212.184874,191.610201 212.184874,189.875305 C212.184874,188.140409 212.808343,186.663058 214.0553,185.44321 C215.302256,184.223361 216.79316,183.613445 218.528056,183.613445 C220.262953,183.613445 221.740303,184.223361 222.960152,185.44321 C224.180001,186.663058 224.789916,188.140409 224.789916,189.875305 Z M177.731092,215.939889 L182.647953,213.02521 C186.799989,220.686691 192.864056,224.517375 200.840336,224.517375 C208.816616,224.517375 214.880683,220.686691 219.032719,213.02521 L223.94958,215.939889 C218.595638,226.321752 210.892634,231.512605 200.840336,231.512605 C195.759555,231.512605 191.293452,230.180194 187.441892,227.51533 C183.590332,224.850467 180.353431,220.992026 177.731092,215.939889 Z" id="☺"></path>
                        </g>
                    </g>
                </svg>
              // img( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover.jpg'" )
            .welcome-text
              strong.welcome-text__sub-header Hi there, I'm
              h1.welcome-text__title
                span Will
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
            :style="`background-image: url('${darkMode ? (project.frontmatter.iconDark || project.frontmatter.icon) : project.frontmatter.icon}');`"
          )
            .project-card
      section.section.about-section( id="#about" )
        h1.section__header About
        Content( slot-key="about" ).section__body
      section.section.contact-section( id="#contact" )
        h1.section__header Contact
        .section__body.section__body--horizontal-flow
          div
            p
              a.contact-link( href="mailto:me@willwillems.com" )
                span Email me 
                div.contact-link__icon →
            p
              a.contact-link( href="https://twitter.com/will_rut" )
                span DM me on Twitter 
                div.contact-link__icon →
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
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    ArticlePreviewCard
  },
  mounted () {
    // document.referrer
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
    darkMode () {
      return process.client ? !!window.matchMedia('(prefers-color-scheme: dark)').matches : false
    }
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
  font-size: 24px;
  font-weight: 600;
}

.section {
  padding: 4rem 0;
  // min-height: 100vh;

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
      min-width: 360px // do not create super small columns
    }

    &--horizontal-flow {
      column-span: all;
      display: initial;
    }
  }
}

.personal-image {
  margin: 40px 10px 60px 10px;
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

    span:first-child {
      @include accent-for('color');
    }
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

.contact-link {
  &__icon {
    display: inline-block;
  }
  &:hover {
    .contact-link__icon {
      animation: jiggle 1s ease-in-out infinite;
    }
  }

  @keyframes jiggle {
    0% { transform: translateX(0px); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(0px); }
  }
}

.page-footer {
  padding: 4em 0;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.8;

  a {
    font-weight: bold;
    margin: 0 .4em;
    opacity: .6;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
