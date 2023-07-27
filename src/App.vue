<template>
  <div id="app">
    <app-header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
<script>
import AppHeader from '@/components/Header/Header'

export default {
  components: {AppHeader},
  mounted() {
    this.$store.dispatch('getCurrentUser')
  }
}
</script>
