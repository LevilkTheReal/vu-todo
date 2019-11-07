<template>
    <div class="table-container">
        <table class="table">
            <tr class="table-header">
                <th>Todo</th>
            </tr>
            <tr
            class="table-row"
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            >
                <td>
                    {{ todo.text }}
                    <button>edit</button>
                    <button>delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>


<script>
  export default {
    name: 'Table',

    data() {
      return {
        todos: [
          {
            id: 1,
            text: 'Learn Vue',
          },
          {
            id: 2,
            text: 'Learn about single-file components',
          },
          {
            id: 3,
            text: 'Fall in love',
          },
        ],
      };
    },
  };
</script>


<style lang="scss">
  @import './Table.scss';

</style>
