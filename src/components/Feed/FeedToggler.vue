<template>
  <div class="feed-toggle">
    <ul class="feed-toggle__list">
      <template v-if="profile">
        <li class="feed-toggle__item">
          <router-link
            :to="{name: 'userProfile', params: {slug: $route.params.slug}}"
            class="feed-toggle__link"
            exact
            active-class="feed-toggle__link--active"
          >
            My Articles
          </router-link>
        </li>
        <li class="feed-toggle__item">
          <router-link
            :to="{name: 'userProfileFavorites', params: {slug: $route.params.slug}}"
            class="feed-toggle__link"
            exact
            active-class="feed-toggle__link--active"
          >
            Favorited Articles
          </router-link>
        </li>
      </template>
      <template v-else>
        <li class="feed-toggle__item">
          <router-link
            v-if="isLoggedIn"
            :to="{name: 'yourFeed'}"
            class="feed-toggle__link"
            exact
            active-class="feed-toggle__link--active"
          >
            Your Feed
          </router-link>
        </li>
        <li class="feed-toggle__item">
          <router-link
            :to="{name: 'globalFeed'}"
            class="feed-toggle__link"
            exact
            active-class="feed-toggle__link--active"
          >
            Global Feed
          </router-link>
        </li>
        <li class="feed-toggle__item">
          <router-link
            v-if="tagName"
            :to="{name: 'tag'}"
            class="feed-toggle__link"
            exact
            active-class="feed-toggle__link--active"
          >
            <span># {{ tagName }}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'AppFeedToggler',
  props: {
    tagName: {
      type: String,
      required: false,
      default: ''
    },
    profile: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.feed-toggle {
  overflow: hidden;

  &__list {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid $greyLight;
    padding-bottom: 16px;

    @include for-tablet {
      gap: 20px;
    }
  }

  &__link {
    padding: 8px 8px;
    color: $grey;
    transition: 0.25s color;
    position: relative;
    white-space: nowrap;

    span {
      display: inline-block;
      max-width: 85px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &--active {
      color: $green;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -8px;
        background-color: $green;
        height: 2px;
      }
    }

    @include hover {
      color: $green;
    }
  }
}
</style>
