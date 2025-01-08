<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>InputGroup</h1>
        <p>Text, icon, buttons and other content can be grouped next to an input.</p>
      </div>
      <AppInputStyleSwitch />
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Addons</h5>
        <div class="grid p-fluid">
          <div class="col-12 md:col-4">
            <InputGroup>
              <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
              <InputText placeholder="Username" />
            </InputGroup>
          </div>

          <div class="col-12 md:col-4">
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <InputText placeholder="Price" />
              <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
          </div>

          <div class="col-12 md:col-4">
            <InputGroup>
              <InputGroupAddon>W</InputGroupAddon>
              <InputText placeholder="Website" />
            </InputGroup>
          </div>
        </div>

        <h5>Multiple Addons</h5>
        <div class="grid">
          <div class="col-12">
            <InputGroup>
              <InputGroupAddon><i class="pi pi-clock"></i></InputGroupAddon>
              <InputGroupAddon><i class="pi pi-star-fill"></i></InputGroupAddon>
              <InputText placeholder="Price" />
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <h5>Button Addons</h5>
        <div class="grid p-fluid">
          <div class="col-12 md:col-4">
            <InputGroup>
              <Button label="Search" />
              <InputText placeholder="Keyword" />
            </InputGroup>
          </div>

          <div class="col-12 md:col-4">
            <InputGroup>
              <InputText placeholder="Keyword" />
              <Button icon="pi pi-search" class="p-button-warning" />
            </InputGroup>
          </div>

          <div class="col-12 md:col-4">
            <InputGroup>
              <Button icon="pi pi-check" class="p-button-success" />
              <InputText placeholder="Vote" />
              <Button icon="pi pi-times" class="p-button-danger" />
            </InputGroup>
          </div>
        </div>

        <h5>Checkbox and RadioButton</h5>
        <div class="grid p-fluid">
          <div class="col-12 md:col-12">
            <InputGroup>
              <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" />
              </InputGroupAddon>
              <InputText placeholder="Username" />
            </InputGroup>
          </div>

          <div class="col-12 md:col-12">
            <div class="p-inputgroup">
              <InputText placeholder="Price" />
              <InputGroupAddon>
                <RadioButton name="rb1" value="rb1" v-model="radioValue1" />
              </InputGroupAddon>
            </div>
          </div>

          <div class="col-12 md:col-12">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <Checkbox v-model="checked2" :binary="true" />
              </span>
              <InputText placeholder="Website" />
              <span class="p-inputgroup-addon">
                <RadioButton name="rb2" value="rb2" v-model="radioValue2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <InputGroupDoc />
  </div>
</template>

<script>
import InputGroupDoc from '@/doc/inputgroup/index.vue'

export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      radioValue1: '',
      radioValue2: ''
    }
  },
  components: {
    'InputGroupDoc': InputGroupDoc
  }
}
</script>
