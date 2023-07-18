<template>
  <button
    class="button"
    :class="`button--${view} button--${size}`"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <base-icon
      v-if="icon"
      :icon="icon"
      class="button__icon"
    />
    <slot/>
  </button>
</template>

<script>
import BaseIcon from "@/components/icons/BaseIcon";
export default {
  name: 'AppButton',
  components: {BaseIcon},
  props: {
    view: {
      type: String,
      default: 'green'
    },
    size: {
      type: String,
      default: 'small'
    },
    icon: {
      type: String,
      required: false
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
  display: flex;
  align-items: center;
  border-radius: $mainBR;

  &__icon {
    margin-right: 4px;
  }


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

    .button__icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
