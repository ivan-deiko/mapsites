<template>
  <section class="sitemaps-filters">
    <h3>Filters:</h3>
    <div class="filters-container">
      <UrlsFilter />
      <SelectFilter 
        :selectItems="['All types', 'Sitemap', 'Sitemap index', 'Unknown']" 
        :defaultItem="'All types'"
      />
      <SelectFilter 
        :selectItems="['Submitted', 'Submitted2', 'Submitted3', 'Submitted4']" 
        :defaultItem="'Submitted'"
      />
      <CalendarFilter />
      <SelectFilter 
        :selectItems="['Success', `Couldn't fetch`, 'Errors', 'All sitemaps']" 
        defaultItem="All sitemaps"
        @select="filterStatus($event)"
      />
    </div>
  </section>
</template>

<script>
  import SelectFilter from './component/SelectFilter'
  import CalendarFilter from './component/CalendarFilter'
  import UrlsFilter from './component/UrlsFilter'
  import { FILTER_STATUS } from '@/store/actions/const'

  export default {
    components: {
      SelectFilter,
      CalendarFilter,
      UrlsFilter,
    },
    methods: {
      filterStatus(val) {
        this.$store.dispatch(FILTER_STATUS, val)
      }
    }
  }
</script>