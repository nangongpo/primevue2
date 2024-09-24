<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/chip"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h5>Basic</h5>
<div class="flex align-items-center">
	<Chip label="Action" class="mr-2" />
	<Chip label="Comedy" class="mr-2" />
	<Chip label="Mystery" class="mr-2" />
	<Chip label="Thriller" removable />
</div>

<h5>Icon</h5>
<div class="flex align-items-center">
	<Chip label="Apple" icon="pi pi-apple" class="mr-2" />
	<Chip label="Facebook" icon="pi pi-facebook" class="mr-2" />
	<Chip label="Google" icon="pi pi-google" class="mr-2" />
	<Chip label="Microsoft" icon="pi pi-microsoft" removable />
</div>

<h5>Image</h5>
<div class="flex align-items-center">
	<Chip label="Amy Elsner" image="demo/images/avatar/amyelsner.png" class="mr-2" />
	<Chip label="Asiya Javayant" image="demo/images/avatar/asiyajavayant.png" class="mr-2" />
	<Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2" />
	<Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" removable />
</div>

<h5>Styling</h5>
<div class="flex align-items-center">
	<Chip label="Action" class="mr-2 custom-chip" />
	<Chip label="Apple" icon="pi pi-apple" class="mr-2 custom-chip" />
	<Chip label="Onyama Limba" image="demo/images/avatar/onyamalimba.png" class="mr-2 custom-chip" />
	<Chip label="Xuxue Feng" image="demo/images/avatar/xuxuefeng.png" class="custom-chip" removable />
</div>
        `
      },
    }
  }
}
</script>
