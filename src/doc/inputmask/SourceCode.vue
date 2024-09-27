<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/inputmask"
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
<div class="p-fluid formgrid grid">
    <div class="field col-12 md:col-4">
        <label for="basic">Basic</label>
        <InputMask mask="99-999999" v-model="val1" placeholder="99-999999" />
    </div>

    <div class="field col-12 md:col-4">
        <label for="ssn">SSN</label>
        <InputMask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" />
    </div>

    <div class="field col-12 md:col-4">
        <label for="date">Date</label>
        <InputMask mask="99/99/9999" v-model="val3" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
    </div>

    <div class="field col-12 md:col-4">
        <label for="Phone">Phone</label>
        <InputMask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" />
    </div>

    <div class="field col-12 md:col-4">
        <label for="phoneext">Phone Ext</label>
        <InputMask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/>
    </div>

    <div class="field col-12 md:col-4">
        <label for="serial">Serial</label>
        <InputMask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" />
    </div>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
            val6: null
        }
    }
}
        `
      },
    }
  }
}
</script>
