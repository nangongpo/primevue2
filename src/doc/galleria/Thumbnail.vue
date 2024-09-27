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
<h3>Positioned at Bottom</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Positioned at Left</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="left" style="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
        </div>
    </template>
</Galleria>

<h3>Positioned at Right</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="right" style="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
        </div>
    </template>
</Galleria>

<h3>Positioned at Top</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="top" style="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
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
            ],
            responsiveOptions2: [
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
    }
  }
}
</script>

<style>
</style>
