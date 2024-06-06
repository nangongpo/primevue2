<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Dialog</h1>
        <p>Dialog is a container to display content in an overlay window.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Basic</h5>
        <Button label="Show" icon="pi pi-external-link" @click="openBasic" />
        <Dialog header="Header" :visible.sync="displayBasic" :containerStyle="{ width: '50vw' }">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <template #footer>
            <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
          </template>
        </Dialog>

        <Button label="Long Content" icon="pi pi-external-link" @click="openBasic2" />
        <Dialog header="Header" :visible.sync="displayBasic2" :containerStyle="{ width: '50vw' }">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?
          </p>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <template #footer>
            <Button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus />
          </template>
        </Dialog>

        <h5>Modal</h5>
        <Button label="Show" icon="pi pi-external-link" @click="openModal" />
        <Dialog header="Header" :visible.sync="displayModal" :containerStyle="{ width: '50vw' }" :modal="true">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <template #footer>
            <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
          </template>
        </Dialog>

        <h5>Confirmation</h5>
        <Button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" />
        <Dialog
          header="Confirmation"
          :visible.sync="displayConfirmation"
          :containerStyle="{ width: '350px' }"
          :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>Are you sure you want to proceed?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />
          </template>
        </Dialog>

        <h5>Maximizable</h5>
        <Button label="Show" icon="pi pi-external-link" @click="openMaximizable" />
        <Dialog
          header="Header"
          :visible.sync="displayMaximizable"
          :containerStyle="{ width: '50vw' }"
          :maximizable="true"
          :modal="true">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <template #footer>
            <Button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus />
          </template>
        </Dialog>

        <h5>Position</h5>
        <div class="grid flex-column">
          <div class="col">
            <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
            <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
          </div>
          <div class="col">
            <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
            <Button
              label="TopLeft"
              icon="pi pi-arrow-down-right"
              @click="openPosition('topleft')"
              class="p-button-warning" />
            <Button
              label="TopRight"
              icon="pi pi-arrow-down-left"
              @click="openPosition('topright')"
              class="p-button-warning" />
          </div>
          <div class="col">
            <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
            <Button
              label="BottomLeft"
              icon="pi pi-arrow-up-right"
              @click="openPosition('bottomleft')"
              class="p-button-warning" />
            <Button
              label="BottomRight"
              icon="pi pi-arrow-up-left"
              @click="openPosition('bottomright')"
              class="p-button-warning" />
          </div>
        </div>

        <Dialog
          header="Header"
          :visible.sync="displayPosition"
          :style="{ width: '50vw' }"
          :position="position"
          :modal="true">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <template #footer>
            <Button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="closePosition" autofocus />
          </template>
        </Dialog>

        <h5>DataView</h5>
         <Button label="DataView" icon="pi pi-external-link" @click="openDataView" />

        <Dialog
          header="DataView"
          :visible.sync="displayDataView"
          class="p-dialog-maximized"
          :modal="true">
          <DataView
            :value="products"
            :layout="layout"
            :paginator="true"
            :rows="9"
            :sortOrder="sortOrder"
            :sortField="sortField">
            <template #header>
              <div class="grid grid-nogutter">
                <div class="col-6" style="text-align: left">
                  <Dropdown
                    v-model="sortKey"
                    :options="sortOptions"
                    optionLabel="label"
                    placeholder="Sort By Price"
                    @change="onSortChange($event)" />
                </div>
                <div class="col-6" style="text-align: right">
                  <DataViewLayoutOptions v-model="layout" />
                </div>
              </div>
            </template>

            <template #list="slotProps">
              <div class="col-12">
                <div class="product-list-item">
                  <img :src="$publicUrl('demo/images/product/' + slotProps.data.image)" :alt="slotProps.data.name" />
                  <div class="product-list-detail">
                    <div class="product-name">{{ slotProps.data.name }}</div>
                    <div class="product-description">{{ slotProps.data.description }}</div>
                    <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
                    <i class="pi pi-tag product-category-icon"></i
                    ><span class="product-category">{{ slotProps.data.category }}</span>
                  </div>
                  <div class="product-list-action">
                    <span class="product-price">${{ slotProps.data.price }}</span>
                    <Button
                      icon="pi pi-shopping-cart"
                      label="Add to Cart"
                      :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{
                      slotProps.data.inventoryStatus
                    }}</span>
                  </div>
                </div>
              </div>
            </template>

            <template #grid="slotProps">
              <div class="col-12 md:col-4">
                <div class="product-grid-item card">
                  <div class="product-grid-item-top">
                    <div>
                      <i class="pi pi-tag product-category-icon"></i>
                      <span class="product-category">{{ slotProps.data.category }}</span>
                    </div>
                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{
                      slotProps.data.inventoryStatus
                    }}</span>
                  </div>
                  <div class="product-grid-item-content">
                    <img :src="$publicUrl('demo/images/product/' + slotProps.data.image)" :alt="slotProps.data.name" />
                    <div class="product-name">{{ slotProps.data.name }}</div>
                    <div class="product-description">{{ slotProps.data.description }}</div>
                    <Rating :value="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
                  </div>
                  <div class="product-grid-item-bottom">
                    <span class="product-price">${{ slotProps.data.price }}</span>
                    <Button
                      icon="pi pi-shopping-cart"
                      :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                  </div>
                </div>
              </div>
            </template>
          </DataView>
        </Dialog>
      </div>
    </div>

    <DialogDoc />
  </div>
</template>

<script>
import ProductService from '../../service/ProductService'
import DialogDoc from './DialogDoc.vue'

const productService = new ProductService()

export default {
  data() {
    return {
      displayBasic: false,
      displayBasic2: false,
      displayModal: false,
      displayConfirmation: false,
      displayMaximizable: false,
      displayPosition: false,
      position: 'center',
      displayDataView: false,
      products: null,
      layout: 'grid',
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
      ]
    }
  },
  methods: {
    onSortChange(event) {
      const value = event.value.value
      const sortValue = event.value

      if (value.indexOf('!') === 0) {
        this.sortOrder = -1
        this.sortField = value.substring(1, value.length)
        this.sortKey = sortValue
      }
      else {
        this.sortOrder = 1
        this.sortField = value
        this.sortKey = sortValue
      }
    },
    openDataView() {
      productService.getProducts().then(data => this.products = data)
      this.displayDataView = true
    },
    openBasic() {
      this.displayBasic = true
    },
    closeBasic() {
      this.displayBasic = false
    },
    openBasic2() {
      this.displayBasic2 = true
    },
    closeBasic2() {
      this.displayBasic2 = false
    },
    openModal() {
      this.displayModal = true
    },
    closeModal() {
      this.displayModal = false
    },
    openConfirmation() {
      this.displayConfirmation = true
    },
    closeConfirmation() {
      this.displayConfirmation = false
    },
    openMaximizable() {
      this.displayMaximizable = true
    },
    closeMaximizable() {
      this.displayMaximizable = false
    },
    openPosition(position) {
      this.position = position
      this.displayPosition = true
    },
    closePosition() {
      this.displayPosition = false
    }
  },
  components: {
    'DialogDoc': DialogDoc
  }
}
</script>

<style scoped lang="scss">
.p-button {
  margin: 0 0.5rem 0 0;
  min-width: 10rem;
}

p {
  margin: 0;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-dialog .p-button {
  min-width: 6rem;
}
</style>
