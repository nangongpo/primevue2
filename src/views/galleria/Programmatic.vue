<template>
  <div class="galleria-demo">
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Galleria <span>Programmatic</span></h1>
        <p>Galleria can be controlled programmatically using the <b>activeIndex</b> property.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <div style="padding: 0.5rem 0">
          <Button icon="pi pi-minus" @click="prev" class="p-button-secondary" />
          <Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: 0.5rem" />
        </div>

        <Galleria
          :value="images"
          :activeIndex.sync="activeIndex"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
          </template>
        </Galleria>
      </div>
    </div>

    <GalleriaProgrammaticDoc />
  </div>
</template>

<script>
import PhotoService from '../../service/PhotoService'
import GalleriaProgrammaticDoc from '@/doc/galleria/Programmatic.vue'

export default {
  components: { GalleriaProgrammaticDoc },
  data() {
    return {
      images: null,
      activeIndex: 2,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    }
  },
  galleriaService: null,
  created() {
    this.galleriaService = new PhotoService()
  },
  mounted() {
    this.galleriaService.getImages().then(data => this.images = data)
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1
    },
    prev() {
      this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1
    }
  }
}
</script>
