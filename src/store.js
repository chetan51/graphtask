import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    graph: {
      "a": {
        value: 'A',
        children: [
          {
            id: 'a1',
          },
          {
            id: 'a2',
          }
        ]
      },
      "a1": {
        value: 'A1',
        children: [
          {
            id: 'a1a'
          },
          {
            id: 'a1b'
          }
        ]
      },
      "a2": {
        value: 'A2'
      },
      "a1a": {
        value: 'A1a'
      },
      "a1b": {
        value: 'A1b'
      },
      "b": {
        value: 'B'
      },
      "c": {
        value: 'C',
        children: [
          {
            "id": "a1"
          }
        ]
      }
    },
    tasks: [
      {
        id: 'a',
      },
      {
        id: 'b',
      },
      {
        id: 'c',
      }
    ]
  },

  mutations: {
  },

  actions: {
  }
});

export default store;
