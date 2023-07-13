<template>
  <article class="article">
    <div class="article__head">
      <div class="article__author">
        <img
          class="article__image"
          :src="article.author.image"
          alt="avatar"
        >
        <div class="article__info">
          <router-link
            class="article__username link"
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            {{ article.author.username }}
          </router-link>
          <time
            class="article__created"
            :datetime="article.createdAt"
          >
            {{ formatDate }}
          </time>
        </div>
      </div>
      <div>favorites</div>
    </div>
    <router-link
      :to="{name: 'article', params: {slug: article.slug}}"
      class="article__middle"
    >
      <h2 class="article__title">{{ article.title }}</h2>
      <p class="article__description">{{ article.description }}</p>
    </router-link>
    <div class="article__footer">
      <router-link
        class="article__link"
        :to="{name: 'article', params: {slug: article.slug}}"
      >
        Read more...
      </router-link>
      TAG LIST
    </div>
  </article>
</template>

<script>
// TODO сделать скелетоны
// TODO ограничить вывод заголовка и описания
export default {
  name: 'AppArticle',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    formatDate() {
      const date = new Date(this.article.createdAt)

      return date.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.article {
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid $greyLight;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  &__author {
    display: flex;
    align-items: center;
  }

  &__image {
    border-radius: 100%;
    object-fit: cover;
    margin-right: 8px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__created {
    font-size: 12px;
    color: $greyLight;
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
    align-items: center;
    justify-content: space-between;
  }

}

</style>
