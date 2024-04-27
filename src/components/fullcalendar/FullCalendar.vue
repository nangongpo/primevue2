<template>
    <div></div>
</template>

<script>
import '@fullcalendar/core/vdom.js'
export default {
  name: 'FullCalendar',
  props: {
    events: Array,
    options: null
  },
  calendar: null,
  watch: {
    events(value) {
      if (this.calendar) {
        this.calendar.removeAllEventSources()
        this.calendar.addEventSource(value)
      }
    },
    options(value) {
      if (value && this.calendar) {
        for (let prop in value) {
          this.calendar.setOption(prop, value[prop])
        }
      }
    }
  },
  mounted() {
    if (window.FullCalendarVDom) {
      import('@fullcalendar/core').then((module) => {
        if (module && module.Calendar) {
          this.initialize(module.Calendar)
        }
      })
    }
  },
  beforeDestroy() {
    if (this.calendar) {
      this.calendar.destroy()
      this.calendar = null
    }
  },
  methods: {
    initialize(Calendar) {
      let defaultConfig = {themeSystem: 'standard'}
      let config = this.options ? {...this.options, ...defaultConfig} : defaultConfig
      this.calendar = new Calendar(this.$el, config)
      this.calendar.render()

      if (this.events) {
        this.calendar.removeAllEventSources()
        this.calendar.addEventSource(this.events)
      }
    }
  }
}
</script>
