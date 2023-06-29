<template>
  <button
      class="button"
      :class="`button--${view} button--${size}`"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    view: {
      type: String,
      default: 'green'
    },
    size: {
      type: String,
      default: 'small'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.button {
  border-radius: $mainBR;

  //view
  &--green {
    background-color: $green;
    color: $white;
  }

  //size
  &--big {
    padding: 12px 24px;
    font-size: 20px;
  }
}
</style>
