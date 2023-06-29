<template>
  <input class="input" :type="type" :placeholder="placeholder"/>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.input {
  padding: 12px 24px;
  border-radius: $mainBR;
  border: 1px solid $greyLight;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  color: $grey;

  &:focus {
    border-color: $green;
  }
}
</style>
