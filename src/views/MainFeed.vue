<template>
  <section class="global-feed">
    <app-banner
      class="global-feed__banner"
      title="Medium Clone"
      text="A place to share your knowledge."
    />
    <div class="container global-feed__container">
      <app-popular-tags class="global-feed__tags"/>
      <div class="global-feed__wrapper">
        <app-feed-toggler :tagName="tagName"/>
        <app-feed
          class="global-feed__feed"
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
  name: 'AppMainFeed',
  components: {AppFeedToggler, AppPopularTags, AppBanner, AppFeed},
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      let routeName = this.$route.name

      switch (routeName) {
        case 'globalFeed':
          return '/articles'
        case 'yourFeed':
          return '/articles/feed'
        case 'tag':
          return `/articles?tag=${this.tagName}`
        default:
          return '/articles'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.global-feed {
  padding-bottom: 40px;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    padding-top: 24px;

    @include for-tablet {
      flex-direction: row-reverse;
    }
  }

  &__wrapper {
    width: 100%;

    @include for-tablet {
      width: 75%;
    }
  }

  &__tags {
    width: 100%;
    @include for-tablet {
      width: 25%;
    }
  }
}
</style>
