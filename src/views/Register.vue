<template>
  <div class="register">
    <div class="container">
      <h1 class="register__title">Sign up</h1>
      <router-link class="link" :to="{name: 'login'}">
        Have an account?
      </router-link>
      <form class="register__form" @submit.prevent="onSubmit">
        <app-input type="text" placeholder="Username"/>
        <app-input type="email" placeholder="Email"/>
        <app-input type="password" placeholder="Password"/>
        <app-button class="register__btn" view="green" size="big">
          Sign up
        </app-button>
      </form>

    </div>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput";
import AppButton from "@/components/AppButton";

export default {
  name: 'AppRegister',
  components: {AppButton, AppInput},
  methods: {
    onSubmit() {
      console.log('sub')
    }
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

  &__form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 540px;
    margin: 20px auto 0;
  }

  &__btn {
    max-width: 112px;
    margin-left: auto;
  }
}
</style>
