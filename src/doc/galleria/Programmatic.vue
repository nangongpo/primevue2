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
<div style="padding: .5rem 0">
    <Button icon="pi pi-minus" @click="prev" class="p-button-secondary" />
    <Button icon="pi pi-plus" @click="next" class="p-button-secondary" style="margin-left: .5rem" />
</div>

<Galleria :value="images" :activeIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
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
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    },
    methods: {
        next() {
            this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;
        },
        prev() {
            this.activeIndex = (this.activeIndex === 0) ? 0 : this.images.length - 1;
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
