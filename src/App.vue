<template>
  <div>
    <Menu/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  }
}
</script>

<style>

</style>
