<template>
  <div class="signup">
    <div class="container">
      <h1 class="signup__title">Sign in</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRegister'
}
</script>

<style scoped lang="scss">
@import '../assets/scss/vars';

.signup {

  &__title {
    color: $dark;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
  }
}
</style>
