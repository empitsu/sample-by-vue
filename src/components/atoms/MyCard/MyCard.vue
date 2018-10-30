<template>
  <component v-bind:is="tag" v-bind:class="$style.card" @click="onClick">
    <slot>default card text</slot>
  </component>
</template>

<script>
export default {
  name: 'MyCard',
  props: {
    tag: {
      default: 'div',
      type: String
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
.card {
  box-sizing: border-box;
  border-radius: $g-border-radius;
  word-wrap: break-word;
  border: $g-border;
  padding: 1.25rem;
}
</style>
