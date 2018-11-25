<template lang="pug">
  .section.welcome-section
    .image-wrapper
      .fade-overlay
      .gradient-background
      .headshot-image
        img( src="/static/img/headshot.webp" onerror="this.onerror=null; this.src='/static/img/headshot.png'" )
    .text-section-wrapper
      .text-section
        strong.text-section__sub-header Hi there, I'm
        h1.text-section__title Will Willems
        p.text-section__body Designer developer and web development consultant @NickolasBoyer. I’m mainly working with Vue.js these days with a strong focus on PWA's.
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

  @media (min-width: $sm-break-point) {
    flex-direction: row;
  }
}
.image-wrapper {
  position: relative;
  width: 100vw;
  min-height: 350px;
  overflow: hidden;

  @media (min-width: $sm-break-point) {
    height: 100vh;
  }

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
    opacity: 0.7;
    background-image: radial-gradient(
      circle at top left,
      rgba(224,69,69,0.84) 0%,
      rgba(244,129,64,0.61) 17%,
      rgba(242,135,52,0.29) 49%,
      rgba(240,140,42,0.00) 59%
    );
  }

  .headshot-image {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    transition: filter 1s ease-in-out;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: bottom right;
    }
  }

  &:hover {
    .headshot-image {
      filter: none; // color on hover
    }
  }
}

.text-section-wrapper {
  min-width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-section {
  margin: 0 20px;
  max-width: 500px;

  &__sub-header {
    color: #EA7928;
  }

  &__title {
    margin: 10px 0 5px 0;
    font-size: 3rem;
  }

  &__body {
    margin: 0;
    line-height: 1.8em;
  }
}
</style>
