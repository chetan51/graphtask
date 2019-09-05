<template>
  <li v-bind:class="levelClass">
    <span>•</span>
    <input
      v-model="title"
      @keydown.down.prevent="moveDown"
      @keydown.up.prevent="moveUp"
      @keydown.tab.prevent="shiftRight(index, $event)"
      @keydown.shift.tab.prevent="shiftLeft(index, $event)"
      @keydown.enter.prevent="addItem(index)"
      v-focus="index === focused"
      @focus="focused = index"
      @blur="focused = null">
    <ul>
      <task
        v-for="item in children"
        v-bind:key="item"
        v-bind:item="item"
        v-bind:level="level + 1"
      ></task>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["item", "level"],
  computed: {
    levelClass () {
      return "level" + this.level
    },
    task () {
      return this.$store.state.graph[this.item.id]
    },
    title: {
      get () {
        return this.task.value
      },
      set (value) {
        this.task.value = value
      }
    },
    children () {
      return this.task.children
    },
  },
  name: 'task'
}
</script>
