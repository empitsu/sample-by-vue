<template>
  <button type="button" :class="$style.button">
    <slot>
      default Button Text
    </slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
  }
}
</script>
<style lang="scss" module>
.button {
  border-radius: $g-border-radius;
  border: $g-border;
  display: inline-block;
  font-weight: $g-font-weight-bold;
  font-size: $g-font-size-m;
  line-height: 1;
  padding: .8rem;
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
