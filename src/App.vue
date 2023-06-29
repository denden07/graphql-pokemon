<template>
  <header>
    <Nav></Nav>
  </header>
  <Loader v-if="$store.state.loading"></Loader>
  <WelcomeTrainer v-if="!$store.state.hideWellcome"></WelcomeTrainer>
  <List v-if="!$store.state.loading"></List>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Navigation.vue'
import List from './components/PokemonList.vue'
import Loader from './components/loader.vue'
import WelcomeTrainer from './components/WelcomeTrainer.vue'
</script>

<script>

</script>

<style scoped>
body {
  background: #222222 !important;
}
</style>
