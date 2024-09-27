<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>A model can be bound using the standard v-model directive.</p>
    <DocSectionCode :code="baseCode" />

    <h5>Float Label</h5>
    <p>
      A floating label is implemented by wrapping the input and the label inside a container having
      <i>.p-float-label</i> style class.
    </p>
    <DocSectionCode :code="floatLabelCode" />

    <h5>Icons</h5>
    <p>
      An icon can be integrated within an input field by wrapping the input and the icon with an element having
      <i>p-input-icon-right</i> and <i>p-input-icon-left</i> classes depending on the icon location.
    </p>
    <DocSectionCode :code="iconsCode" />

    <h5>Sizes</h5>
    <p>
      2 more sizes are available in addition to a regular input, for a smaller input add <i>p-inputtext-sm</i> and for a
      larger one, use <i>p-inputtext-lg</i>. Note that these classes are mainly be used to change the size of a
      particular field, for global scaling see the <router-link to="/theming">theming</router-link> page.
    </p>
    <DocSectionCode :code="sizesCode" />

    <p>
      Instead of repeating the scale classes for each input, sizing can also be applied to a group by adding the class
      to a container element so that descendant inputs share the same style easier.
    </p>
    <DocSectionCode :code="sizesCode2" />

    <h5>Outlined vs Filled</h5>
    <p>
      Input fields come in two styles, default is <i>outlined</i> with borders around the field whereas
      <i>filled</i> alternative adds a background color to the field. Applying <i>p-input-filled</i> to an ancestor of
      an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global
      container such as document body or the application element to apply the style class.
    </p>
    <DocSectionCode :code="outlinedVsFilledCode" />

    <h5>Properties</h5>
    <p>InputText passes any valid attribute to the underlying input element.</p>

    <h5>Events</h5>
    <p>Any valid event such as focus, blur and input are passed to the underlying input element.</p>

    <h5>Styling</h5>
    <p>
      Following is the list of structural style classes, for theming classes visit
      <router-link to="/theming">theming</router-link> page.
    </p>
    <div class="doc-tablewrapper">
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>p-inputtext</td>
            <td>Input element</td>
          </tr>
          <tr>
            <td>p-inputtext-sm</td>
            <td>Smaller input element</td>
          </tr>
          <tr>
            <td>p-inputtext-lg</td>
            <td>Larger input element</td>
          </tr>
          <tr>
            <td>p-inputtext-filled</td>
            <td>Filled input style.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h5>Dependencies</h5>
    <p>None.</p>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      importCode: {
        basic: `
import InputText from 'primevue2/inputtext';
        `
      },
      baseCode: {
        basic: `
<InputText type="text" v-model="value" />
        `
      },
      floatLabelCode: {
        basic: `
export default {
    data() {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
        `
      },
      iconsCode: {
        basic: `
<span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText type="text" v-model="value1" placeholder="Search" />
</span>

<span class="p-input-icon-right">
    <InputText type="text" v-model="value2" />
    <i class="pi pi-spin pi-spinner" />
</span>

<span class="p-input-icon-left p-input-icon-right">
    <i class="pi pi-search" />
    <InputText type="text" v-model="value3" />
    <i class="pi pi-spin pi-spinner" />
</span>
        `
      },
      sizesCode: {
        basic: `
<InputText type="text" class="p-inputtext-sm" placeholder="Small" />
<InputText type="text" placeholder="Normal" />
<InputText type="text" class="p-inputtext-lg"  placeholder="Large" />
        `
      },
      sizesCode2: {
        basic: `
<div class="p-inputtext-sm">
    <InputText />
    <InputNumber />
    <InputMask />
</div>
        `
      },
      outlinedVsFilledCode: {
        basic: `
<div class="p-input-filled">
    <InputText type="text" />
    <InputText type="text" />
    <InputText type="text" />
</div>
        `
      },
    }
  }
}
</script>
