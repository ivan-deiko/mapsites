<template>
  <div>
    <table v-if="!isLoading && !isError" >
      <Tbody />
    </table>
    <div 
      class="error-container"
      v-if="isError"
    >
      <p class="error-message">Error message: {{ errorMessage }}</p>
      <div class="button-reload" @click="fetchSitemaps">Reload </div>
    </div>
    <div v-if="isLoading" class="loading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="red"
        indeterminate
      />
    </div>
  </div>
</template>

<script>
  import Tbody from './components/Tbody'
  import { FETCH_SITEMAPS } from '@/store/actions/const'

  export default {
    data () {
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
      }
    },
    beforeMount() {
      this.fetchSitemaps();
    },
    methods: {
      fetchSitemaps() {
        this.isLoading = true;
        this.isError = false;

        setTimeout(() => {
          this.$store.dispatch(FETCH_SITEMAPS)
          .catch(err => {
            this.isError = true;
            this.errorMessage = err;
          })
          .finally(() => this.isLoading = false)
        }, 500);
      }
    },
    components: {
      Tbody,
    }
  }
</script>