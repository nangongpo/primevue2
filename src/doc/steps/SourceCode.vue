<template>
  <div>
    <a href="https://github.com/nangongpo/primevue2/tree/main/src/views/steps" class="btn-viewsource" target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<Steps :activeStep.sync="active" :model="items" :readonly="true" />
<keep-alive>
    <router-view :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)"
      @complete="complete" />
</keep-alive>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            active: 0,
            items: [{
                label: 'Personal',
                to: '/steps'
            },
            {
                label: 'Seat',
                to: '/steps/seat'
            },
            {
                label: 'Payment',
                to: '/steps/payment'
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation'
            }],
            formObject: {}
        }
    },
    components: {
        'StepsDoc': StepsDoc
    },
    methods: {
        nextPage(event) {
            this.formObject = { ...this.formObject, ...event.formData }
            this.active = event.pageIndex + 1
            this.$router.push(this.items[this.active].to)
        },
        prevPage(event) {
            this.active--
            this.$router.push(this.items[this.active].to)
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    }
}
        `
      },
    }
  }
}
</script>
