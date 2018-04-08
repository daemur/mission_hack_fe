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
<style lang="scss">
@import "node_modules/bulma/sass/utilities/initial-variables";
@import "node_modules/bulma/sass/utilities/functions";

$hover-shadow: 5px 12px 40px #c3c3c3;
$new-shadow: 3px 3px 7px #c3c3c3;

$box-shadow: $new-shadow;
$box-padding: 1.5rem;
$box-link-hover-shadow: $hover-shadow;

$card-shadow: $new-shadow;
$card-header-shadow: none;

@import "node_modules/bulma/bulma";
</style>
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
