<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <app-error-message
      v-if="error"
      :message="error"
    />
    <div
      v-if="popularTags"
      class="popular-tags"
    >
      <h3 class="popular-tags__title">Popular Tags</h3>
      <app-tag-list
        class="popular-tags__list"
        :iterator="popularTags"
        viewTags="fill"
        :link="{name: 'tag'}"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import AppErrorMessage from '@/components/ErrorMessage'
import AppTagList from '@/components/TagList'

export default {
  name: 'AppPopularTags',
  components: {AppTagList, AppErrorMessage},
  computed: {
    ...mapState({
      popularTags: state => state.popularTags.data,
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
    })
  },
  mounted() {
    this.$store.dispatch('getPopularTags')
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.popular-tags {
  height: fit-content;
  padding: 15px 10px;
  background-color: $greyLight;
  border-radius: $mainBR;

  &__title {
    font-weight: 300;
    margin-bottom: 10px;
  }
}

</style>
