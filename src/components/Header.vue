<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link
          class="header__logo"
          :to="{name: 'globalFeed'}"
        >
          Medium
        </router-link>
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <router-link
              :to="{name: 'globalFeed'}"
              class="header__link"
              exact
              active-class="header__link--active"
            >
              Home
            </router-link>
          </li>
          <template v-if="isLoggedIn">
            <li class="header__nav-item">
              <router-link
                :to="{name: 'createArticle'}"
                class="header__link"
                active-class="header__link--active"
              >
                New Article
              </router-link>
            </li>
            <li class="header__nav-item">
              <router-link
                :to="{name: 'settings'}"
                class="header__link"
                active-class="header__link--active"
              >
                Setting
              </router-link>
            </li>
            <li class="header__nav-item">
              <router-link
                :to="{name: 'userProfile', params: {slug: currentUser.username}}"
                class="header__link"
                active-class="header__link--active"
              >
                <img
                  class="header__avatar"
                  :src="currentUser.image"
                  alt="avatar"
                >
                {{ currentUser.username }}
              </router-link>
            </li>
          </template>
          <template v-if="isAnonymous">
            <li class="header__nav-item">
              <router-link
                :to="{name: 'login'}"
                class="header__link"
                active-class="header__link--active"
              >
                Sign In
              </router-link>
            </li>
            <li class="header__nav-item">
              <router-link
                :to="{name: 'register'}"
                class="header__link"
                active-class="header__link--active"
              >
                Sign Up
              </router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// TODO сделать свг спрайт для иконок
import {mapGetters} from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters([
      'currentUser',
      'isLoggedIn',
      'isAnonymous'
    ]),
  }
}
</script>

<style lang="scss">
@import "../assets/scss/vars";

.header {
  padding: 8px 0;

  &__nav {
    display: flex;
    align-items: center;
  }

  &__logo {
    font-weight: 600;
    color: $green;
    font-size: 1.5rem;
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
    padding: 0;
  }

  &__nav-item {
    list-style-type: none;
  }

  &__link {
    display: flex;
    align-items: center;
    color: $grey;
    transition: 0.3s color;

    &--active {
      color: $dark;
    }

    @include hover {
      color: $dark;
    }
  }

  &__avatar {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    margin-right: 5px;
  }

}

</style>
