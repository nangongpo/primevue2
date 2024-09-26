<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Column Toggle</span></h1>
        <p>MultiSelect component can be used to implement column toggle functionality.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products" responsiveLayout="scroll">
          <template #header>
            <div style="text-align: left">
              <MultiSelect
                :value="selectedColumns"
                :options="columns"
                optionLabel="header"
                @input="onToggle"
                placeholder="Select Columns"
                style="width: 20em" />
            </div>
          </template>
          <Column field="code" header="Code" />
          <Column
            v-for="(col, index) of selectedColumns"
            :field="col.field"
            :header="col.header"
            :key="col.field + '_' + index"></Column>
        </DataTable>
      </div>
    </div>

    <DataTableColToggleDoc />
  </div>
</template>

<script>
import DataTableColToggleDoc from '@/doc/datatable/ColToggle.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableColToggleDoc },
  data() {
    return {
      selectedColumns: null,
      columns: null,
      products: null
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()

    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ]
    this.selectedColumns = this.columns
  },
  mounted() {
    this.productService.getProductsSmall().then(data => this.products = data)
  },
  methods: {
    onToggle(value) {
      this.selectedColumns = this.columns.filter(col => value.includes(col))
    }
  }
}
</script>
