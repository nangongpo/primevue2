<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Export</span></h1>
        <p>DataTable can export its data to CSV format.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products" ref="dt" responsiveLayout="scroll">
          <template #header>
            <div style="text-align: left">
              <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
            </div>
          </template>
          <Column field="code" header="Code" exportHeader="Product Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableExportDoc />
  </div>
</template>

<script>
import DataTableExportDoc from '@/doc/datatable/Export.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableExportDoc },
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
  },
  methods: {
    exportCSV() {
      this.$refs.dt.exportCSV()
    }
  }
}
</script>
