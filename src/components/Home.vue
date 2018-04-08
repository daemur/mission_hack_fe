<template>
  <div class="section">
      <div class="container has-text-centered">
        {{ title }}
        <search-bar></search-bar>
      </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  name: 'home',
  data () {
    return {
      title: 'Hi this is our Mission Hack app'
    }
  },
  components: {
    [SearchBar.name]: SearchBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
