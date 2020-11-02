<template>
  <div id="app">
    <CalendarView />
  </div>
</template>

<script>
import CalendarView from './components/CalendarView.vue'

export default {
  name: 'App',
  components: {
    CalendarView
  }
}
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
