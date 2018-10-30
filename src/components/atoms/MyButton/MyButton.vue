<template>
  <component
    v-bind:is="tag"
    v-bind:href="className === 'disabled' ? false : href"
    v-bind:type="buttonType"
    v-bind:class="{ // cf. https://vue-loader-v14.vuejs.org/ja/features/css-modules.html
      'button': 1,
      [$style.normal]: className == 'normal',
      [$style.disabled]: className == 'disabled',
      [$style.success]: className == 'success',
      [$style.primary]: className == 'primary'
    }"
    @click="onClick"
    :disabled="disabled">
    <slot>
      default Button Text
    </slot>
  </component>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    tag: {
      default: 'button',
      type: String
    },
    href: String,
    type: String,
    className: String
  },
  computed: {
    buttonType () {
      if (this.type) return this.type
      if (this.tag === 'button') return 'button'
    },
    disabled () {
      if (this.tag !== 'button') return false
      if (this.className !== 'disabled') return false
      return true
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" module>
.button {
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: $g-border-radius;
  border: $g-border;
  display: inline-block;
  font-weight: $g-font-weight-bold;
  font-size: $g-font-size-m;
  line-height: 1;
  padding: .8rem;
  text-decoration: none;
  transition: opacity $g-hover-animation;
  border: $g-border;
}

.button:hover {
  opacity: .7;
}

.normal {
  composes: button;
  background-color: $g-color-white;
  color: $g-color-text;
}

.primary {
  composes: button;
  background-color: $g-color-primary;
  color: $g-color-text-outlined;
}

.success {
  composes: button;
  background-color: $g-color-success;
  color: $g-color-text-outlined;
}

.disabled {
  composes: button;
  cursor: default;
  background-color: $g-color-white;
  color: $g-color-text;
  opacity: .7;
  :hover {
    color: $g-color-text;
  }
}
</style>
