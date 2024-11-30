<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/steps"
      class="btn-viewsource"
      target="_blank"
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
<Steps :model="items" :readonly="true"  style="margin-bottom: 1rem" />
<keep-alive>
    <router-view :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete" />
</keep-alive>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
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
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
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
