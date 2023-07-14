<template>
  <div
    class="tag"
    :is="link ? 'router-link' : 'div'"
    :class="`tag--${view}`"
    :to="link ? link : ''"
  >
    {{ tagName }}
  </div>
</template>

<script>
export default {
  name: 'AppTag',
  props: {
    tagName: {
      type: String,
      required: true
    },
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
  },
  mounted() {
    console.log(Boolean(this.link))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.tag {
  font-size: 14px;
  padding: 2px 6px;

  &--fill {
    color: $white;
    background-color: $dark;
    border-radius: $bigBR;
    transition: 0.25s background-color;

    @include hover {
      background-color: lighten($dark, 20%);
    }

  }
}

</style>
