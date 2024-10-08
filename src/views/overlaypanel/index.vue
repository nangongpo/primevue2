<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>OverlayPanel</h1>
        <p>OverlayPanel is a container component positioned as connected to its target.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <Button
          type="button"
          icon="pi pi-search"
          :label="selectedProduct ? selectedProduct.name : 'Select a Product'"
          @click="toggle"
          aria:haspopup="true"
          aria-controls="overlay_panel" />

        <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">
          <DataTable
            :value="products"
            :selection.sync="selectedProduct"
            selectionMode="single"
            :paginator="true"
            :rows="5"
            @row-select="onProductSelect">
            <Column field="name" header="Name" sortable></Column>
            <Column header="Image">
              <template #body="slotProps">
                <img
                  :src="$publicUrl('demo/images/product/' + slotProps.data.image)"
                  :alt="slotProps.data.image"
                  class="product-image" />
              </template>
            </Column>
            <Column field="price" header="Price" sortable>
              <template #body="slotProps">
                {{ formatCurrency(slotProps.data.price) }}
              </template>
            </Column>
          </DataTable>
        </OverlayPanel>
      </div>
    </div>

    <OverlayPanelDoc />
  </div>
</template>

<script>
import ProductService from '../../service/ProductService'
import OverlayPanelDoc from '@/doc/overlaypanel/index.vue'

export default {
  data() {
    return {
      products: null,
      selectedProduct: null
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
    toggle(event) {
      this.$refs.op.toggle(event)
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    onProductSelect(event) {
      this.$refs.op.hide()
      this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 })
    }
  },
  components: {
    'OverlayPanelDoc': OverlayPanelDoc
  }
}
</script>

<style lang="scss" scoped>
button {
  min-width: 15rem;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
