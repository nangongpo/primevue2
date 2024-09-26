<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>ContextMenu</span></h1>
        <p>CDataTable has exclusive integration with ContextMenu.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable
          :value="products"
          contextMenu
          :contextMenuSelection.sync="selectedProduct"
          @row-contextmenu="onRowContextMenu"
          responsiveLayout="scroll">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="price" header="Price">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
        </DataTable>
      </div>

      <ContextMenu :model="menuModel" ref="cm" />
    </div>

    <DataTableContextMenuDoc />
  </div>
</template>

<script>
import DataTableContextMenuDoc from '@/doc/datatable/ContextMenu.vue'
import ProductService from '../../service/ProductService'

export default {
  components: { DataTableContextMenuDoc },
  data() {
    return {
      products: null,
      selectedProduct: null,
      menuModel: [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct) }
      ]
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
    onRowContextMenu(event) {
      this.$refs.cm.show(event.originalEvent)
    },
    viewProduct(product) {
      this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: product.name })
    },
    deleteProduct(product) {
      this.products = this.products.filter((p) => p.id !== product.id)
      this.$toast.add({ severity: 'info', summary: 'Product Deleted', detail: product.name })
      this.selectedProduct = null
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
  }
}
</script>
