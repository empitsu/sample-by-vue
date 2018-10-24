<template>
  <div :class="$style.accordion">
    <div v-bind:class="[$style.accordion__header, { open: visible }]" v-on:click="onClick">
      <slot name="header">
        <AtomsButton>accordion default title</AtomsButton>
      </slot>
    </div>
    <transition v-on:before-enter="onBeforeEnter" v-on:enter="onEnter" v-on:after-enter="onAfterEnter" v-on:before-leave="onBeforeLeave" v-on:leave="onLeave" v-on:after-leave="onAfterLeave">
      <div v-show="visible" :class="$style.accordion__body">
        <slot>
          <ul>
            <li>accordion default contents</li>
          </ul>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
import AtomsButton from './Button.vue'
export default {
  name: 'atoms-accordion',
  data: () => {
    return {
      visible: true
    }
  },
  components: {
    AtomsButton
  },
  methods: {
    onClick () {
      this.visible = !this.visible
    },
    onBeforeEnter (el) {
      el.style.height = 0
    },
    onEnter (el, done) {
      el.style.height = el.scrollHeight + 'px'
    },
    onAfterEnter (el) {
      el.style.height = ''
    },
    onBeforeLeave (el) {
      console.log('onBeforeLeave')
      el.style.height = el.scrollHeight + 'px'
    },
    onLeave (el, done) {
      console.log('onLeave')
      el.style.height = 0
    },
    onAfterLeave (el) {
      el.style.height = ''
    }
  }
}
</script>
<style lang="scss" module>
.accordion {
  overflow: hidden;

  &__header {
    // button {
    //   appearance: none;
    //   border-color: transparent;
    //   box-shadow: none;
    //   text-shadow: none;
    //   background-color: transparent;
    //   background-image: none
    // }
  }
  &__body {
    overflow: hidden;
    transition: opacity 0.5s, height 0.5s ease-out;
    opacity: 1;
    &:global(.v-enter), &:global(.v-leave-to) {
      opacity: 0;
    }
  }
}

</style>
