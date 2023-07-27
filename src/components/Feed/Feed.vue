<template>
  <div class="feed">
    <app-article-preview-skeleton v-if="isLoading"/>
    <template v-if="!isLoading && feed.articles.length">
      <app-article-preview
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
    </template>
    <div
      v-else
      class="feed__empty"
    >
      There are no articles here :(
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {limit} from '@/helpers/vars'
import AppArticlePreview from '@/components/Article/ArticlePreview'
import AppPagination from '@/components/Feed/Pagination'
import AppArticlePreviewSkeleton from "@/components/Article/ArticlePreviewSkeleton";

export default {
  name: 'AppFeed',
  components: {AppArticlePreviewSkeleton, AppArticlePreview, AppPagination},
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
    },
    apiUrl() {
      this.fetchFeed()
    }
  },
  methods: {
    fetchFeed() {
      const divider = this.apiUrl.includes('?') ? '&' : '?'
      this.$store.dispatch('getFeed', {
        apiUrl: `${this.apiUrl}${divider}limit=${limit}&offset=${this.queryOffset}`
      })
    }
  },
  mounted() {
    this.fetchFeed()
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.feed {
  width: 100%;

  &__empty {
    color: $grey;
    padding: 20px 0;
  }
}
</style>
