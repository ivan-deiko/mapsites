<template>
  <tr 
    class="sitemap-row sidemap-row_headrow"
  >
    <th class="sitemap-row_checkbox">
       <v-checkbox 
        v-model="checked"
        color="#0288D1"
      />
    </th>
    <th class="sitemap-row_path">
      Sitemap 
    </th>
    <th class="sitemap-row_index">
      Type 
    </th>
    <th class="sitemap-row_date">
      Submitted 
    </th>
    <th class="sitemap-row_date sitemap-row_date__pt">
      Last Check 
    </th>
    <th class="sitemap-row_status"> 
      Status 
    </th>
    <th class="sitemap-row_urls">
      URLs 
    </th>
    <th class="sitemap-row_recrawl"> 
      <p class="headrow-recrawl">
        Recrawl sitemap
      </p>
    </th>
    <th class="sitemap-row_remove">
      <p class="headrow-remove">
        Remove sitemap
      </p>
    </th>
  </tr>
</template>

<script>
  import { SELECT_ALL } from '@/store/actions/const'

  export default {
    data () {
      return {
        checked: false,
      }
    },
    watch: {
      checked() {
        this.$store.dispatch(SELECT_ALL, this.checked)
      }
    }
  }
</script>
