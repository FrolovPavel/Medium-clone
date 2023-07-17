<template>
  <section class="global-feed">
    <app-banner
      v-if="!isLoggedIn"
      class="global-feed__banner"
      title="Medium Clone"
      text="A place to share your knowledge."
    />
    <div class="container global-feed__container">
      <app-popular-tags class="global-feed__tags"/>
      <div class="global-feed__wrapper">
        <app-feed-toggler/>
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
  name: 'AppGlobalFeed',
  components: {AppFeedToggler, AppPopularTags, AppBanner, AppFeed},
  data() {
    return {
      apiUrl: '/articles'
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.global-feed {
  padding-bottom: 40px;

  &__banner {
    margin-bottom: 24px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    @include for-notebook {
      flex-direction: row-reverse;
    }
  }

  &__wrapper {
    width: 75%;
  }

  &__tags {
    width: 25%;
  }
}
</style>
