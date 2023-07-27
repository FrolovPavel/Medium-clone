<template>
  <div
    :class="{'favorite--active': isFavoriteOptimistic}"
    class="favorite"
    @click="onClick"
  >
    <base-icon
      class="favorite__icon"
      icon="heart"
    />
    {{ countOptimistic }}
  </div>
</template>

<script>
import BaseIcon from '@/components/Icons/BaseIcon'
import {mapGetters} from 'vuex'

export default {
  name: 'AppAddToFavorite',
  components: {BaseIcon},
  props: {
    isFavorite: {
      type: Boolean,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    count: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      isFavoriteOptimistic: this.isFavorite,
      countOptimistic: this.count
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  },
  methods: {
    onClick() {
      if (!this.isLoggedIn) {
        this.$router.push({name: 'login'})
        return
      }
      if (this.isFavoriteOptimistic) {
        this.$store.dispatch('removeFromFavorite', {slug: this.slug})
        this.countOptimistic -= 1
        this.isFavoriteOptimistic = false
      } else {
        this.$store.dispatch('addToFavorite', {slug: this.slug})
        this.countOptimistic += 1
        this.isFavoriteOptimistic = true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.favorite {
  display: flex;
  align-items: stretch;
  font-size: 16px;
  line-height: 16px;
  color: $green;
  background-color: $white;
  padding: 4px 8px;
  border-radius: $mainBR;
  border: 1px solid $green;
  height: 28px;
  user-select: none;
  cursor: pointer;
  transition: 0.25s background-color, 0.25s color;

  &--active {
    background-color: $green;
    color: $white;
  }

  &__icon {
    margin-right: 2px;
  }
}

</style>
