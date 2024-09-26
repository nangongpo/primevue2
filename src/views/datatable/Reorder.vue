<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Reorder</span></h1>
        <p>Order of the columns and rows can be changed using drag and drop.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable
          :value="products"
          :reorderableColumns="true"
          @column-reorder="onColReorder"
          @row-reorder="onRowReorder"
          responsiveLayout="scroll">
          <Column :rowReorder="true" :headerStyle="{ width: '3rem' }" :reorderableColumn="false" />
          <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableReorderDoc />
  </div>
</template>

<script>
import DataTableReorderDoc from '@/doc/datatable/Reorder.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableReorderDoc },
  data() {
    return {
      columns: null,
      products: null
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()

    this.columns = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ]
  },
  mounted() {
    this.productService.getProductsSmall().then(data => this.products = data)
  },
  methods: {
    onColReorder() {
      this.$toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 })
    },
    onRowReorder(event) {
      this.products = event.value
      this.$toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000 })
    }
  }
}
</script>
