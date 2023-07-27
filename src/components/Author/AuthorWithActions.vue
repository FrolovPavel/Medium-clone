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
          :link="{name: 'editArticle', params: {slug: $route.params.slug}}"
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
import AppButton from '@/components/UI/Button'
import AppAuthor from '@/components/Author/Author'

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
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.action {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @include for-tablet {
    flex-direction: row;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
