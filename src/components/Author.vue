<template>
  <div class="author">
    <img
      class="author__image"
      :src="authorData.image"
      alt="avatar"
    >
    <div class="author__info">
      <router-link
        class="author__username link"
        :to="{name: 'userProfile', params: {slug: authorData.username}}"
      >
        {{ authorData.username }}
      </router-link>
      <time
        class="author__created"
        :datetime="authorData.date"
      >
        {{ formatDate }}
      </time>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAuthor',
  props: {
    authorData: {
      type: Object,
      required: true
    }
  },
  computed: {
    formatDate() {
      const date = new Date(this.authorData.date)
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

.author {
  display: flex;
  align-items: center;

  &__image {
    border-radius: 100%;
    object-fit: cover;
    margin-right: 8px;
    width: 32px;
    height: 32px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__created {
    font-size: 12px;
    color: $grey;
  }
}
</style>
