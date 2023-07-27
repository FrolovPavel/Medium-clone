<template>
  <div class="banner">
    <h1 class="banner__title">{{ title }}</h1>
    <p class="banner__text">{{ text }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'AppBanner',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.banner {
  text-align: center;
  background: $green;
  box-shadow: $innerShadow;
  padding: 32px;

  &__title {
    font-size: 56px;
    font-weight: 600;
    color: $white;
    margin-bottom: 8px;
  }

  &__text {
    font-size: 24px;
    font-weight: 300;
    color: $white;
  }
}
</style>
