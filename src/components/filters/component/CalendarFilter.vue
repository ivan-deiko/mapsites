<template>
  <div class="calendar select">
    <div class="select-display">
      <span class="calendar-icon">
        <CalendarIcon />
      </span>
      <span class="select-date">2/12/19 - 2/12..</span>
    </div>
    <div class="select-arrow">
      <ArrowIcon />
    </div>
  </div>  
</template>

<script>
  import CalendarIcon from '../../icons/CalendarIcon'
  import ArrowIcon from '../../icons/ArrowIcon'

  export default {
    components: {
      CalendarIcon,
      ArrowIcon,
    }
  }
</script>