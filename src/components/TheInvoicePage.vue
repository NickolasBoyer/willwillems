<template lang="pug">
  .overlay.invoice-page
    h1 Subscribe
    p.invoice-page__body And rather than just blasting out a bunch of links, you want to analyze each article.What did you get out of it? How do you think it will help the reader and their business?
    br
    input.invoice-page__email-input( type="iban" value="NL43REVO455934783" )
    p Download the invoice here
    a.invoice-page__button-wrapper( :href="driveDownloadLink" )
      button.invoice-page__subscribe-button(
        @click="clicked = !clicked"
        :class=`{
                  'invoice-page__subscribe-button--activated': clicked
                }`
      )
        | DOWNLOAD
</template>

<script>
import { getGoogleDriveDownloadLink } from '@/utils'
export default {
  name: 'HelloWorld',
  data () {
    return {
      clicked: false,
      fileId: '1ola5v0la7HigTRqyBTy8WP1CppALmBaC'
    }
  },
  computed: {
    driveDownloadLink () {
      return getGoogleDriveDownloadLink(this.fileId)
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

.invoice-page {
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
    color: rgba(255, 255, 255, 1.0);
    padding: 10px 30px;
    background-color: $prim-orange;
    letter-spacing: 0.1em;
    transform: scale(1.0);
    transition: transform .3s ease;

    &--activated {
      color: transparent;
      transform: scale(20) !important;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
