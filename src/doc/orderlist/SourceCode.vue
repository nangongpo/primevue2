<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/orderlist"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
    <DocSectionCode :code="sourceCode3" importStyle />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<OrderList v-model="products" listStyle="height:auto" dataKey="id">
    <template #header>
        List of Products
    </template>
    <template #item="slotProps">
        <div class="product-item">
            <div class="image-container">
                <img :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
            </div>
            <div class="product-list-detail">
                <h5 class="mb-2">{{slotProps.item.name}}</h5>
                <i class="pi pi-tag product-category-icon"></i>
                <span class="product-category">{{slotProps.item.category}}</span>
            </div>
            <div class="product-list-action">
                <h6 class="mb-2">\${{slotProps.item.price}}</h6>
                <span :class="'product-badge status-'+slotProps.item.inventoryStatus.toLowerCase()">{{slotProps.item.inventoryStatus}}</span>
            </div>
        </div>
    </template>
</OrderList>
        `
      },
      sourceCode2: {
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
      sourceCode3: {
        basic: `
.product-item {
	display: flex;
	align-items: center;
	padding: .5rem;
	width: 100%;

	img {
		width: 75px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 1rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.product-list-action {
		display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .product-category-icon {
        vertical-align: middle;
        margin-right: .5rem;
    }

    .product-category {
        vertical-align: middle;
        line-height: 1;
    }
}

@media screen and (max-width: 576px) {
    .product-item {
        flex-wrap: wrap;

        .image-container {
            width: 100%;
            text-align: center;
        }

        img {
            margin: 0 0 1rem 0;
            width: 100px;
        }
    }
}
        `
      },
    }
  }
}
</script>
