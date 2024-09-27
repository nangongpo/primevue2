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
<h3>Item Navigators and Thumbnails</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"
    :showItemNavigators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>

<h3>Item Navigators without Thumbnails</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>

<h3>Item Navigators on Hover</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"
    :showItemNavigators="true" :showItemNavigatorsOnHover="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>

<h3>Item Navigators and Indicators</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"
    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
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
    }
  }
}
</script>

<style>
</style>
