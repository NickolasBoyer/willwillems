<template lang="pug">
  .theme-container
    h1 {{$page.title}}
    Content.page-content
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.theme-container {
  color: white;
}

.page-content {
  font-family: 'Playfair Display', Arial, Helvetica, serif;
  font-weight: 500;
}
</style>
