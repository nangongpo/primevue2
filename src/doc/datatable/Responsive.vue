<template>
  <div class="content-section documentation">
    <TabView>
      <TabPanel header="Source">
        <DocSectionCode :code="baseCode" />
        <DocSectionCode :code="baseCode2" importCode />
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
<div class="card">
    <DataTable :value="products" responsiveLayout="scroll">
        <template #header>
            Scroll
        </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="inventoryStatus" header="Status">
            <template #body="slotProps">
                <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
            </template>
        </Column>
        <Column field="rating" header="Rating">
            <template #body="slotProps">
                <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <DataTable :value="products" responsiveLayout="stack" breakpoint="960px">
        <template #header>
            Stack
        </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="inventoryStatus" header="Status">
            <template #body="slotProps">
                <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
            </template>
        </Column>
        <Column field="rating" header="Rating">
            <template #body="slotProps">
                <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
            </template>
        </Column>
    </DataTable>
</div>
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
    }
}
        `
      },
    }
  }
}
</script>

<style>
</style>
