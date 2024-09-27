<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/inplace"
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
<h3>Input</h3>
<Inplace :closable="true">
    <template #display>
        {{text || 'Click to Edit'}}
    </template>
    <template #content>
        <InputText v-model="text" autoFocus />
    </template>
</Inplace>

<h3>Image</h3>
<Inplace>
    <template #display>
        <span className="pi pi-search" style="vertical-align: middle"></span>
        <span style="margin-left:.5rem; vertical-align: middle">View Picture</span>
    </template>
    <template #content>
        <img src="demo/images/nature/nature1.jpg" />
    </template>
</Inplace>

<h3>Lazy Data</h3>
<Inplace @open="loadData">
    <template #display>
        View Data
    </template>
    <template #content>
        <DataTable :value="products">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </template>
</Inplace>
        `
      },
      sourceCode2: {
        basic: `
import ProductService from '../../service/ProductService';

export default {
     data() {
        return {
            text: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    methods: {
        loadData() {
             this.productService.getProductsSmall().then(data => this.products = data);
        }
    }
}
        `
      },
    }
  }
}
</script>
