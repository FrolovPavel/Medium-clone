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
      <ul class="popular-tags__list">
        <li
          v-for="tag in popularTags"
          :key="tag"
          class="popular-tags__item"
        >
          <app-tag
            :tagName="tag"
            :link="{name: 'tag', params: {slug: tag}}"
            view="fill"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import AppTag from '@/components/Tag'
import AppErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'AppPopularTags',
  components: {AppErrorMessage, AppTag},
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
  padding: 10px;
  background-color: $greyLight;
  border-radius: $mainBR;

  &__title {
    font-weight: 300;
    margin-bottom: 10px;
  }

  &__list {
    display: flex;
    gap: 8px 4px;
    flex-wrap: wrap;
  }
}

</style>
