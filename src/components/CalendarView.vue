<template>
  <section class="calendar-view">
    <b-field label="Select a date">
      <b-datepicker
        v-model="selected"
        :date-formatter="dateFormatter"
        :show-week-number="showWeekNumber"
        :locale="locale"
        :selectable-dates="selectableDates"
        placeholder="Click to select..."
        trap-focus>
      </b-datepicker>
    </b-field>
  </section>
</template>

<script>
import moment from 'moment-timezone'

export default {
  name: 'CalendarView',
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined,
      selectableDates: [],
    }
  },
  mounted() {
    this.setSelctableDates()
  },
  methods: {
    dateFormatter(date){
      return moment(date).format("MM/DD/YYYY")
    },
    setSelctableDates() {
      const dates = [
        { date: "2020-11-02" },
        { date: "2020-11-04" },
        { date: "2020-11-05" },
        { date: "2020-11-07" },
        { date: "2020-11-08" }
      ]
      dates.forEach(item => {
        const dateItem = moment(item.date).utcOffset(item.date).toDate();
        this.selectableDates.push(dateItem)
      })
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
