<template>
  <div class="action">
    <app-author
      class="action__author"
      :authorData="authorData"
    />
    <div class="action__buttons">
      <template v-if="isAuthor">
        <app-button
          icon="pen"
          view="ghost-grey"
          @click="test"
        >
          Edit Article
        </app-button>
        <app-button
          icon="trash"
          view="ghost-red"
          @click="$emit('delete')"
        >
          Delete Articles
        </app-button>
      </template>
      <template v-else>
        <app-button
          view="ghost-grey"
        >
          Follow {{ authorData.username }}
        </app-button>
        <app-button
          view="ghost-green"
        >
          Favorite Articles
        </app-button>
      </template>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/Button'
import AppAuthor from '@/components/Author'

export default {
  name: 'AppAuthorWithActions',
  components: {AppButton, AppAuthor},
  props: {
    isAuthor: {
      type: Boolean,
      required: true
    },
    authorData: {
      type: Object,
      required: true
    }
  },
  methods: {
    test() {
      console.log(this.$route)
      this.$router.push({name: 'editArticle', params: {slug: this.$route.params.slug}})
    }
  }
}
</script>

<style lang="scss">
.action {
  display: flex;
  align-items: center;

  &__author {
    margin-right: 20px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
