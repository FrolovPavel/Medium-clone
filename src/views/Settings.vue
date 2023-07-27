<template>
  <section
    v-if="currentUser"
    class="settings"
  >
    <div class="container settings__container">
      <h1 class="settings__title">Your Settings</h1>
      <app-update-user-form
        class="settings__form"
        :currentUser="currentUser"
        :disabled="isSubmitting"
        @submit="onSubmit"
      />
      <app-button
        class="settings__button"
        view="red"
        size="big"
        @click="onLogout"
      >
        Logout
      </app-button>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import AppUpdateUserForm from "@/components/Setting/UpdateUserForm";
import AppButton from "@/components/UI/Button";

export default {
  name: 'AppSettings',
  components: {AppButton, AppUpdateUserForm},
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors,
      currentUser: state => state.auth.currentUser,
    })
  },
  methods: {
    onSubmit(currentUserInput) {
      this.$store.dispatch('updateCurrentUser', {currentUserInput})
    },
    async onLogout() {
      await this.$store.dispatch('logout')
      await this.$router.push({name: 'globalFeed'})
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.settings {
  padding-top: 30px;
  padding-bottom: 40px;

  &__container {
    max-width: 900px;
  }

  &__title {
    font-size: 45px;
    text-align: center;
    margin-bottom: 30px;
  }

  &__form {
    border-bottom: 1px solid $greyLight;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  &__button {
    display: block;
    margin-left: auto;
  }
}

</style>
