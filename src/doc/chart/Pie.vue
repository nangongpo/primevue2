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
<Chart type="pie" :data="chartData" :options="chartOptions" />
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
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D"
                        ]
					}
				]
			},
			chartOptions: {
				legend: {
                    labels: {
                        fontColor: '#495057'
                    }
                }
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
