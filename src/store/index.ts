import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
    amount: 100,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
    ]
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    incrementPayload(state, payload) {
      state.amount += payload.amount
    }
  },
  actions: {},
  modules: {}
});
