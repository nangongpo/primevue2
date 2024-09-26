<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/deferredcontent"
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
<div style="height: 800px">
    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
</div>

<DeferredContent @load="onImageLoad">
    <img src="demo/images/nature/nature4.jpg" alt="Nature"/>
</DeferredContent>

<div style="height: 500px">
</div>

<DeferredContent @load="onDataLoad">
    <DataTable :value="products">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>
        `
      },
      sourceCode2: {
        basic: `
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    methods: {
        onImageLoad() {
            this.$toast.add({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
        },
        onDataLoad() {
            this.productService.getProductsSmall().then(data => this.products = data);
            this.$toast.add({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
        }
    }
}
        `
      },
    }
  }
}
</script>
