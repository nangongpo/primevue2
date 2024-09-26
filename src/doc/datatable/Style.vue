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
<DataTable :value="products" :rowClass="rowClass" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity">
        <template #body="slotProps">
            <div :class="stockClass(slotProps.data)">
                {{slotProps.data.quantity}}
            </div>
        </template>
    </Column>
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
        rowClass(data) {
            return data.category === 'Accessories' ? 'row-accessories': null;
        },
        stockClass(data) {
            return [
                {
                    'outofstock': data.quantity === 0,
                    'lowstock': data.quantity > 0 &amp;&amp; data.quantity &lt; 10,
                    'instock': data.quantity > 10
                }
            ];
        }
    }
}
        `
      },
      baseCode3: {
        basic: `
.outofstock {
    font-weight: 700;
    color: #FF5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #FFA726;
}

.instock {
    font-weight: 700;
    color: #66BB6A;
}

:deep(.row-accessories) {
    background-color: rgba(0,0,0,.15) !important;

}
        `
      },
    }
  }
}
</script>

<style>
</style>
