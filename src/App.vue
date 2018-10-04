<template lang="pug">
  #app
    app-welcome-page
    a.contact-link( href="mailto:will@nickolasboyer.com" )
      img( src="./assets/contact-img.svg" )
</template>

<script>
import AppWelcomePage from './components/AppWelcomePage.vue'

export default {
  name: 'app',
  components: {
    AppWelcomePage
  }
}
</script>

<style lang="scss">
html {
  font-family: 'SF Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
}

body {
  padding: 0;
  margin: 0;
}

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
