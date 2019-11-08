<template>
    <div class="table-container">
        <table class="table">
            <tr class="table-header">
                <th>Todo</th>
            </tr>
            <tr
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            >
              <td class="table-row">
                  {{ todo.text }}
                  <div class="btn-holder">
                    <button @click="editTodo(todo.id)">edit</button>
                    <button @click="deleteTodo(todo.id)">delete</button>
                  </div>
              </td>
            </tr>
        </table>
    </div>
</template>


<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Table',

    computed: {
      ...mapState(['todos']),
    },

    methods: {
      editTodo(id) {
        this.$emit('set-edit-id', id);
        this.$emit('toggle-edit-modal');
      },
      getTodos() {
        this.$store.dispatch('getTodos');
      },
      deleteTodo(id) {
        this.$store.dispatch('deleteTodo', { id });
        this.$store.dispatch('getTodos');
      },
    },

    beforeMount() {
      this.getTodos();
    },

  };
</script>


<style lang="scss">
  @import './Table.scss';

</style>
