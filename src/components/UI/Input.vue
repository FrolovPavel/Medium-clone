<template>
  <input
    class="input"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    @input="onInput"
  />
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
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.input {
  padding: 12px 24px;
  border-radius: $mainBR;
  border: 1px solid $greyLight;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  color: $dark;
  transition: 0.25s border-color;

  &::placeholder {
    color: $grey;
  }

  &:focus {
    border-color: $green;
  }
}
</style>
