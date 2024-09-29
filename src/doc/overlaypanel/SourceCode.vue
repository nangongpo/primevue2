<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/overlaypanel"
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
<Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" />

<OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">
    <DataTable :value="products" :selection.sync="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
        <Column field="name" header="Name" sortable></Column>
        <Column header="Image">
            <template #body="slotProps">
                <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
            </template>
        </Column>
        <Column field="price" header="Price" sortable>
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.price)}}
            </template>
        </Column>
    </DataTable>
</OverlayPanel>
        `
      },
      sourceCode2: {
        basic: `
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
        }
    }
}
        `
      },
    }
  }
}
</script>
