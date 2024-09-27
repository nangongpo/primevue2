<template>
  <div class="galleria-demo">
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Galleria <span>Advanced</span></h1>
        <p>Galleria can be extended further to implement complex requirements.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <Galleria
          ref="galleria"
          :value="images"
          :activeIndex.sync="activeIndex"
          :numVisible="5"
          style="max-width: 640px"
          :class="galleriaClass"
          :showThumbnails="showThumbnails"
          :showItemNavigators="true"
          :showItemNavigatorsOnHover="true"
          :circular="true"
          :autoPlay="true"
          :transitionInterval="3000">
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
          </template>
          <template #thumbnail="slotProps">
            <div class="grid grid-nogutter justify-content-center">
              <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </div>
          </template>
          <template #footer>
            <div class="custom-galleria-footer">
              <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
              <span v-if="images" class="title-container">
                <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="title">{{ images[activeIndex].title }}</span>
                <span>{{ images[activeIndex].alt }}</span>
              </span>
              <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
            </div>
          </template>
        </Galleria>
      </div>
    </div>

    <GalleriaAdvancedDoc />
  </div>
</template>


<script>
import PhotoService from '../../service/PhotoService'
import GalleriaAdvancedDoc from '@/doc/galleria/Advanced.vue'

export default {
  components: { GalleriaAdvancedDoc },
  data() {
    return {
      images: null,
      activeIndex: 0,
      showThumbnails: false,
      fullScreen: false
    }
  },
  galleriaService: null,
  created() {
    this.galleriaService = new PhotoService()
  },
  mounted() {
    this.galleriaService.getImages().then(data => this.images = data)
    this.bindDocumentListeners()
  },
  methods: {
    onThumbnailButtonClick() {
      this.showThumbnails = !this.showThumbnails
    },
    toggleFullScreen() {
      if (this.fullScreen) {
        this.closeFullScreen()
      }
      else {
        this.openFullScreen()
      }
    },
    onFullScreenChange() {
      this.fullScreen = !this.fullScreen
    },
    openFullScreen() {
      let elem = this.$refs.galleria.$el
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      }
      else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen()
      }
      else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen()
      }
      else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen()
      }
    },
    closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      }
      else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    bindDocumentListeners() {
      document.addEventListener('fullscreenchange', this.onFullScreenChange)
      document.addEventListener('mozfullscreenchange', this.onFullScreenChange)
      document.addEventListener('webkitfullscreenchange', this.onFullScreenChange)
      document.addEventListener('msfullscreenchange', this.onFullScreenChange)
    },
    unbindDocumentListeners() {
      document.removeEventListener('fullscreenchange', this.onFullScreenChange)
      document.removeEventListener('mozfullscreenchange', this.onFullScreenChange)
      document.removeEventListener('webkitfullscreenchange', this.onFullScreenChange)
      document.removeEventListener('msfullscreenchange', this.onFullScreenChange)
    }
  },
  computed: {
    galleriaClass() {
      return ['custom-galleria', { 'fullscreen': this.fullScreen }]
    },
    fullScreenIcon() {
      return `pi ${this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}`
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.custom-galleria) {
  &.fullscreen {
    display: flex;
    flex-direction: column;

    .p-galleria-content {
      flex-grow: 1;
      justify-content: center;
    }
  }

  .p-galleria-content {
    position: relative;
  }

  .p-galleria-thumbnail-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .p-galleria-thumbnail-items-container {
    width: 100%;
  }

  .custom-galleria-footer {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;

    > button {
      background-color: transparent;
      color: #ffffff;
      border: 0 none;
      border-radius: 0;
      margin: 0.2rem 0;

      &.fullscreen-button {
        margin-left: auto;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .title-container {
    > span {
      font-size: 0.9rem;
      padding-left: 0.829rem;

      &.title {
        font-weight: bold;
      }
    }
  }
}
</style>
