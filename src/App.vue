<template>
  <div id="app">
    <ul>
      <task
        v-for="item in tasks"
        v-bind:key="item"
        v-bind:item="item"
        v-bind:level="0"
      ></task>
    </ul>
  </div>
</template>

<script>
import { focus } from 'vue-focus';
import Vue from 'vue';

import Task from './components/Task'

const MAX_LEVEL = 10;

export default {
  name: 'app',
  directives: { focus: focus },
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  components: {
    Task
  }
}
</script>

<style lang="scss">
$maxLevel: 10;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 100px;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  input {
    width: 90%;
    border: 0px;
    outline: none;
  }
}

@for $i from 0 through $maxLevel {
  li.level#{$i} {
    margin-left: 20px * $i;
  }
}

a {
  color: #42b983;
}
</style>
