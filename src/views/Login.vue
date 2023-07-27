<template>
  <div class="login">
    <div class="container">
      <h1 class="login__title">Sign in</h1>
      <router-link
        class="link"
        :to="{name: 'register'}"
      >
        Need an account?
      </router-link>
      <div class="login__form-wrapper">
        <app-validation-errors
          v-if="validationErrors"
          class="login__errors"
          :errors="validationErrors"
        />
        <form
          class="login__form"
          @submit.prevent="onSubmit"
        >
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
            class="login__btn"
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
  name: 'AppLogin',
  components: {AppValidationErrors, AppButton, AppInput},
  data() {
    return {
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
      const request = await this.$store.dispatch('login', {
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

.login {

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
