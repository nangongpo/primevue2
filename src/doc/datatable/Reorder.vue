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
<DataTable :value="products" :reorderableColumns="true" @column-reorder="onColReorder" @row-reorder="onRowReorder" responsiveLayout="scroll">
    <Column :rowReorder="true" :headerStyle="{'width': '3rem'}" :reorderableColumn="false" />
    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
</DataTable>
        `
      },
      baseCode2: {
        basic: `
import ProductService from '../../service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        onColReorder() {
            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        },
        onRowReorder(event) {
            this.products = event.value;
            this.$toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
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
