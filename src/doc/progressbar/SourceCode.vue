<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/prograssbar"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<h3>Dynamic</h3>
<ProgressBar :value="value1" />

<h3>Static</h3>
<ProgressBar :value="value2" :showValue="false" />

<h3>Indeterminate</h3>
<ProgressBar mode="indeterminate" style="height: .5em" />
        `
      },
      sourceCode2: {
        basic: `
export default {
	data() {
		return {
			value1: 0,
			value2: 50
		}
	},
	interval: null,
	methods: {
		startProgress() {
			this.interval = setInterval(() => {
				let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;
				if (newValue >= 100) {
					newValue = 100;
				}
				this.value1 = newValue;
			}, 2000);
		},
		endProgress() {
			clearInterval(this.interval);
			this.interval = null;
		}
	},
	mounted() {
		this.startProgress();
	},
	beforeDestroy() {
		this.endProgress();
	}
}
        `
      },
    }
  }
}
</script>
