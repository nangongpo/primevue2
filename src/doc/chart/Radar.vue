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
<Chart type="radar" :data="chartData" :options="chartOptions" />
        `
      },
      baseCode2: {
        basic: `
export default {
	data() {
		return {
			chartData: {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgba(179,181,198,0.2)',
						borderColor: 'rgba(179,181,198,1)',
						pointBackgroundColor: 'rgba(179,181,198,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(179,181,198,1)',
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: 'rgba(255,99,132,0.2)',
						borderColor: 'rgba(255,99,132,1)',
						pointBackgroundColor: 'rgba(255,99,132,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(255,99,132,1)',
						data: [28, 48, 40, 19, 96, 27, 100]
					}
				]
			},
			chartOptions: {
				plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        pointLabels: {
                            color: '#495057',
                        },
                        grid: {
                            color: '#ebedef',
                        },
                        angleLines: {
                            color: '#ebedef'
                        }
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
