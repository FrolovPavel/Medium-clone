<template>
  <ul class="errors">
    <li
      class="errors__item"
      v-for="errorMessage in errorMessages"
      :key="errorMessage"
    >
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppValidationErrors',
  props: {
    errors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.errors).map(name => {
        const messages = this.errors[name].join(', ')
        return `${name} ${messages}`
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.errors {

  &__item {
    color: $red;
    font-weight: 600;
  }
}
</style>
