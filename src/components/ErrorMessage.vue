<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'AppErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'что-то пошло не так :('
    }
  }
}
</script>

<style scoped>

</style>
