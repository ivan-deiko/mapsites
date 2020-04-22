<template>
  <tr 
    class="sitemap-row sitemap_row__height"
    :class="{'sitemap-row_selected': checked}"
  >
    <td class="sitemap-row_checkbox">
      <v-checkbox 
        v-model="checked"
        color="#0288D1"
      />
    </td>
    <td class="sitemap-row_path">
      <a :href="sitemap.path">
        <span>
          {{ sitemap.path | filteredPath }}
        </span>
        <LinkIcon />
      </a>
    </td>
    <td class="sitemap-row_index">
      Sitemap index
    </td>
    <td class="sitemap-row_date">
      <p>
        {{ sitemap.lastSubmitted | filteredDate}}
      </p>
    </td>
    <td class="sitemap-row_date sitemap-row_date__pt">
      <p>
        {{ sitemap.lastCheck | filteredDate}}
      </p>
    </td>
    <td class="sitemap-row_status">
      <p
        :class="`status_${this.sitemap.errors ? 'error' : 'success'}`"
      >
        {{ this.sitemap.errors | filteredErrors }}
      </p>
    </td>
    <td class="sitemap-row_urls">
      {{ sitemap.urls }}
    </td>
    <td class="sitemap-row_recrewl">
      <button>Recrewl</button>
    </td>
    <td class="sitemap-row_remove">
      <div @click="deleteSitemap">
        <RemoveIcon />
      </div>
    </td>
  </tr>
</template>

<script>
  import { 
    SELECT_SINGLE,
    DELETE_SITEMAP,
  } from '@/store/actions/const'
  import RemoveIcon from '../../icons/RemoveIcon'
  import LinkIcon from '../../icons/LinkIcon'

  export default {
    props: {
      sitemap: Object,
    },
    data() {
      return {
        checked: this.sitemap.checked,
      }
    },
    filters: {
      filteredPath(value) {
        const index = value.lastIndexOf('/')
        return value.slice(index);
      },
      filteredDate(value) {
        const monthNames = ["Jan", "Feb", "Mar  ", "Apr", "May", "June",
          "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        const date = new Date(value)
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const day = date.getDate();
        return `${month} ${day}, ${year}`
      },
      filteredErrors(value) {      
        if (!value) return 'Success';
        return value > 1 ? `${value} errors` : '1 error'
      }
    },
    methods: {
      deleteSitemap() {
        this.$store.dispatch(DELETE_SITEMAP, this.sitemap.path);
      }
    },
    watch: {
      checked(newVal) {
        if (this.sitemap.checked === newVal) return;
        this.$store.dispatch(SELECT_SINGLE, {checked: this.checked, path: this.sitemap.path});
      },
      sitemap() {
        this.checked = this.sitemap.checked;
      }
    },
    components: {
      RemoveIcon,
      LinkIcon,
    }
  }
</script>