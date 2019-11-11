<template>
    <div class="modal-layout">
        <div class="modal">
            <h2>Edit todo</h2>
            <input v-model="body.text" placeholder="Please give some text"/>
            <div class="modal-btn-wrapper">
                <button @click="$emit('toggle-edit-modal')">Cancel</button>
                <button @click="editTodo()">Edit</button>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    name: 'EditModal',
    props: ['id'],

    data() {
      return {
        body: {
          text: '',
        },
      };
    },

    methods: {
      async editTodo() {
       await this.$store.dispatch('editTodo', [{ id: this.id }, { ...this.body }]);
       await this.$store.dispatch('getTodos');
      },
    },
  };
</script>


<style lang="scss">
  @import './EditModal.scss';

</style>
