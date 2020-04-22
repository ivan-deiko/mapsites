<template>
  <div id="app">
    <Header />
    <Filters />
    <SiteMapsTable />
  </div>
</template>

<script>
  import Header from './components/header/header'
  import Filters from './components/filters/Filters'
  import SiteMapsTable from './components/siteMapsTable/SiteMapsTable'
  import './assets/style/sass/_main.sass'

  export default {
    components: {
      Header,
      Filters, 
      SiteMapsTable
    }
  };
</script>
