<template>
  <div class="feed-toggle">
    <ul class="feed-toggle__list">
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
          # {{ tagName }}
        </router-link>
      </li>
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
@import '../assets/scss/vars';

.feed-toggle {

  &__list {
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid $greyLight;
    padding-bottom: 16px;
  }

  &__item {

  }

  &__link {
    padding: 8px 16px;
    color: $grey;
    transition: 0.25s color;
    position: relative;

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
