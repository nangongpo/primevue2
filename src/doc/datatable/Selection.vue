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
    <h5>Single</h5>
    <DataTable :value="products" :selection.sync="selectedProduct1" selectionMode="single" responsiveLayout="scroll" dataKey="id">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</div>

<div class="card">
    <h5>Multiple</h5>
    <DataTable :value="products" :selection.sync="selectedProducts1" selectionMode="multiple" responsiveLayout="scroll" dataKey="id">
        <template #header>
            Multiple Selection with MetaKey
        </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>

    <DataTable :value="products" :selection.sync="selectedProducts2" selectionMode="multiple" responsiveLayout="scroll" dataKey="id" :metaKeySelection="false" style="margin-top: 2em">
        <template #header>
            Multiple Selection without MetaKey
        </template>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</div>

<div class="card">
    <h5>Events</h5>
    <DataTable :value="products" :selection.sync="selectedProduct2" selectionMode="single" responsiveLayout="scroll" dataKey="id"
        @row-select="onRowSelect" @row-unselect="onRowUnselect">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</div>

<div class="card">
    <h5>RadioButton</h5>
    <DataTable :value="products" :selection.sync="selectedProduct3" responsiveLayout="scroll" dataKey="id">
        <Column selectionMode="single" :headerStyle="{'width': '3em'}"></Column>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</div>

<div class="card">
    <h5>Checkbox</h5>
    <DataTable :value="products" :selection.sync="selectedProducts3" responsiveLayout="scroll" dataKey="id">
        <Column selectionMode="multiple" :headerStyle="{'width': '3em'}"></Column>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
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
            products: null,
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null
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
        onRowSelect(event) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
        },
        onRowUnselect(event) {
            this.$toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
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
