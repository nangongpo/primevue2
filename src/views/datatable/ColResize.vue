<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Column Resize</span></h1>
        <p>
          Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes;
          "fit" and "expand". Fit is the default one and the overall table width does not change when a column is
          resized. In "expand" mode, table width also changes along with the column width.
        </p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Fit Mode</h5>
        <DataTable
          :value="products"
          :resizableColumns="true"
          columnResizeMode="fit"
          showGridlines
          responsiveLayout="scroll">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>

      <div class="card">
        <h5>Expand Mode</h5>
        <DataTable
          :value="products"
          :resizableColumns="true"
          columnResizeMode="expand"
          showGridlines
          responsiveLayout="scroll">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableColResizeDoc />
  </div>
</template>

<script>
import DataTableColResizeDoc from '@/doc/datatable/ColResize.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableColResizeDoc },
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
