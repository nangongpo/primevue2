<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Galleria <span>Indicator</span></h1>
        <p>Indicators allow quick navigation between the items.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Indicators with Click Event</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          :showThumbnails="false"
          :showIndicators="true">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
        </Galleria>
      </div>

      <div class="card">
        <h5>Indicators with Hover Event</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
        </Galleria>
      </div>

      <div class="card">
        <h5>Inside Content</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          :showIndicatorsOnItem="true">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
        </Galleria>
      </div>

      <div class="card">
        <h5>Positioned at Top</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          :showIndicatorsOnItem="true"
          indicatorsPosition="top">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
        </Galleria>
      </div>

      <div class="card">
        <h5>Positioned at Left</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          :showIndicatorsOnItem="true"
          indicatorsPosition="left">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
        </Galleria>
      </div>

      <div class="card">
        <h5>Positioned at Right</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          :showIndicatorsOnItem="true"
          indicatorsPosition="right">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
        </Galleria>
      </div>

      <div class="card">
        <h5>Indicator Template</h5>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          style="max-width: 640px"
          class="custom-indicator-galleria"
          :showThumbnails="false"
          :showIndicators="true"
          :changeItemOnIndicatorHover="true"
          :showIndicatorsOnItem="true"
          indicatorsPosition="left">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
          <template #indicator="{ index }">
            <span class="indicator-text">
              {{ index + 1 }}
            </span>
          </template>
        </Galleria>
      </div>
    </div>

    <GalleriaIndicatorDoc />
  </div>
</template>

<script>
import PhotoService from '../../service/PhotoService'
import GalleriaIndicatorDoc from '@/doc/galleria/Indicator.vue'

export default {
  components: { GalleriaIndicatorDoc },
  data() {
    return {
      images: null,
      images2: null,
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
    this.galleriaService.getImages().then(data => {
      this.images = data
      this.images2 = data.slice(0, 5)
    })
  }
}
</script>

<style lang="scss" scoped>
:deep(.custom-indicator-galleria) {
  .indicator-text {
    color: #e9ecef;
    cursor: pointer;
  }

  .p-highlight {
    .indicator-text {
      color: var(--primary-color);
    }
  }
}
</style>
