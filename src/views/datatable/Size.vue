<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Size</span></h1>
        <p>In addition to a regular table, alternatives with alternative sizes are available.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">
          <template #header> Small Table </template>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>

      <div class="card">
        <DataTable :value="products" responsiveLayout="scroll">
          <template #header> Normal Table </template>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>

      <div class="card">
        <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">
          <template #header> Large Table </template>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableSizeDoc />
  </div>
</template>

<script>
import DataTableSizeDoc from '@/doc/datatable/Size.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableSizeDoc },
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
