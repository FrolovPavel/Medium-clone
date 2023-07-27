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
        <app-button
          ref="burger"
          class="header__burger"
          view="ghost"
          @click="toggleMenu"
        >
          <span></span>
        </app-button>
        <ul
          ref="navList"
          class="header__nav-list"
        >
          <li
            class="header__nav-item"
            @click="hideMenu"
          >
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
            <li
              class="header__nav-item"
              @click="hideMenu"
            >
              <router-link
                :to="{name: 'createArticle'}"
                class="header__link"
                active-class="header__link--active"
              >
                <base-icon
                  class="header__icon"
                  icon="compose"
                />
                New Article
              </router-link>
            </li>
            <li
              class="header__nav-item"
              @click="hideMenu"
            >
              <router-link
                :to="{name: 'settings'}"
                class="header__link"
                active-class="header__link--active"
              >
                <base-icon
                  class="header__icon"
                  icon="settings"
                />
                Setting
              </router-link>
            </li>
            <li
              class="header__nav-item"
              @click="hideMenu"
            >
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
          <template v-else>
            <li
              class="header__nav-item"
              @click="hideMenu"
            >
              <router-link
                :to="{name: 'login'}"
                class="header__link"
                active-class="header__link--active"
              >
                Sign In
              </router-link>
            </li>
            <li
              class="header__nav-item"
              @click="hideMenu"
            >
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
import {mapGetters} from 'vuex'
import BaseIcon from '@/components/Icons/BaseIcon'
import AppButton from '@/components/UI/Button'

export default {
  name: 'AppHeader',
  components: {AppButton, BaseIcon},
  computed: {
    ...mapGetters([
      'currentUser',
      'isLoggedIn',
    ]),
  },
  methods: {
    toggleMenu() {
      this.$refs.navList.classList.toggle('header__nav-list--active')
      this.$refs.burger.$el.classList.toggle('header__burger--active')
      document.body.classList.toggle('no-scroll')
    },
    hideMenu() {
      this.$refs.navList.classList.remove('header__nav-list--active')
      this.$refs.burger.$el.classList.remove('header__burger--active')
      document.body.classList.remove('no-scroll')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/vars";

.header {
  padding: 16px 0;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 600;
    color: $green;
    font-size: 1.5rem;
  }

  &__burger {
    width: 28px;
    height: 28px;
    padding: 4px;
    outline: none;
    border: none;
    z-index: 2;

    span {
      display: inline-block;
      position: relative;
      height: 2px;
      width: 20px;
      border-radius: $mainBR;
      background-color: $dark;
      transition: 0.25s background-color;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        height: 2px;
        width: 20px;
        border-radius: $mainBR;
        background-color: $dark;
        transition: 0.25s transform;
      }

      &::before {
        top: -6px;
      }

      &::after {
        bottom: -6px;
      }
    }

    &--active {
      span {
        background-color: transparent;

        &::before {
          transform: translate(0, 6px) rotate(45deg);
        }

        &::after {
          transform: translate(0, -6px) rotate(-45deg);
        }
      }
    }

    @include for-tablet {
      display: none;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $white;
    z-index: 1;
    transform: translateX(100%);
    transition: 0.25s transform;

    &--active {
      transform: translateX(0);
    }

    @include for-tablet {
      position: relative;
      justify-content: flex-end;
      flex-direction: row;
      transform: translateX(0);
    }
  }

  &__nav-item {
    list-style-type: none;
  }

  &__link {
    display: flex;
    align-items: center;
    color: $grey;
    transition: 0.3s color;
    font-size: 40px;

    &--active {
      color: $dark;
    }

    @include for-tablet {
      font-size: 16px;
    }

    @include hover {
      color: $dark;
    }
  }

  &__icon {
    display: none;
    margin-right: 4px;
    fill: $grey;

    @include for-tablet {
      display: block;
    }
  }

  &__avatar {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    margin-right: 5px;
    display: none;

    @include for-tablet {
      display: block;
    }
  }
}
</style>
