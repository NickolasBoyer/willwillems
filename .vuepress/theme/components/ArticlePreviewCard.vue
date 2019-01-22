<template lang="pug">
  a.article-preview-card( :href="link" )
    div
      img.article-preview-card__thumb( :src="img" )
      h3.article-preview-card__title {{title}}
      span.article-preview-card__date {{date}}
      // p.article-preview-card__description {{description}}
</template>

<script>
export default {
  name: 'ArticlePreviewCard',
  props: {
    link: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$card-width: 260px;
$img-height: 180px;

.article-preview-card {
  display: inline-block;
  width: $card-width;
  margin: 10px;

  // counter <a> style
  text-decoration: none;
  border-bottom: none;

  &__thumb {
    width: $card-width;
    height: $img-height;
    object-fit: cover;
    background-color: #CC5141;
    border-width: 0;
    border-radius: 5px;
  }

  &__date {
    display: block;
    font-size: 0.8rem;
    opacity: 0.71;
    // font-style: italic;
  }

  &__title {
    font-size: 1rem;
    margin: 10px 0;
  }

  &__description {
    opacity: 0.6;
  }
}
</style>


