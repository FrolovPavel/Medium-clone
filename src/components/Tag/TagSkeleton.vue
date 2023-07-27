<template>
  <div class="tag-skeleton">
    <div
      v-for="tag in tags"
      :key="tag"
      class="tag-skeleton__item"
      :style="{width: `${tag}px`}"
    >
    </div>
  </div>

</template>

<script>
export default {
  name: 'AppTagSkeleton',
  data() {
    return {
      tags: [40, 20, 50, 35, 60, 20, 70, 20, 35, 40, 65, 30, 60, 30, 30,]
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.tag-skeleton {
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;

  &__item {
    border-radius: $bigBR;
    height: 20px;
    //background-color: $dark;
    background: linear-gradient(90deg, $dark 25%, #e6e6e6 37%, $dark 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }


}
</style>
