<template>
  <button
      class="button"
      :class="`button--${view} button--${size}`"
      :disabled="disabled"
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.button {
  border-radius: $mainBR;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

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
