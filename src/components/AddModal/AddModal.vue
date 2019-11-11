<template>
    <div class="modal-layout">
        <div class="modal">
            <h2>Add todo</h2>
            <input v-model="body.text" placeholder="Please give some text"/>
            <div class="modal-btn-wrapper">
                <button @click="$emit('toggle-add-modal')">Cancel</button>
                <button @click="addTodo">Add</button>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    name: 'AddModal',

    data() {
      return {
        body: {
          text: '',
        },
      };
    },

    methods: {
      async addTodo() {
        await this.$store.dispatch('addTodo', this.body);
        await this.$store.dispatch('getTodos');
      },
    },
  };
</script>


<style lang="scss">
  @import './AddModal.scss';

</style>
