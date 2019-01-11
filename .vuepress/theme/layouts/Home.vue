<template lang="pug">
  .section.welcome-section
    .personal-image
      img( :src="$site.themeConfig.homeImgSrc" onerror="this.onerror=null; this.src='/img/cover.jpg'" )
    .text-section
      strong.text-section__sub-header Hi there, I'm
      h1.text-section__title Will Willems
      p.text-section__body Designer developer and web development consultant @NickolasBoyer. I’m mainly working with Vue.js these days with a strong focus on PWA's.
    #writings.info-section
      .info-section__number 01
      // .info-section__title Writings
      Content( slot-key="writings" ).info-section__body
      //  | I like articles, sometimes I even write one. Covering various topics I try to provide some value here and there. You might like them, you might not, <a href="https://medium.com/@rut.willems"> curious?</a>
    #projects.info-section
      .info-section__number 02
      // .info-section__title Projects
      Content( slot-key="projects" ).info-section__body
      //  | I do projects. Projects for multinationals with millions of customers and little ones with a few happy users. Most of them trough my consultancy, <a href="https://nickolasboyer.com">Nickolas Boyer</a>, check them out!
    #contact.info-section
      .info-section__number 03
      // .info-section__title Contact
      Content( slot-key="contact" ).info-section__body
      //  | You can contact me trough <a href="https://twitter.com/will_rut">twitter</a> or <a href="mailto:will@nickolasboyer.com">email</a>. The former for quick chit-chat and the latter for more structured long-term communication.
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
@import "../styles/vars.scss";

.welcome-section {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 110px repeat(12, 1fr) 110px;
  grid-template-rows: 120px 310px 100px 140px;
  grid-column-gap: 0px;
  grid-template-areas:
    ".              .             .             .             .             .             .             .             .             .             .             .             .             .             "
    ".              cover-img     cover-img     cover-img     cover-img     cover-img     cover-img     .             cover-text    cover-text    cover-text    cover-text    .             .             "
    ".              .             .             .             .             .             .             .             .             .             .             .             .             .             "
    ".              writing-text  writing-text  writing-text  .             projects-text projects-text projects-text .             contact-text  contact-text  contact-text  .             .             ";

  @media (max-width: $sm-break-point) {
    display: initial;
  }
}

.personal-image {
  grid-area: cover-img;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}


.text-section {
  grid-area: cover-text;
  margin: 50px 10px;
  max-width: 500px;

  @media (max-width: $sm-break-point) {
    margin: 30px 20px;
  }

  &__sub-header {
    color: $prim-gold;
  }

  &__title {
    margin: 10px 0 5px 0;
    font-size: 3rem;
  }

  &__body {
    margin: 0;
    line-height: 1.8em;
    opacity: 0.85;
  }
}

.info-section {
  margin: 10px;
  @media (max-width: $sm-break-point) {
    margin: 20px;
  }

  &#writings {
    grid-area: writing-text;
  }
  &#projects {
    grid-area: projects-text;
  }
  &#contact {
    grid-area: contact-text;
  }
  &__number {
    color: $prim-red;
    font-size: 0.8rem;
    font-weight: bold;
    // font-stretch: condensed;
    margin-bottom: 10px;
  }
  &__body {
    & /deep/ h2 {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 5px 0;
      padding: none;
    }
    & /deep/ p {
      font-size: 0.9rem;
      font-weight: 300;
      line-height: 2em;
      margin: 0;
    }
  }
}
</style>
