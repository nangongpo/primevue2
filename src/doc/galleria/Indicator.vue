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
<h3>Indicators with Click Event</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :showThumbnails="false" :showIndicators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Indicators with Hover Event</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Inside Content</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Positioned at Top</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="top">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Positioned at Left</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Positioned at Right</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="right">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
</Galleria>

<h3>Indicator Template</h3>
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px;" class="custom-indicator-galleria"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #indicator="{index}">
        <span style="color: #e9ecef; cursor: pointer">
            {{index + 1}}
        </span>
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
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => {
            this.images = data;
            this.images2 = data.slice(0, 5);
        });
    }
}
        `
      },
      baseCode3: {
        basic: `
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
        `
      },
    }
  }
}
</script>

<style>
</style>
