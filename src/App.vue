<template>
  <div class="app-layout">
    <AddModal v-if="openAddModal" @toggle-add-modal="toggleAddModal"/>
    <EditModal v-bind:id="editID" v-if="openEditModal" v-on:toggle-edit-modal="toggleEditModal"/>
    <MyHeader />
    <MyTable v-on:set-edit-id="setEditID" v-on:toggle-edit-modal="toggleEditModal" />
    <button @click="toggleAddModal">Add todo</button>
  </div>
</template>

<script>
  import MyHeader from './components/Header/Header.vue';
  import MyTable from './components/Table/Table.vue';
  import AddModal from './components/AddModal/AddModal.vue';
  import EditModal from './components/EditModal/EditModal.vue';

  export default {
    name: 'App',


    components: {
      MyHeader,
      MyTable,
      AddModal,
      EditModal,
    },

    data() {
      return {
        editID: '',
        openAddModal: false,
        openEditModal: false,
      };
    },

    methods: {
      toggleAddModal() { this.openAddModal = !this.openAddModal; },
      toggleEditModal() { this.openEditModal = !this.openEditModal; },
      setEditID(id) { this.editID = id; },
    },

  };
</script>

<style lang="scss">
  @import './App.scss';
</style>
