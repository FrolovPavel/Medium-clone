<template>
  <section class="tag-feed">
    <app-banner
      class="tag-feed__banner"
      title="Medium Clone"
      text="A place to share your knowledge."
    />
    <div class="container tag-feed__container">
      <app-popular-tags/>
      <div class="tag-feed__wrapper">
        <app-feed-toggler :tagName="tagName"/>
        <app-feed
          class="tag-feed__feed"
          :apiUrl="apiUrl"
        />
      </div>

    </div>

  </section>
</template>

<script>
import AppFeed from '@/components/Feed'
import AppBanner from '@/components/Banner'
import AppPopularTags from '@/components/PopularTags'
import AppFeedToggler from '@/components/FeedToggler'

export default {
  name: 'AppTagFeed',
  components: {AppFeedToggler, AppPopularTags, AppBanner, AppFeed},
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.tag-feed {
  padding-bottom: 40px;

  &__banner {
    margin-bottom: 24px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include for-notebook {
      flex-direction: row-reverse;
    }
  }
}
</style>
