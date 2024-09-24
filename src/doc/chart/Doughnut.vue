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
<Chart type="doughnut" :data="chartData" :options="chartOptions" />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			chartData: {
                labels: ['A','B','C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }
                ]
            }
		}
	}
}
        `
      }
    }
  }
}
</script>

<style>

</style>
