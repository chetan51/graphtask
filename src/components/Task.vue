<template>
  <li v-bind:class="levelClass">
    <span>•</span>
    <input
      v-model="title"
      @keydown.down.prevent="moveDown"
      @keydown.up.prevent="moveUp"
      @keydown.tab.prevent="shiftRight(index, $event)"
      @keydown.shift.tab.prevent="shiftLeft(index, $event)"
      @keydown.enter.prevent="createSibling()"
      v-focus="index === focused"
      @focus="focused = index"
      @blur="focused = null">
    <ul>
      <task
        v-for="child in children"
        v-bind:key="child"
        v-bind:item="child"
        v-bind:parentItem="item"
        v-bind:level="level + 1"
      ></task>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["item", "level", "parentItem"],
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
  methods: {
    createSibling () {
      let newId = Math.random().toString()

      let newTask = {
        value: "[UNTITLED]",
        children: []
      }

      this.$store.state["graph"][newId] = newTask

      let newItem = {
        id: newId
      }

      if (this.parentItem) {
        // TODO: Insert task underneath current one, instead of at the end
        this.$store.state["graph"][this.parentItem.id].children.push(newItem)
      }
      else {
        // TODO: Insert task underneath current one, instead of at the end
        this.$store.state["tasks"].push(newItem)
      }
    }
  },
  name: 'task'
}
</script>
