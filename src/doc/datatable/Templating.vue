<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="baseCode" />
        <DocSectionCode :code="baseCode2" importCode />
        <DocSectionCode :code="baseCode3" importStyle />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseCode: {
        basic: `
<DataTable :value="products" responsiveLayout="scroll">
    <template #header>
        <div class="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    </template>
    <Column field="name" header="Name"></Column>
    <Column header="Image">
            <template #body="slotProps">
            <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{formatCurrency(slotProps.data.price)}}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
        </template>
    </Column>
    <template #footer>
        In total there are {{products ? products.length : 0 }} products.
    </template>
</DataTable>
        `
      },
      baseCode2: {
        basic: `
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            products: null
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
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
        `
      },
      baseCode3: {
        basic: `
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
        `
      },
    }
  }
}
</script>

<style>
</style>
