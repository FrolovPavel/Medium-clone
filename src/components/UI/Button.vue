<template>
  <button
    :is="link ? 'router-link' : 'button'"
    :to="link"
    class="button"
    :class="`button--${view} button--${size}`"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <base-icon
      v-if="icon"
      :icon="icon"
      :style="{marginRight: isNotEmptySlot ? '4px' : '0'}"
      class="button__icon"
    />
    <slot/>
  </button>
</template>

<script>
import BaseIcon from "@/components/Icons/BaseIcon";
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
    link: {
      type: Object,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isNotEmptySlot() {
      return 'default' in this.$slots
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.button {
  display: flex;
  align-items: center;
  border-radius: $mainBR;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  //view
  &--green {
    background-color: $green;
    color: $white;
    border: 1px solid $green;
    transition: 0.25s background-color, 0.25s color;

    &:focus,
    &:active {
      border: 1px solid $green;
    }

    @include hover {
      background-color: $white;
      color: $green;
    }
  }

  &--red {
    background-color: $red;
    color: $white;
    border: 1px solid $red;
    transition: 0.25s background-color, 0.25s color;

    &:focus,
    &:active {
      border: 1px solid $red;
    }

    @include hover {
      background-color: $white;
      color: $red;
    }
  }

  &--ghost {
    background-color: transparent;
    border: none;
  }

  &--ghost-grey {
    background-color: transparent;
    border: 1px solid $grey;
    color: $grey;
    transition: 0.25s background-color, 0.25s color;

    &:focus,
    &:active {
      border: 1px solid $grey;
    }

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

    &:focus,
    &:active {
      border: 1px solid $green;
    }

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

    &:focus,
    &:active {
      border: 1px solid $red;
    }

    @include hover {
      background-color: $red;
      color: $white;
    }
  }

  //size
  &--big {
    padding: 11px 23px;
    font-size: 20px;
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
