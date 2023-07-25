<template>
  <div
    v-if="profile"
    class="user-profile"
  >
    <app-banner-profile
      :isCurrentUser="isCurrentUser"
      class="user-profile__banner"
      :profile="profile"
    />
    <div class="container">
      <app-feed-toggler profile/>
      <app-feed :apiUrl="apiUrl"/>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import AppBannerProfile from '@/components/BannerProfile'
import AppFeedToggler from '@/components/FeedToggler'
import AppFeed from "@/components/Feed";

export default {
  name: 'AppUserProfile',
  components: {AppFeed, AppFeedToggler, AppBannerProfile},
  computed: {
    ...mapState({
      profile: state => state.profile.data,
      isLoading: state => state.profile.isLoading,
      error: state => state.profile.error,
    }),
    ...mapGetters([
      'currentUser',
    ]),
    isCurrentUser() {
      return this.currentUser?.username === this.profile?.username
    },
    apiUrl() {
      const isFavorites = this.$route.path.includes('favorites')
      return isFavorites
        ? `/articles?favorited=${this.userSlug}`
        : `/articles?author=${this.userSlug}`
    },
    userSlug() {
      return this.$route.params.slug
    }
  },
  watch: {
    userSlug() {
      this.fetchUserProfile()
    }
  },
  methods: {
    fetchUserProfile() {
      this.$store.dispatch('getUserProfile', {slug: this.userSlug})
    }
  },
  mounted() {
    this.fetchUserProfile()
  }
}
</script>

<style lang="scss">
.user-profile {
  &__banner {
    margin-bottom: 30px;
  }
}

</style>
