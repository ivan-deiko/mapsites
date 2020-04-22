<template>
  <header class="sitemaps-header">
    <div class="table-name">
      <p>Submitted sitemaps</p>
      <InfoIcon />
    </div>
    <ul class="sitemaps-header_controller" v-show="GET_COUNT_SELECTED">
      <li class="selected-count">Selected sitemaps: {{ GET_COUNT_SELECTED }}</li>
      <li class="recrawl-button">Recrawl sitemap</li>
      <li 
        class="remove-button"
        @click="remove"
      >
        Remove sitemap
      </li>
    </ul>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import InfoIcon from '../icons/InfoIcon'
  import { GET_COUNT_SELECTED } from '@/store/getters/const'
  import { DELETE_SITEMAP } from '@/store/actions/const'

  export default {
    computed: {
      ...mapGetters([GET_COUNT_SELECTED]),
    },
    methods: {
      remove() {
        this.$store.dispatch(DELETE_SITEMAP)
      }
    },
    components: {
      InfoIcon,
    }
  }
</script>