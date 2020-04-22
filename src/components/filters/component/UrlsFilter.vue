<template>
  <div class="urls-filter"
    @click="customFocus($event)"
    ref="container"
  >
    <input
      v-model="filterText"
      ref="input"
      placeholder="URL or its part"
      class="urls-filter_input"
      :class="{'urls-filter_input_focus': show}"
    />
    <div 
      class="container-controllers" 
      :class="{'container-controllers_focus': show}"
    >
      <div 
        class="controller"
        v-for="filter in filters"
        :key="filter"
      >
        <div 
          class="controller-radio"
          :class="{'controller-radio_selected': filter === selectedFilter}"
          @click="customSelect(filter)"
        />
        <div class="controller-label" @click="customSelect(filter)">{{ filter }}</div>
      </div>
      <div class="controller-buttons">
        <span class="button-reset" @click="reset">Reset</span>
        <span 
          class="button-apply"
          :class="{'button-apply_disabled': !filterText.trim()}"
          @click="apply"
        >
          Apply
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { FILTER_URLS } from '@/store/actions/const'

  export default {
    data() {
      return {
        filterText: '',
        show: false,
        selectedFilter: 'Sitemap contains',
        filters: ['Sitemap contains', `Sitemap doesn't contain`, 'Exact match']
      }
    },
    methods: {
      customSelect(val) {
        this.selectedFilter = val;
      },
      customFocus({ target }) {
        const elClass = target.className
        if (elClass === 'button-reset' || elClass === 'button-apply') return;

        this.show = true;
        this.$refs.input.focus()
      },
      showContainer({ target }) {
        if (!this.$refs.container.contains(target)) this.show = false;
      },
      reset() {
        this.show = false;
        this.selectedFilter = 'Sitemap contains';
        this.filterText = '';
        this.$store.dispatch(FILTER_URLS, {type: null, text: null});
      },
      apply() {
        if (!this.filterText.trim()) return;

        this.$store.dispatch(FILTER_URLS, {type: this.selectedFilter, text: this.filterText});
        this.show = false;
      }
    },
    created() {
      document.addEventListener('click', this.showContainer);
    },
    destroyed() {
      document.removeEventListener(this.showContainer);
    }
    
  }
</script>