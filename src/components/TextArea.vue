<template>
  <textarea
    class="text-area"
    :value="value"
    :placeholder="placeholder"
    :rows="rows"
    @input="onInput"
  >

  </textarea>
</template>

<script>
export default {
  name: 'AppTextArea',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: '2'
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
@import '../assets/scss/vars';

.text-area {
  padding: 12px 24px;
  border-radius: $mainBR;
  border: 1px solid $greyLight;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  color: $dark;
  transition: 0.25s border-color;
  outline: $green;

  &::placeholder {
    color: $grey;
  }

  &:focus {
    border-color: $green;
  }
}
</style>
