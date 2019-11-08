import Vue from 'vue';
import Vuex from 'vuex';
import {
 getTodos, addTodo, deleteTodo, editTodo,
} from './services/todoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      loading: false,
      todos: [],
  },
  mutations: {
      SET_LOADING_STATUS(state) {
          state.loading = !state.loading;
      },
      SET_TODOS(state, todos) {
          state.todos = todos;
      },
  },
  actions: {
      async getTodos(context) {
        context.commit('SET_LOADING_STATUS');
        const todos = await getTodos();
        context.commit('SET_LOADING_STATUS');
        context.commit('SET_TODOS', todos);
      },
      async addTodo(context, todo) {
        context.commit('SET_LOADING_STATUS');
        await addTodo(todo);
        context.commit('SET_LOADING_STATUS');
      },
      async deleteTodo(context, id) {
        context.commit('SET_LOADING_STATUS');
        await deleteTodo(id);
        context.commit('SET_LOADING_STATUS');
      },
      async editTodo(context, payload) {
        const params = payload[0];
        const body = payload[1];
        context.commit('SET_LOADING_STATUS');
        await editTodo(params, body);
        context.commit('SET_LOADING_STATUS');
      },
  },
});
