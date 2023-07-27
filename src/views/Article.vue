<template>
  <section
    v-if="article"
    class="article"
  >
    <app-banner-article
      class="article__banner"
      :title="article.title"
      :isAuthor="isAuthor"
      :authorData="authorData"
      @delete="deleteArticle"
    />
    <div class="container">
      <div class="article__text">{{ article.body }}</div>
      <app-tag-list
        class="article__tag-list"
        :iterator="article.tagList"
        viewTags="ghost"
      />
      <app-author-with-actions
        class="article__action"
        :isAuthor="isAuthor"
        :authorData="authorData"
        @delete="deleteArticle"
      />
    </div>
  </section>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import AppBannerArticle from '@/components/BannerArticle'
import AppAuthorWithActions from '@/components/AuthorWithActions'
import AppTagList from '@/components/TagList'

export default {
  name: 'AppArticle',
  components: {AppTagList, AppAuthorWithActions, AppBannerArticle},
  computed: {
    ...mapState({
      article: state => state.article.data,
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
    }),
    ...mapGetters([
      'currentUser'
    ]),
    isAuthor() {
      if (!this.article || !this.currentUser) {
        return false
      }
      return this.article.author.username === this.currentUser.username
    },
    authorData() {
      return {
        image: this.article.author.image,
        username: this.article.author.username,
        date: this.article.createdAt
      }
    },
    slug() {
      return this.$route.params.slug
    }
  },
  methods: {
    async deleteArticle() {
      await this.$store.dispatch('deleteArticle', {slug: this.slug})
      await this.$router.push({name: 'globalFeed'})
    }
  },
  mounted() {
    this.$store.dispatch('getArticle', {slug: this.slug})
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.article {
  padding-bottom: 40px;

  &__banner {
    margin-bottom: 32px;
  }

  &__text {
    font-size: 19px;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 32px;
  }

  &__tag-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    padding-bottom: 32px;
    border-bottom: 1px solid $greyLight;
    margin-bottom: 32px;
  }

  &__action {
    justify-content: center;
  }
}

</style>
