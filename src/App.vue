<template>
  <div id="app">
    <div class="calendarview">
      <CalendarView />
      <CustomCalendarView />
    </div>
  </div>
</template>

<script>
import CalendarView from './components/CalendarView.vue'
import CustomCalendarView from './components/CustomCalendarView.vue'

export default {
  name: 'App',
  components: {
    CalendarView,
    CustomCalendarView,
  }
}
</script>

<style lang="scss">
@import "./sass/main.scss";

.calendarview {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
}
</style>
