<template>
  <div
    class="tag"
    :is="link ? 'router-link' : 'div'"
    :class="`tag--${view}`"
    :to="link ? link : ''"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AppTag',
  props: {
    view: {
      type: String,
      required: false,
      default: 'fill'
    },
    link: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.tag {
  font-size: 14px;
  padding: 2px 6px;
  border-radius: $bigBR;

  &--fill {
    color: $white;
    background-color: $dark;

    transition: 0.25s background-color;

    @include hover {
      background-color: darken($dark, 20%);
    }

  }

  &--ghost {
    background-color: transparent;
    border: 1px solid $greyLight;
    color: $greyLight;
  }
}

</style>
