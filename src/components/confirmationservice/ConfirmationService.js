import ConfirmationEventBus from 'primevue2/confirmationeventbus'

const ConfirmationService = {
  install: (Vue) => {
    Vue.prototype.$confirm = {
      require: (options) => {
        ConfirmationEventBus.emit('confirm', options)
      },
      close: () => {
        ConfirmationEventBus.emit('close')
      }
    }
  }
}

export default ConfirmationService
