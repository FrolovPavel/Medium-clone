<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      :key="page"
      class="pagination__item"
    >
      <router-link
        class="pagination__link"
        :class="{active: currentPage === page}"
        :to="{path: url, query: {page: page}}"
      >
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {range} from '@/helpers/utils'

export default {
  name: 'AppPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.pagination {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;

  &__item {
    width: 42px;
    height: 42px;

    &:last-child {
      .pagination__link {
        border-right: 1px solid $greyLight;
      }
    }

  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid $greyLight;
    border-right: none;
    color: $green;
    background-color: $white;
    transition: 0.25s background-color;

    &.active {
      border-cololr: $green;
      background-color: $green;
      color: $white;
      @include hover {
        background-color: darken($green, 10%);
      }
    }

    @include hover {
      background-color: darken($white, 10%);
    }

  }
}
</style>
