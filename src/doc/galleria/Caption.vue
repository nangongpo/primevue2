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
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px">
    <template #item="{item}">
        <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="{item}">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block;" />
        </div>
    </template>
    <template #caption="{item}">
        <h4 style="margin-bottom: .5rem;">{{item.title}}</h4>
        <p>{{item.alt}}</p>
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
