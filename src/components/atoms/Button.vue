<template>
  <component v-bind:is="tag" v-bind:href="href" v-bind:type="type" v-bind:class="$style.button" @click="onClick">
    <slot>
      default Button Text
    </slot>
  </component>
</template>

<script>
export default {
  name: 'atoms-button',
  props: {
    tag: String,
    href: String,
    type: String
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
  color: $g-color-gray-900;
  text-decoration: none;
  transition: opacity $g-hover-animation;
}

.button:hover {
  opacity: .7;
}

.default {
  background-color: inherit;
  border: $g-border;
  color: $g-color-info;
}

.primary {
  background-color: $g-color-primary;
  color: $g-color-text-outlined;
}

.warning {
  background-color: $g-color-warning;
  color: $g-color-text-outlined;
}
</style>
