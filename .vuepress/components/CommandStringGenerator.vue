<template lang="pug">
  .generator-wrapper
    .generator-box
      .input-wrapper
        b
          label( for="variable-input" ) Your project name:
        br
        input.variable-input( v-model="userInput" name="variable-input")
      br
      .input-wrapper
        b
          label( for="string-output" ) Complete command:
        br
        input.string-output( readonly :value="stringOutput" name="string-output" )
    br
</template>

<script>
export default {
  name: "CommandStringGenerator",
  data () {
    return {
      userInput: 'my-project'
    }
  },
  computed: {
    stringOutput() {
      return `mkdir ${this.userInput} && cd ${this.userInput} && npm init && git init`
    }
  }
}
</script>

<style lang="scss" scoped>
.generator-wrapper {
  text-align: center;
}

.generator-box {
  display: inline-block;
  width: 300px;
  padding: 20px 10px;
}
</style>

