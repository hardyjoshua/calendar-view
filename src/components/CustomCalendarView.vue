<template>
  <section class="calendar-customview">
    <b-field label="Task 5: Custom View">
      <b-datepicker
        v-model="selected"
        :date-formatter="dateFormatter"
        :show-week-number="showWeekNumber"
        :locale="locale"
        :input="dateSelected(selected)"
        placeholder="Click to select..."
        trap-focus
      >
        <span class="calendar-customview__footer">{{footerDate}}</span>
      </b-datepicker>
    </b-field>
  </section>
</template>

<script>
import moment from 'moment-timezone'

export default {
  name: 'CustomCalendarView',
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined,
      selectableDates: [],
      footerDate: '',
      dateField: null,
    }
  },
  mounted() {
    this.dateField = document.querySelector('.calendar-customview .field-body')
    this.setMonthField(moment(this.selected).format("MMMM"))
    document.querySelector('.calendar-customview .pagination-next').addEventListener('click', this.monthChanged)
  },
  methods: {
    dateFormatter(date){
      return moment(date).format("dddd, MMMM Do YYYY")
    },
    setMonthField(month) {
      if (this.dateField)
        this.dateField.innerHTML = month
    },
    dateSelected(date) {
      this.footerDate = moment(date).format("MMMM D, YYYY")
      this.setMonthField(moment(date).format("MMMM"))
    },
    monthChanged() {
      this.setMonthField(moment(this.selected).format("MMMM"))
    }
  }
}
</script>

<style lang="scss">
  .calendar-customview {
    width: 40%;
    max-width: 420px;
    padding: 40px;

    &__footer {
      font-weight: bold;
    }

    .field-body {
      color: black;
    }

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
