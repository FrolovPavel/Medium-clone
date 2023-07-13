<template>
  <section class="global-feed">
    <app-banner
      class="global-feed__banner"
      title="Medium Clone"
      text="A place to share your knowledge."
    />
    <div class="container global-feed__container">
      <div style="width: 205px;">tags</div>
      <app-feed
        class="global-feed__feed"
        :apiUrl="apiUrl"
      />
    </div>

  </section>
</template>

<script>
import AppFeed from '@/components/Feed'
import AppBanner from "@/components/Banner";

export default {
  name: 'AppGlobalFeed',
  components: {AppBanner, AppFeed},
  data() {
    return {
      apiUrl: '/articles'
    }
  }
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

    @include for-notebook {
      flex-direction: row-reverse;
    }
  }
}
</style>
