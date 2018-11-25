<template lang="pug">
  .section.article-section
    .article-section__title
      h1 Writings
      // .article-section__sub-title Something to read
    .article-list
      a.article-card(
        v-for="(story, i) in writings"
        :key="story.link"
        :href="story.link"
      )
        .article-card__number-section
          | 0{{i}}
        .article-card__info-section
          h2.article-card__title {{story.title}}
          .article-card__sub-title {{story.subTitle}}
          .article-card__meta-data {{story.date}} | {{story.readingTime}} read
    .article-preview
      div
  
</template>

<script>
// display cards in horizontal row (display inline block on the a tag)
// under one featured article with graphics
// scrollable horizontally


import { getGoogleDriveDownloadLink } from '@/utils'
export default {
  name: 'TheArticlePage',
  data () {
    return {
      writings: [
        {
          "title": "Learn to manage large Vue.js components in 4 min",
          "subTitle": "Keep large projects manageable and sensible.",
          "readingTime": "3 min",
          "date": " Aug 16",
          "link": "https://hackernoon.com/learn-to-manage-large-vue-js-components-in-4-min-64fc2b9b2ef9"
        },
        {
          "title": "Using babel 7 with node",
          "subTitle": "So you want to use the new babel 7 with node?",
          "readingTime": "3 min",
          "date": " Aug 16",
          "link": "https://hackernoon.com/using-babel-7-with-node-7e401bc28b04"
        },
        {
          "title": "Let’s make our phones tools again",
          "subTitle": "A step towards taking back your focus",
          "readingTime": "2 min",
          "date": "Apr 2",
          "link": "https://medium.com/@rut.willems/lets-make-our-phones-tools-again-3ef64d8bcb45"
        },
        {
          "title": "A case against CSS frameworks",
          "subTitle": "And why I don't like them",
          "readingTime": "2 min",
          "date": "Oct 30, 2017",
          "link": "https://hackernoon.com/a-case-against-css-frameworks-bea9a6997f8e"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-section {
  padding: 60px 80px;

  @media (max-width: $sm-break-point) {
    padding: 50px 20px;
  }

  &__title {
    margin: 20px 0;
    text-align: center;

    h1 {
      margin: 0;
      font-size: 3.5rem;
    }
  }

  &__sub-title {

  }
}
.article-list {
  display: inline-block;
  max-width: 480px;
}

.article-preview {
  display: inline-block;
}

.article-card {
  display: block;
  color: inherit;
  padding: 10px 5px;
  margin: 10px 5px;
  cursor: pointer;
  white-space: nowrap;

  &:hover{
    background-color: #2d2b29;
    border-radius: 5px;
  }

  &__number-section {
    display: inline-block;
    vertical-align: top;
    text-align: right;
    font-size: 5.5rem;
    font-weight: 900;
    opacity: 0.2;

    @media (max-width: $sm-break-point) {
      font-size: 4rem;
    }
  }

  &__info-section {
    display: inline-block;
    margin: 0 20px;
    white-space: normal;
  }

  &__title {
    opacity: 0.92;
    white-space: normal;
    max-width: 320px; // TODO: fix this
  }

  &__sub-title {
    opacity: 0.8;
  }

  &__meta-data {
    margin: 5px 0;
    opacity: 0.5;
  }
}

</style>
