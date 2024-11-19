<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/splitbutton"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
    <DocSectionCode :code="sourceCode3" importStyle />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Basic</h3>
<SplitButton label="Primary" :model="items" class="mb-2"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-secondary mb-2"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-success mb-2"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-info mb-2"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-warning mb-2"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-help mb-2"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-danger mb-2"></SplitButton>

<h5>Raised Buttons</h5>
<SplitButton label="Primary" :model="items" class="p-button-raised mb-2"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></SplitButton>

<h5>Rounded Buttons</h5>
<SplitButton label="Primary" :model="items" class="p-button-rounded mb-2"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></SplitButton>

<h5>Text Buttons</h5>
<SplitButton label="Primary" :model="items" class="p-button-text mb-2"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-text p-button-success mb-2"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-text p-button-info mb-2"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-text p-button-help mb-2"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></SplitButton>

<h5>Raised Text Buttons</h5>
<SplitButton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></SplitButton>

<h5>Outlined Buttons</h5>
<SplitButton label="Primary" :model="items" class="p-button-outlined mb-2"></SplitButton>
<SplitButton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></SplitButton>
<SplitButton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></SplitButton>
<SplitButton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></SplitButton>
<SplitButton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></SplitButton>
<SplitButton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></SplitButton>
<SplitButton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></SplitButton>

<h5>Sizes</h5>
<SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton>
<SplitButton label="Normal" :model="items" class="mb-2"></SplitButton>
<SplitButton label="Large" :model="items" class="p-button-lg mb-2"></SplitButton>
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
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
					command: () => {
						window.location.hash = "/fileupload"
					}
				}
			]
		}
	},
	methods: {
		save() {
			this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
		}
	}
}
        `
      },
      sourceCode3: {
        basic: `
.p-splitbutton {
	margin-right: .5rem;
}
        `
      },
    }
  }
}
</script>
