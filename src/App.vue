<template>
  <div id="app">
    <notifications group="success" position="top center" classes="is-success" width="60%"/>
    <notifications group="warning" position="top center" classes="is-warning" width="60%"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
