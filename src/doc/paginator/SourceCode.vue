<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/paginator"
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
<Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator>

<h3>Custom</h3>
<Paginator :first.sync="first" :rows="1" :totalRecords="totalRecords2"
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
    <template #start>
        <Button type="button" icon="pi pi-refresh" @click="reset()"/>
    </template>
    <template #end>
        <Button type="button" icon="pi pi-search" />
    </template>
</Paginator>

<div class="image-gallery">
    <img :src="'demo/images/nature/' + image + '.jpg'" />
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {
    data() {
        return {
			first: 0,
            totalRecords: 120,
            totalRecords2: 12
        }
    },
    methods: {
        reset() {
            this.first = 0;
        }
    },
    computed: {
        image() {
            return 'nature' + (this.first + 1);
        }
    }
}
        `
      },
      sourceCode3: {
        basic: `
.p-button.p-button-icon-only {
    border-radius: 0;
}

.image-gallery {
    text-align: center;
    padding: 1rem;
}
        `
      }
    }
  }
}
</script>
