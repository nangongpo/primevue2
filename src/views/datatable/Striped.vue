<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Striped Rows</span></h1>
        <p>Adding <i>stripedRows</i> displays striped rows.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products" stripedRows responsiveLayout="scroll">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableStripedDoc />
  </div>
</template>

<script>
import DataTableStripedDoc from '@/doc/datatable/Striped.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableStripedDoc },
  data() {
    return {
      products: null
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.productService.getProductsSmall().then(data => this.products = data)
  }
}
</script>
