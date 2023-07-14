<template>
  <div class="banner-article">
    <div class="container">
      <h1 class="banner-article__title">
        {{ title }}
      </h1>
      <app-author-with-actions
        :isAuthor="isAuthor"
        :authorData="authorData"
        @delete="$emit('delete')"
      />
    </div>
  </div>
</template>

<script>
import AppAuthorWithActions from '@/components/AuthorWithActions'

export default {
  name: 'AppBannerArticle',
  components: {AppAuthorWithActions},
  props: {
    title: {
      type: String,
      required: true
    },
    isAuthor: {
      type: Boolean,
      required: true
    },
    authorData: {
      type: Object,
      required: true
    }
  },
  computed: {}
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.banner-article {
  padding: 32px 0;
  background-color: $dark;

  &__title {
    font-weight: 600;
    font-size: 45px;
    color: $white;
    margin-bottom: 30px;
  }
}

</style>
