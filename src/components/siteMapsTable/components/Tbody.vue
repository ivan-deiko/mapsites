<template>
  <tbody class="sitemaps-tbody">
    <HeadRow />
    <SiteMap 
      v-for="sitemap in GET_SITEMAPS"
      :key="sitemap.path"
      :sitemap="sitemap"
    />
  </tbody>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { GET_SITEMAPS } from '@/store/getters/const'
  import SiteMap from './SiteMap'
  import HeadRow from './HeadRow'

  export default {
    computed: {
      ...mapGetters([ GET_SITEMAPS ]),
    },
    components: {
      SiteMap,
      HeadRow,
    },
  }
</script>