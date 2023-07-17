<template>
  <app-article-form
    :initialValues="initialValues"
    :errors="validationErrors"
    :isSubmitting="isSubmitting"
    @articleSubmit="onSubmit"
  />
</template>

<script>
import AppArticleForm from '@/components/ArticleForm'
import {mapState} from 'vuex'

export default {
  name: 'AppEditArticle',
  components: {AppArticleForm},
  computed: {
    ...mapState({
      article: state => state.article.data,
      isLoading: state => state.article.isLoading,
      isSubmitting: state => state.article.isSubmitting,
      validationErrors: state => state.article.validationErrors,
    }),
    initialValues() {
      if (!this.article) {
        return {
          title: '',
          description: '',
          body: '',
          tagList: []
        }
      }

      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList
      }
    }
  },
  methods: {
    async onSubmit(articleInput) {
      const article = await this.$store.dispatch('updateArticle', {
        slug: this.$route.params.slug,
        articleInput
      })
      await this.$router.push({name: 'article', params: {slug: article.slug}})
    }
  }
}
</script>
