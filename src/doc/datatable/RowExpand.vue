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
<DataTable :value="products" :expandedRows.sync="expandedRows" dataKey="id" responsiveLayout="scroll"
    @row-expand="onRowExpand" @row-collapse="onRowCollapse">
    <template #header>
        <div class="table-header-container">
            <Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
            <Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
    </template>
    <Column :expander="true" :headerStyle="{'width': '3rem'}" />
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
    <Column field="category" header="Category" sortable></Column>
    <Column field="rating" header="Reviews" sortable>
        <template #body="slotProps">
            <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false" />
        </template>
    </Column>
    <Column field="inventoryStatus" header="Status" sortable>
        <template #body="slotProps">
            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
        </template>
    </Column>
    <template #expansion="slotProps">
        <div class="orders-subtable">
            <h5>Orders for {{slotProps.data.name}}</h5>
            <DataTable :value="slotProps.data.orders">
                <Column field="id" header="Id" sortable></Column>
                <Column field="customer" header="Customer" sortable></Column>
                <Column field="date" header="Date" sortable></Column>
                <Column field="amount" header="Amount" sortable>
                    <template #body="slotProps" sortable>
                        {{formatCurrency(slotProps.data.amount)}}
                    </template>
                </Column>
                <Column field="status" header="Status" sortable>
                    <template #body="slotProps">
                        <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>
                    </template>
                </Column>
                <Column :headerStyle="{'width':'4rem'}">
                    <template #body>
                        <Button icon="pi pi-search" />
                    </template>
                </Column>
            </DataTable>
        </div>
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
            products: null,
            expandedRows: []
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
    },
    methods: {
        onRowExpand(event) {
            this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
        },
        onRowCollapse(event) {
            this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
        },
        expandAll() {
            this.expandedRows = this.products.filter(p => p.id);
            this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
        },
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
