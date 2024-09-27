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
<h3>With Thumbnails</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :visible.sync="displayBasic">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>

<Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />

<h3>Without Thumbnails</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayBasic2">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>

<Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" />

<h3>Custom Content</h3>
<Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayCustom">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>

<div v-if="images" class="grid" style="max-width: 400px;">
    <div v-for="(image, index) of images" class="col-3" :key="index">
        <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/>
    </div>
</div>
        `
      },
      baseCode2: {
        basic: `
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
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
            ],
            responsiveOptions2: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false,
            displayBasic2: false,
            displayCustom: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
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
