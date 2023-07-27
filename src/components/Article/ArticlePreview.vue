<template>
  <article class="article-preview">
    <div class="article-preview__head">
      <app-author
        :authorData="authorData"
      />
      <app-add-to-favorite
        :isFavorite="article.favorited"
        :slug="article.slug"
        :count="article.favoritesCount"
      />
    </div>
    <router-link
      :to="{name: 'article', params: {slug: article.slug}}"
      class="article-preview__middle"
    >
      <h2 class="article-preview__title">{{ article.title }}</h2>
      <p class="article-preview__description">{{ article.description }}</p>
    </router-link>
    <div class="article-preview__footer">
      <router-link
        class="article-preview__link"
        :to="{name: 'article', params: {slug: article.slug}}"
      >
        Read more...
      </router-link>
      <app-tag-list
        class="article-preview__tag-list"
        :iterator="article.tagList"
        viewTags="ghost"
      />
    </div>
  </article>
</template>

<script>
// TODO сделать скелетоны
// TODO ограничить вывод заголовка и описания
import AppAuthor from '@/components/Author/Author'
import AppTagList from '@/components/TagList'
import AppAddToFavorite from '@/components/AddToFavorite'

export default {
  name: 'AppArticlePreview',
  components: {AppAddToFavorite, AppTagList, AppAuthor},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    authorData() {
      return {
        image: this.article.author.image,
        username: this.article.author.username,
        date: this.article.createdAt
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.article-preview {
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid $greyLight;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  &__middle {
    display: block;
    margin-bottom: 14px;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 4px;
  }

  &__description {
    color: $greyLight;
  }

  &__link {
    font-size: 14px;
    color: $greyLight;
  }

  &__footer {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;

    @include for-tablet {
      flex-direction: row;
      justify-content: space-between;
    }

  }

}

</style>
