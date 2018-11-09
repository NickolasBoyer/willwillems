<template lang="pug">
  .overlay.subscribe-overlay
    h1 Subscribe
    p And rather than just blasting out a bunch of links, you want to analyze each article.What did you get out of it? How do you think it will help the reader and their business?
    input( type="text" )
    br
    button YES
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
.overlay {
  z-index: 2;
  @include overlay-fill();
  background-color: $black;
  text-align: center;
  padding: 20px;
}
</style>
