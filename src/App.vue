<template>
  <div id="app">
    <globalheader></globalheader>
    <sidebar></sidebar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import Sidebar from './components/sidebar.vue';
  import Globalheader from './components/header.vue';

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
    Sidebar,
    Globalheader
  }
}
</script>

<style>
html, body {
  margin:0;
}
body {
  font-family: Helvetica, sans-serif;
}
</style>
