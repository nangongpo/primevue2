<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/tabmenu"
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
<div class="card">
    <h5>Default</h5>
    <TabMenu :model="items" />
    <router-view/>
</div>

<div class="card">
    <h5>Programmatic</h5>
    <div class="py-2">
        <Button @click="active = 0" class="p-button-text" label="Activate 1st" />
        <Button @click="active = 1" class="p-button-text mr-2" label="Activate 2nd" />
        <Button @click="active = 2" class="p-button-text mr-2" label="Activate 3rd" />
    </div>

    <TabMenu :model="items2" :activeIndex.sync="active" />
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            active: 3,
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}
            ],
            items2: [
                {label: 'Home', icon: 'pi pi-fw pi-home'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog'}
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
