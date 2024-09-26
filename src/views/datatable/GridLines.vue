<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>GridLines</span></h1>
        <p>
          Enabling <b>showGridlines</b> displays borders between cells. Note: Some themes may always display gridlines
          by design.
        </p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products" showGridlines responsiveLayout="scroll">
          <template #header> Header </template>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
          <template #footer> Footer </template>
        </DataTable>
      </div>
    </div>

    <DataTableGridLinesDoc />
  </div>
</template>

<script>
import DataTableGridLinesDoc from '@/doc/datatable/GridLines.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableGridLinesDoc },
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
