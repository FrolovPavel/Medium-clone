<template>
  <section class="your-feed">
    <app-banner
      class="your-feed__banner"
      title="Medium Clone"
      text="A place to share your knowledge."
    />
    <div class="container your-feed__container">
      <app-popular-tags class="your-feed__tags"/>
      <div class="your-feed__wrapper">
        <app-feed-toggler/>
        <app-feed
          class="your-feed__feed"
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
  name: 'AppYourFeed',
  components: {AppFeedToggler, AppPopularTags, AppBanner, AppFeed},
  data() {
    return {
      apiUrl: '/articles/feed'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.your-feed {
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
