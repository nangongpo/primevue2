<template>
  <div>
    <h5>Import</h5>
    <DocSectionCode :code="importCode" importCode />

    <h5>Getting Started</h5>
    <p>
      Breadcrumb requires a collection of menuitems as its model and a home
      item.
    </p>
    <DocSectionCode :code="baseCode" />
    <DocSectionCode :code="baseCode2" importCode />


  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      importCode: {
        basic: `
import Breadcrumb from 'primevue2/breadcrumb';
        `
      },
      baseCode: {
        basic: `
<Breadcrumb :home="home" :model="items" />
        `
      },
      baseCode2: {
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
    }
  }
}
</script>
