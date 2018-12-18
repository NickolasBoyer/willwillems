<template lang="pug">
  .section.article-section
    .article-section__title
      h1 WORDS.
      p.article-section__sub-title
    .article-section__body
      .articles-info-spacer
      .article-content-container
        .article-info
          p I like writing articles from time to time, they cover various topics and aren’t publishjed on a regulair basis, you might like them, you might not
        h2.year-seperator 2018
        ul.article-list
          li(
              v-for="(story, i) in writings"
              :key="story.link"
          )
            a.article-item(
              :href="story.link"
            )
              .article-item__info-section
                .article-item__title {{story.title}}
                .article-item__meta-data {{story.date}} | {{story.readingTime}} read
                span read ->
                // .article-item__sub-title {{story.subTitle}}
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
  margin-top: 100vh;
  background-color: black;
  padding: 60px 80px;


  @media (max-width: $sm-break-point) {
    padding: 50px 20px;
  }

  &__title {
    margin: 20px 0;

    h1 {
      margin: -0.1em 0;
      font-size: 14rem;
    }
  }

  &__sub-title {
    max-width: 500px;
  }

  &__body {
    white-space: nowrap;
  }
}

.articles-info-spacer {
  width: 200px;
  display: inline-block;
  vertical-align: top;
  border-bottom: solid 10px #E29338;
  padding: 0.2em 0;
}

.article-content-container {
  display: inline-block;
  padding: 0 20px;
}

.year-seperator {
  color: #DF3D3D;
  margin: 20px 0;
}

.article-info {
  width: 600px;
  white-space: normal;
  p {
    line-height: 1.7em;
    margin: 0;
  }
}

.article-list {
  list-style: none;
  padding: 0;
}

.article-item {
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
  margin: 5px 0;

  & * {
    display: inline-block;
    margin: 0 5px;
  }

  &__info-section {
    margin: 3px 0;
  }

  &__title {
    opacity: 0.92;
    white-space: normal;
    font-weight: 800;
    margin-left: 0;
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
