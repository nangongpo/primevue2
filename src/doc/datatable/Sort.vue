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
    <h5>Single Column</h5>
    <DataTable :value="products" responsiveLayout="scroll">
        <Column field="code" header="Code" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="category" header="Category" sortable></Column>
        <Column field="quantity" header="Quantity" sortable></Column>
        <Column field="price" header="Price" sortable>
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.price)}}
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <h5>Multiple Columns</h5>
    <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">
        <Column field="code" header="Code" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="category" header="Category" sortable></Column>
        <Column field="quantity" header="Quantity" sortable></Column>
        <Column field="price" header="Price" sortable>
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.price)}}
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <h5>Presort</h5>
    <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">
        <Column field="code" header="Code" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="category" header="Category" sortable></Column>
        <Column field="quantity" header="Quantity" sortable></Column>
        <Column field="price" header="Price" sortable>
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.price)}}
            </template>
        </Column>
    </DataTable>
</div>

<div class="card">
    <h5>Removable Sort</h5>
    <DataTable :value="products" removableSort responsiveLayout="scroll">
        <Column field="code" header="Code" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="category" header="Category" sortable></Column>
        <Column field="quantity" header="Quantity" sortable></Column>
        <Column field="price" header="Price" sortable>
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.price)}}
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
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
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
