<template>
  <div>
    <app-header/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
<script>
import AppHeader from '@/components/Header'

export default {
  components: {AppHeader},
  mounted() {
    this.$store.dispatch('getCurrentUser')
  }
}
</script>
