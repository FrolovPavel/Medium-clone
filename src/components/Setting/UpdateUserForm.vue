<template>
  <form
    class="update-user"
    @submit.prevent="onSubmit"
  >
    <app-input
      v-model="form.image"
      :value="form.image"
      type="text"
      placeholder="URL of profile picture"
    />
    <app-input
      v-model="form.username"
      :value="form.username"
      type="text"
      placeholder="Username"
    />
    <app-text-area
      v-model="form.bio"
      :value="form.bio"
      rows="8"
      placeholder="Short bio about you"
    />
    <app-input
      v-model="form.email"
      :value="form.email"
      type="Email"
      placeholder="Email"
    />
    <app-input
      v-model="form.password"
      :value="form.password"
      type="password"
      placeholder="New password"
    />
    <app-button
      class="update-user__button"
      view="green"
      size="big"
      :disabled="disabled"
    >
      Update settings
    </app-button>
  </form>
</template>

<script>
import AppInput from '@/components/UI/Input'
import AppTextArea from '@/components/UI/TextArea'
import AppButton from '@/components/UI/Button'

export default {
  name: 'AppUpdateUserForm',
  components: {AppButton, AppTextArea, AppInput},
  props: {
    currentUser: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    form() {
      return {
        image: this.currentUser.image,
        username: this.currentUser.username,
        bio: this.currentUser.bio,
        email: this.currentUser.email,
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>

<style lang="scss">
.update-user {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__button {
    margin-left: auto;
  }
}

</style>
