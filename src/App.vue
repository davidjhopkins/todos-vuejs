<template>
  <div id="app">
    <sidebar></sidebar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import Sidebar from './components/sidebar.vue';

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Sample'
    }
  },
  components: {
    Sidebar
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
