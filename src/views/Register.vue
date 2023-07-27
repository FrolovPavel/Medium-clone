<template>
  <div class="register">
    <div class="container">
      <h1 class="register__title">Sign up</h1>
      <router-link
        class="link"
        :to="{name: 'login'}"
      >
        Have an account?
      </router-link>
      <div class="register__form-wrapper">
        <app-validation-errors
          v-if="validationErrors"
          class="register__errors"
          :errors="validationErrors"
        />
        <form
          class="register__form"
          @submit.prevent="onSubmit"
        >
          <app-input
            v-model="username"
            :value="username"
            type="text"
            placeholder="Username"
          />
          <app-input
            v-model="email"
            :value="email"
            type="email"
            placeholder="Email"
          />
          <app-input
            v-model="password"
            :value="password"
            type="password"
            placeholder="Password"
          />
          <app-button
            class="register__btn"
            view="green"
            size="big"
            :disabled="isSubmitting"
          >
            Sign up
          </app-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/UI/Input'
import AppButton from '@/components/UI/Button'
import AppValidationErrors from '@/components/ValidationErrors'
import {mapState} from 'vuex'

export default {
  name: 'AppRegister',
  components: {AppValidationErrors, AppButton, AppInput},
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors,
    })
  },
  methods: {
    async onSubmit() {
      const request = await this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
      request ? await this.$router.push({name: 'globalFeed'}) : ''
    }
  },
  destroyed() {
    this.$store.commit('clearValidationErrors')
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/vars';

.register {

  text-align: center;

  &__title {
    color: $dark;
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  &__form-wrapper {
    max-width: 540px;
    margin: 20px auto 0;
  }

  &__errors {
    text-align: left;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  &__btn {
    max-width: 112px;
    margin-left: auto;
  }
}
</style>
