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
  methods: {
    moveDown: function() {
      this.focused = Math.min(this.focused + 1, this.list.length - 1);
    },
    moveUp: function () {
      this.focused = Math.max(this.focused - 1, 0);
    },
    shiftLeft: function (index, event) {
      let self = this;
      self.list[index].level = Math.max(self.list[index].level - 1, 0);
    },
    shiftRight: function (index, event) {
      if (event.shiftKey)
        return;
      if (index === 0) return;
      this.list[index].level = Math.min(this.list[index].level + 1, this.list[index - 1].level + 1, MAX_LEVEL);
    },
    addItem: function (index) {
      this.list.splice(index + 1, 0, {value: '', level: this.list[index].level});
      this.focused = index + 1;
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

h1, h2 {
  font-weight: normal;
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
