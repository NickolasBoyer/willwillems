<template lang="pug">
  .blog-post-page
    .post-container
      .headshot-image-container
        img( :src="$page.frontmatter.img" )
        img( src="/img/cutout.svg" )
      h1.article-title {{$page.title}}
      p.article-description
        span January 01 2019 • 
        span(v-if="$frontmatter.duration") {{$frontmatter.duration}} read • 
        span(v-if="$frontmatter.author") by {{$frontmatter.author}}
      Content.page-content
      footer
        p Footer
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.blog-post-page {
  background-color: rgb(26, 28, 32);
  color: rgb(213, 210, 205);
  text-align: center;
}

.post-container {
  display: inline-block;
  padding-top: 100px;
  overflow-x: hidden;
  max-width: 100%; // never bigger than parent
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
}

.page-content {
  // display: inline-block;
  text-align: left;
  max-width: 720px;
  padding: 0 20px;

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
}
</style>
