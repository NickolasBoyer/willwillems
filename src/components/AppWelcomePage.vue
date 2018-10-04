<template lang="pug">
  .section.welcome-section
    .image-wrapper
      .fade-overlay
      .gradient-background
      img.headshot-image( src="./AppWelcomePage/assets/headshot.png" )
    .text-section
      strong.sub-header Hi there, I'm
      h1.title Will Willems
      p.body Designer developer and web development consultant @NickolasBoyer. I’m mainly working with Vue.js these days with a strong focus on PWA's.
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome-section {
  display: flex;
  flex-direction: column;
}
.image-wrapper {
  position: relative;
  width: 100vw;
  
  .fade-overlay {
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 75%, #000000 100%);
  }

  .gradient-background {
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    background-image: linear-gradient(-134deg, #3023AE 0%, #C96DD8 100%);  }

  img {
    width: 100vw;
    filter: grayscale(100%);
    transition: filter 1s ease-in-out;
  }

  &:hover {
    img {
      filter: none;
    }
  }
}

.text-section {
  margin: 0 20px;

  .sub-header {
    color: #EA7928;
  }

  .title {
    margin: 10px 0 5px 0;
    font-size: 3rem;
  }

  .body {
    margin: 0;
    line-height: 1.8em;
  }
}
</style>
