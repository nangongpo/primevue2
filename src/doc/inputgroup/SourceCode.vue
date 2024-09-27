<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/inputgroup"
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
<h3>Addons</h3>
<div class="grid p-fluid">
    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
        </span>
            <InputText placeholder="Username" />
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">$</span>
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">W</span>
            <InputText placeholder="Website" />
        </div>
    </div>
</div>

<h3>Multiple Addons</h3>
<div class="grid">
    <div class="col-12">
        <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <i class="pi pi-clock"></i>
        </span>
            <span class="p-inputgroup-addon">
            <i class="pi pi-star-fill"></i>
        </span>
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>
</div>

<h3>Button Addons</h3>
<div class="grid p-fluid">
    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
            <Button label="Search"/>
            <InputText placeholder="Keyword"/>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
            <InputText placeholder="Keyword"/>
            <Button icon="pi pi-search" class="p-button-warning"/>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
            <Button icon="pi pi-check" class="p-button-success"/>
            <InputText placeholder="Vote"/>
            <Button icon="pi pi-times" class="p-button-danger"/>
        </div>
    </div>
</div>

<h3>Checkbox and RadioButton</h3>
<div class="grid p-fluid">
    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <Checkbox v-model="checked1" :binary="true" />
        </span>
            <InputText placeholder="Username"/>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
            <InputText placeholder="Price"/>
            <span class="p-inputgroup-addon">
            <RadioButton name="rb1" value="rb1" v-model="radioValue1" />
        </span>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <Checkbox v-model="checked2" :binary="true" />
        </span>
            <InputText placeholder="Website"/>
            <span class="p-inputgroup-addon">
            <RadioButton name="rb2" value="rb2" v-model="radioValue2" />
        </span>
        </div>
    </div>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			checked1: false,
			checked2: false,
			radioValue1: '',
			radioValue2: ''
		}
	}
}
        `
      },
    }
  }
}
</script>
