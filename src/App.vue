<template>
  <div class="app-layout">
    <Header />
    <Table />
    <button>Add todo</button>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue';
  import Table from './components/Table/Table.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Table,
    },
  };
</script>

<style lang="scss">
  @import './App.scss';
</style>
