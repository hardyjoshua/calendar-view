<template>
  <section class="calendar-view">
    <b-field label="Select a date">
      <b-datepicker
        v-model="selected"
        :show-week-number="showWeekNumber"
        :locale="locale"
        placeholder="Click to select..."
        icon="calendar-today"
        trap-focus>
      </b-datepicker>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'CalendarView',
  props: {
    msg: String
  },
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined // Browser locale
    }
  }
}
</script>

<style lang="scss">
  .calendar-view {
    max-width: 420px;
    padding: 40px;

    // override styles of datepicker
    & header {
      background-color: initial;
    }

    & .control.has-icons-left .input {
      padding-left: 1rem;
    }

    & .pagination-previous,
    & .pagination-next {
      margin-top: 0;
    }

    & .select:not(.is-multiple):not(.is-loading)::after {
      top: 45%;
    }

    & .pagination {
      font-size: 1rem;
    }
  }
  
</style>
