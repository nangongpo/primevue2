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
<Galleria ref="galleria" :value="images" :activeIndex.sync="activeIndex" :numVisible="5" style="max-width: 640px;" :class="galleriaClass"
    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true"
    :circular="true" :autoPlay="true" :transitionInterval="3000">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{'width': !fullScreen ? '100%' : '', 'display': !fullScreen ? 'block' : ''}]" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
        </div>
    </template>
    <template #footer>
        <div class="custom-galleria-footer">
            <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
            <span v-if="images" class="title-container">
                <span>{{activeIndex + 1}}/{{images.length}}</span>
                <span class="title">{{images[activeIndex].title}}</span>
                <span>{{images[activeIndex].alt}}</span>
            </span>
            <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
        </div>
    </template>
</Galleria>
        `
      },
      baseCode2: {
        basic: `
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
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
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    }
}
        `
      },
      baseCode3: {
        basic: `
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
        background-color: rgba(0, 0, 0, .9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: .2rem 0;

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
            font-size: .9rem;
            padding-left: .829rem;

            &.title {
                font-weight: bold;
            }
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
