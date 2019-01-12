<template lang="pug">
  .blog-post-page
    .post-container
      .headshot-image-container
        img( src="https://images.unsplash.com/photo-1547142632-bca340742184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" )
        img( src="/img/cutout.svg" )
      h1.article-title {{$page.title}}
      p.article-description
        span January 01 2019 • 
        span(v-if="$frontmatter.duration") {{$frontmatter.duration}} read • 
        span(v-if="$frontmatter.author") by {{$frontmatter.author}}
      Content.page-content
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.blog-post-page {
  background-color: rgb(243, 243, 243);
  color: rgb(51, 51, 51);
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

.article-description {
  opacity: 0.7;
  font-family: 'Merriweather', Arial, Helvetica, serif;
  font-size: 0.8em;
}

.page-content {
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
    font-family: 'Merriweather', Arial, Helvetica, serif;
    font-weight: 500;
  }
}
</style>
