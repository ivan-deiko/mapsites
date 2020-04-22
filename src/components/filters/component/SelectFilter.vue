<template>
  <div class="select" tabindex="0" ref="select">
    <div class="select-display">{{ selectedItem }}</div>
    <div class="select-arrow">
      <ArrowIcon />
    </div>
    <div class="select-container">
      <div 
        class="select-item"
        :class="{'select-item_selected': item === selectedItem}"
        v-for="item in selectItems"
        :key="item"
        @click="customSelect(item)"
      > 
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
  import ArrowIcon from '../../icons/ArrowIcon'

  export default {
    props: {
      selectItems: Array,
      defaultItem: String,
    },
    data () {
      return {
        selectedItem: this.defaultItem,
      }
    },
    methods: {
      customSelect(val) {
        this.$refs.select.blur();
        this.selectedItem = val;
        this.$emit('select', val);
      }
    },
    components: {
      ArrowIcon,
    }
  }
</script>