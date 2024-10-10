<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/password"
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
<Password v-model="value1" :feedback="false" />

<h5>Password Meter</h5>
<Password v-model="value2" />

<h5>Show Password</h5>
<Password v-model="value3" toggleMask></Password>

<h5>Templating</h5>
<Password v-model="value4">
    <template #header>
        <h6>Pick a password</h6>
    </template>
    <template #footer>
        <Divider />
        <p class="mt-2">Suggestions</p>
        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </template>
</Password>
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
		    value1: null,
            value2: null,
            value3: null,
            value4: null
		}
	}
}
        `
      },
    }
  }
}
</script>
