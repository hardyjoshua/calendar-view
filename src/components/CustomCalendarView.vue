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
    }
  },
  mounted() {
    this.hideYearSelect()
  },
  methods: {
    dateFormatter(date) {
      return moment(date).format("dddd, MMMM Do YYYY")
    },
    hideYearSelect() {
      const yearSelect = document.querySelectorAll('.calendar-customview .control .select')[1]
      yearSelect.style.display = 'none';
    },
    dateSelected(date) {
      this.footerDate = moment(date).format("MMMM D, YYYY")
    },
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
    & .control {
      & .select {
        select {
          border: none;
          padding-right: 0;
          padding-left: 0;
          text-align-last: center;
          font-weight: bold;
        }

        &.select:not(.is-multiple):not(.is-loading)::after {
          display: none;
        }
      }
    }

    & header {
      background-color: initial;
    }

    & .datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today {
      border-radius: 50%;
    }

    & .datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected) {
      text-decoration: none;
      border-radius: 50%;
    }

    & .datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected {
      border-radius: 50%;
      background-color: #008e47;
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

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
</style>
