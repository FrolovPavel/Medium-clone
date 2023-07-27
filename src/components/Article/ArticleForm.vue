<template>
  <div class="article-form">
    <div class="container article-form__container">
      <app-validation-errors
        v-if="errors"
        :errors="errors"
      />
      <form
        @submit.prevent="onSubmit"
        class="article-form__form"
      >
        <app-input
          v-model="title"
          :value="title"
          type="text"
          placeholder="Article title"
        />
        <app-input
          v-model="description"
          :value="description"
          type="text"
          placeholder="What's this article about?"
        />
        <app-text-area
          v-model="body"
          :value="body"
          placeholder="What is this article about?"
          rows="8"
        />
        <app-input
          v-model="tagList"
          :value="tagList"
          type="text"
          placeholder="Enter tags"
        />
        <app-button
          class="article-form__button"
          view="green"
          size="big"
          :disabled="isSubmitting"
        >
          Publish Article
        </app-button>
      </form>
    </div>
  </div>

</template>

<script>
import AppValidationErrors from '@/components/ValidationErrors'
import AppInput from '@/components/UI/Input'
import AppTextArea from '@/components/UI/TextArea'
import AppButton from '@/components/UI/Button'

export default {
  name: 'AppArticleForm',
  components: {AppButton, AppTextArea, AppInput, AppValidationErrors},
  props: {
    initialValues: {
      type: Object,
      required: true,
    },
    errors: {
      type: Object,
      required: false
    },
    isSubmitting: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    }
  },
  methods: {
    onSubmit() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList.split(' ')
      }
      this.$emit('articleSubmit', form)
    }
  }
}
</script>

<style lang="scss">
.article-form {

  &__container {
    padding-top: 30px;
    max-width: 900px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__button {
    margin-left: auto;
  }
}

</style>
