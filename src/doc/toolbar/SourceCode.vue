<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/toolbar"
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
<Toolbar>
    <template #start>
        <Button label="New" icon="pi pi-plus" class="mr-2" />
        <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
        <i class="pi pi-bars p-toolbar-separator mr-2" />
        <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
    </template>

    <template #end>
        <Button icon="pi pi-search" class="mr-2" />
        <Button icon="pi pi-calendar" class="p-button-success mr-2" />
        <Button icon="pi pi-times" class="p-button-danger" />
    </template>
</Toolbar>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/'
                    }
                },
                {   label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        window.location.hash = "/fileupload"
                    }
                }
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
