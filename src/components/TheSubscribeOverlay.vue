<template lang="pug">
  .overlay.subscribe-overlay
    h1 Subscribe
    p.subscribe-overlay__body And rather than just blasting out a bunch of links, you want to analyze each article.What did you get out of it? How do you think it will help the reader and their business?
    br
    input.subscribe-overlay__email-input( type="email" placeholder="email@email.com" )
    br
    .subscribe-overlay__button-wrapper
      .subscribe-overlay__subscribe-button-dot.subscribe-overlay__subscribe-button-dot--small
      .subscribe-overlay__subscribe-button-dot.subscribe-overlay__subscribe-button-dot--medium
      button.subscribe-overlay__subscribe-button(
        @click="clicked = !clicked"
        :class=`{
                  'subscribe-overlay__subscribe-button--activated': clicked 
                }`
      )
        strong YES!
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      clicked: false
    }
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
  padding-top: 60px;
}

.subscribe-overlay {
  &__body {
    display: inline-block;
    max-width: 500px;
  }

  &__email-input {
    font-size: 0.9rem;
    padding: 5px 30px;
    text-align: center;
  }

  &__button-wrapper {
    position: relative;

    &:hover {
      .subscribe-overlay__subscribe-button-dot {
        &--small {
          transform:
            translate3d(50px, -45px, 0)
            scale(1.8);
        }

        &--medium {
          transform:
            translate3d(-60px, 30px, 0)
            scale(1.2);
        }
      }
    }
  }

  &__subscribe-button {
    z-index: 1;
    height: 100px;
    width: 100px;
    margin: 20px;
    color: rgba(255, 255, 255, 1.0);
    background-color: transparent;
    border: none;
    background-image: url("./TheSubscribeOverlay/assets/button.svg");
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    letter-spacing: 0.1em;
    transition: transform .3s ease-out;

    &--activated {
      color: transparent;
      transform: scale(20) !important;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &__subscribe-button-dot {
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    display: block;
    transition: transform .6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: transform3d(0, 0, 0) scale(0);

    &--small {
      $button-dot-radius: 5px;
      $button-dot-diameter: 2 * $button-dot-radius;
      height: $button-dot-diameter;
      width: $button-dot-diameter;
      top: calc(50% - #{$button-dot-radius});
      left: calc(50% - #{$button-dot-radius});
      background-color: $prim-red;
    }

    &--medium {
      $button-dot-radius: 20px;
      $button-dot-diameter: 2 * $button-dot-radius;
      height: $button-dot-diameter;
      width: $button-dot-diameter;
      top: calc(50% - #{$button-dot-radius});
      left: calc(50% - #{$button-dot-radius});
      background-color: $prim-gold;
    }
  }
}
</style>
