<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>VirtualScroller</h1>
        <p>VirtualScroller is a performant approach to render large amounts of data efficiently.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <h5>Basic</h5>
      <p> VirtualScroller requires <i>items</i> as the data to display, <i>itemSize</i> for the dimensions of an item
        and <i>item</i> template are required on component. In addition, an initial array is required based on the total
        number of items to display. Size of the viewport is configured using <i>scrollWidth</i>, <i>scrollHeight</i>
        properties directly or with CSS <i>width</i> and <i>height</i> styles. </p>
      <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round"
          style="width: 200px; height: 200px">
          <template v-slot:item="{ item, options }">
            <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item
              }}</div>
          </template>
        </VirtualScroller>
      </div>

      <h5>Horizontal</h5>
      <p>Setting <i>orientation</i> to <i>horizontal</i> enables scrolling horizontally. In this case, the
        <i>itemSize</i>
        should refer to the width of an item.
      </p>
      <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal"
          class="border-1 surface-border border-round" style="width: 200px; height: 200px"
          :pt="{ content: 'flex flex-row' }">
          <template v-slot:item="{ item, options }">
            <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]"
              style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
          </template>
        </VirtualScroller>
      </div>

      <h5>Grid</h5>
      <p>Scrolling can be enabled vertically and horizontally when <i>orientation</i> is set as <i>both</i>. In this
        mode,
        <i>itemSize</i> should be an array where first value is the height of an item and second is the width.
      </p>
      <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both"
          class="border-1 surface-border border-round" style="width: 200px; height: 200px">
          <template v-slot:item="{ item, options }">
            <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
              <template v-for="(el, index) of item">
                <div style="width: 100px" :key="index">{{ el }}</div>
              </template>
            </div>
          </template>
        </VirtualScroller>
      </div>

      <h5>Delay</h5>
      <p>The <i>delay</i> property adds a threshold to wait in milliseconds during scrolling for render optimization.
      </p>
      <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
          <span class="font-bold block mb-2">No Delay</span>
          <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round"
            style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
              <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{
                item }}</div>
            </template>
          </VirtualScroller>
        </div>
        <div>
          <span class="font-bold block mb-2">150ms</span>
          <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round"
            style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
              <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{
                item }}</div>
            </template>
          </VirtualScroller>
        </div>
        <div>
          <span class="font-bold block mb-2">500ms</span>
          <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round"
            style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
              <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{
                item }}</div>
            </template>
          </VirtualScroller>
        </div>
      </div>

      <h5>Loading</h5>
      <p> Busy state is enabled by adding <i>showLoader</i> property which blocks the UI with a modal by default.
        Alternatively, <i>loader</i> template can be used to customize items e.g. with <a href="/skeleton/"
          class="">Skeleton</a>. </p>
      <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
          <span class="font-bold block mb-2">Modal</span>
          <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250"
            class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
              <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{
                item }}</div>
            </template>
          </VirtualScroller>
        </div>
        <div>
          <span class="font-bold block mb-2">Skeleton</span>
          <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250"
            class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
              <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{
                item }}</div>
            </template>
            <template v-slot:loader="{ options }">
              <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
                <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
              </div>
            </template>
          </VirtualScroller>
        </div>
      </div>

      <h5>Lazy</h5>
      <p> Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is
        loaded
        on demand. To implement lazy loading, enable the <i>lazy</i>property and implement <i>onLazyLoad</i> callback to
        return data. </p>
      <div class="card flex justify-content-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy
          @lazy-load="onLazyLoad" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
          <template v-slot:item="{ item, options }">
            <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item
              }}</div>
          </template>
        </VirtualScroller>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: null,
      lazyItems: null,
      lazyLoading: false,
      loadLazyTimeout: null
    }
  },
  created() {
    this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`)
  },
  mounted() {
    this.lazyItems = Array.from({ length: 100000 })
  },
  methods: {
    onLazyLoad(event) {
      this.lazyLoading = true

      if (this.loadLazyTimeout) {
        clearTimeout(this.loadLazyTimeout)
      }

      //imitate delay of a backend call
      this.loadLazyTimeout = setTimeout(() => {
        const { first, last } = event
        const lazyItems = [...this.lazyItems]

        for (let i = first; i < last; i++) {
          lazyItems[i] = `Item #${i}`
        }

        this.lazyItems = lazyItems
        this.lazyLoading = false

      }, Math.random() * 1000 + 250)
    }
  }
}
</script>
