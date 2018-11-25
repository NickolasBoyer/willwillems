<template lang="pug">
  #app
    TheWelcomePage
    a.contact-link( href="mailto:will@nickolasboyer.com" )
      img( src="./assets/contact-img.svg" alt="headshot" )
    TheArticlePage
</template>

<script>
import TheWelcomePage from './components/TheWelcomePage.vue'
import TheArticlePage from './components/TheArticlePage.vue'

export default {
  name: 'app',
  components: {
    TheWelcomePage,
    TheArticlePage
  }
}
</script>

<style lang="scss">
.contact-link {
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: white;

  // &::before {
  //   content: '';
  //   display: inline-block;
  //   height: 10px;
  //   width: 10px;
  //   border-radius: 50%;
  //   margin: 3px;
  //   background-color: red;
  // }
}
</style>
