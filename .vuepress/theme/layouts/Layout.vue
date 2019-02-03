<template lang="pug">
  .blog-post-page
    a.home-link( href="/" ) ↖ Home
    img.cover-image( :src="$page.frontmatter.img" )
    .post-container
      article.post
        //.headshot-image-container( v-if="$page.frontmatter.img" )
          img( :src="$page.frontmatter.img" )
          img( src="/img/cutout.svg" )
        h1.article-title {{$page.title}}
        p.article-description
          span(v-if="$frontmatter.date") {{$frontmatter.date}} • 
          span(v-if="$frontmatter.duration") {{$frontmatter.duration}} read • 
          span(v-if="$frontmatter.author") by {{$frontmatter.author}}
        Content.page-content
        footer.page-footer
          img.page-footer__headshot( :src="$site.themeConfig.footerAuthorImgSrc" )
          h2.page-footer__author {{$site.themeConfig.footerAuthorName}}
          p.page-footer__description {{$site.themeConfig.footerAuthorDescription}}
          // a.page-footer__share-link(href="") Share this
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.home-link {
  position: absolute;
  top: 20px;
  left: 40px;
  border-bottom: none;
  opacity: 0.7;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: white;
  padding: 3px 6px;
  border-radius: 3px;

  &:hover {
    opacity: 1;
  }
}

.blog-post-page {
  text-align: center;
}

.cover-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.post-container {
  display: inline-block;
  padding: 80px 100px;
  margin-top: -100px;
  overflow-x: hidden;
  max-width: 100%; // never bigger than parent
  background-color: $bg-white;

  @media (max-width: $sm-break-point) {
    width: 100%;
    padding: 40px 20px;
  }
}

.post {
  display: inline-block;
  text-align: left;
  width:100%;
  max-width: 800px;
}

.headshot-image-container {
  height: 200px;
  width: 200px;
  // border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.article-title {
  max-width: 760px;
}

.article-description {
  opacity: 0.7;
  font-size: 0.8rem;
}

.page-content {
  // display: inline-block;
  text-align: left;
  max-width: 740px;

  & /deep/ h1:first-of-type { // hide first title, we're inserting that manually
    display: none;
  }

  & /deep/ p:first-of-type {
    font-size: 1.1em;
  }

  & /deep/ p, & /deep/ li {
    line-height: 1.8em;
    font-weight: 500;
  }

  & /deep/ h2 {
    margin-top: 1.7em;
  }
}

.page-footer {
  position: relative;
  margin: 60px 20px;
  padding: 40px 0;
  border-top: rgba(44, 44, 44, 0.07) 1px solid;
  border-bottom: rgba(44, 44, 44, 0.07) 1px solid;
  text-align: left;
  
  &__headshot {
    $headshot-size: 100px;

    position: absolute;
    top: -1 * ($headshot-size / 2);
    left: calc(50% - #{($headshot-size / 2)});
    width: $headshot-size;
    height: $headshot-size;
    border-radius: 50%;
    border: solid $bg-white 10px;
    background-color: white;
    object-fit: cover;
  }

  &__author {
    font-size: 1.1rem;
    font-weight: bold;
  }

  &__description {
    opacity: 0.6;
    font-size: 0.8rem;
    line-height: 1.8em;
    max-width: 480px;
  }

  &__share-link {
    font-size: 0.8rem;
    font-weight: 600;
  }
}

</style>
