<template lang="pug">
  .mailing-list-wrapper
    .mailing-list-box
      h2
        span.mailing-list-box__title More like this?
      p.mailing-list-box__body Sign up for my newsletter and receive cool Vue stuff I dig up, made by me and others!
      form( action="https://nickolasboyer.us12.list-manage.com/subscribe/post?u=55a5fbebab9bb447102de7229&amp;id=52a0ae8f45" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate )
        input( v-model="userName" placeholder="First name" type="text" name="LNAME" id="mce-LNAME" )
        input( v-model="userEmail" placeholder="Email" type="email" name="EMAIL" id="mce-EMAIL" )
        // add to proper group
        input( type="checkbox" value="1" style="display:none" name="group[15817][1]" id="mce-group[15817]-15817-0" checked)
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_55a5fbebab9bb447102de7229_52a0ae8f45" tabindex="-1" value=""></div>
        .button-wrapper
          .subscribe-button-dot.subscribe-button-dot--small
          .subscribe-button-dot.subscribe-button-dot--medium
          input.subscribe-button(
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          )
</template>

<script>
export default {
  name: "CommandStringGenerator",
  data () {
    return {
      userName: '',
      userEmail: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.mailing-list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mailing-list-box {
  background-color: black;
  padding: .5em 3em;
  margin: 3em 1em;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 34px 0 rgba(255,191,43,0.50);

  &__title {
    color: white;
    border-bottom: solid #E12F2F 3px;
  }

  &__body {
    color: white;
    max-width: 320px;
    line-height: 1.3em;
    padding-bottom: 0 !important;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type=text], input[type=email] {
    max-width: 280px;
    background-color: #2d2d2d;
    color: rgba(255, 255, 255, 0.8);
  }

}

.button-wrapper {
  z-index: 2;
  position: relative;
  &:hover {
    .subscribe-button-dot {
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

.subscribe-button {
  z-index: 1;
  height: 100px;
  width: 100px;
  margin: 20px;
  color: rgba(255, 255, 255, 1.0);
  background-color: transparent;
  border: none;
  background-image: url("../assets/button.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  transition: transform .3s ease-out;

  &:hover {
    transform: scale(1.1);
  }
}

.subscribe-button-dot {
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
    background-color: #E12F2F;
  }
  
  &--medium {
    $button-dot-radius: 20px;
    $button-dot-diameter: 2 * $button-dot-radius;
    height: $button-dot-diameter;
    width: $button-dot-diameter;
    top: calc(50% - #{$button-dot-radius});
    left: calc(50% - #{$button-dot-radius});
    background-color: #E4791B;
  }
}

</style>
