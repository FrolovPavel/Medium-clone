<template>
  <button
    class="button"
    :class="`button--${view} button--${size}`"
    :disabled="disabled"
    @click="$emit('click')"
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


  &:focus {
    border: 1px solid;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  //view
  &--green {
    background-color: $green;
    color: $white;
    border-color: $green;
    transition: 0.25s background-color, 0.25s color;

    @include hover {
      background-color: $white;
      color: $green;
    }
  }

  &--red {
    background-color: $red;
    color: $white;
    border-color: $red;
    transition: 0.25s background-color, 0.25s color;

    @include hover {
      background-color: $white;
      color: $red;
    }
  }

  &--ghost-grey {
    background-color: transparent;
    border: 1px solid $grey;
    color: $grey;
    transition: 0.25s background-color, 0.25s color;

    @include hover {
      background-color: $grey;
      color: $white;
    }
  }

  &--ghost-green {
    background-color: transparent;
    border: 1px solid $green;
    color: $green;
    transition: 0.25s background-color, 0.25s color;

    @include hover {
      background-color: $green;
      color: $white;
    }
  }

  &--ghost-red {
    background-color: transparent;
    border: 1px solid $red;
    color: $red;
    transition: 0.25s background-color, 0.25s color;

    @include hover {
      background-color: $red;
      color: $white;
    }
  }

  //size
  &--big {
    padding: 11px 23px;
    font-size: 20px;
    border: 1px solid;
  }

  &--small {
    padding: 4px 8px;
    font-size: 14px;
  }
}
</style>
