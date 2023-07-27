<template>
  <div class="banner-profile">
    <div class="container banner-profile__container">
      <img :src="profile.image" alt="avatar" class="banner-profile__image">
      <div class="banner-profile__username">{{ profile.username }}</div>
      <p class="banner-profile__bio">{{ profile.bio }}</p>
      <app-button
        v-if="isCurrentUser"
        class="banner-profile__button"
        view="ghost-grey"
        icon="settings"
        :link="{name: 'settings'}"
      >
        Edit Profile Settings
      </app-button>
      <app-button
        v-else
        class="banner-profile__button"
        view="ghost-grey"
        icon="plus"
      >
        Follow {{ profile.username }}
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/Button";

export default {
  name: 'AppBannerProfile',
  components: {AppButton},
  props: {
    profile: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.banner-profile {
  padding: 32px 0;
  background-color: #bdbcbc33;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  &__image {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  &__username {
    font-size: 24px;
    font-weight: 600;
  }

  &__bio {
    color: $grey;
    text-align: center;
  }

  &__button {
    margin-top: 10px;
  }
}
</style>
