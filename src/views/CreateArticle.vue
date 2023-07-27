<template>
  <app-article-form
    :initialValues="initialValues"
    :errors="validationErrors"
    :isSubmitting="isSubmitting"
    @articleSubmit="onSubmit"
  >

  </app-article-form>
</template>

<script>
import AppArticleForm from '@/components/Article/ArticleForm'
import {mapState} from "vuex";

export default {
  name: 'AppCreateArticle',
  components: {AppArticleForm},
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.article.isSubmitting,
      validationErrors: state => state.article.validationErrors,
    })
  },
  methods: {
    async onSubmit(articleInput) {
      const article = await this.$store.dispatch('createArticle', {articleInput})
      await this.$router.push({name: 'article', params: {slug: article.slug}})
    }
  }
}
</script>

<style scoped>

</style>
