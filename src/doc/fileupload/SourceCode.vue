<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/fileupload"
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
<h3>Advanced</h3>
<FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000">
    <template #empty>
        <p>Drag and drop files to here to upload.</p>
    </template>
</FileUpload>

<h3>Basic</h3>
<FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />

<h3>Basic with Auto</h3>
<FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
        `
      },
      sourceCode2: {
        basic: `
export default {
	methods: {
		onUpload() {
			this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
		}
	}
}
        `
      },
    }
  }
}
</script>
