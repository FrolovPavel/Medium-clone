<template>
  <div class="feed">
    <div
      v-if="isLoading"
      class="feed__loader"
    >
      Loading...
    </div>
    <app-error-message
      v-if="error"
      :message="error"
    />
    <div
      v-if="feed"
      class="feed__content"
    >
      <app-article
        v-for="(article, index) in feed.articles"
        :key="index"
        :article="article"
      />
      <app-pagination
        :total="feed.articlesCount"
        :limit="limit"
        :currentPage="currentPage"
        :url="baseUrl"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {limit} from '@/helpers/vars'
import AppArticle from '@/components/Article'
import AppPagination from '@/components/Pagination'
import AppErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'AppFeed',
  components: {AppErrorMessage, AppArticle, AppPagination},
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      limit
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error,
    }),
    currentPage() {
      return (+this.$route.query.page || 1)
    },
    baseUrl() {
      return this.$route.path
    },
    queryOffset() {
      return this.currentPage * limit - limit
    }
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    }
  },
  methods: {
    fetchFeed() {
      this.$store.dispatch('getFeed', {
        apiUrl: `${this.apiUrl}?limit=${limit}&offset=${this.queryOffset}`
      })
    }
  },
  mounted() {
    this.fetchFeed()
  }
}
</script>

<style lang="scss">
.feed {
  width: 100%;
}
</style>
