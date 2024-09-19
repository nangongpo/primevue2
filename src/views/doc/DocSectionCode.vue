<template>
  <div class="doc-section-code">
    <div class="doc-section-code-buttons scalein animate-duration-300">
      <template v-if="!hideToggleCode">
        <button
          v-tooltip.bottom="{
            value: 'Toggle Full Code',
            class: 'doc-section-code-tooltip'
          }"
          type="button"
          @click="toggleCodeMode('composition')"
          class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
          <i class="pi pi-code"></i>
        </button>
      </template>
      <template v-if="!hideToggleCode && code.data">
        <button
          v-tooltip.bottom="{
            value: 'View Data',
            class: 'doc-section-code-tooltip'
          }"
          type="button"
          @click="onToggleData"
          class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
          <i class="pi pi-database"></i>
        </button>
      </template>
      <button
        v-tooltip.bottom="{
          value: 'Copy Code',
          class: 'doc-section-code-tooltip'
        }"
        type="button"
        @click="copyCode"
        class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
        <i class="pi pi-copy"></i>
      </button>
    </div>

    <div>
      <template v-if="codeMode === 'basic' && importStyle">
        <pre v-code.css><code>{{ code.basic }}
</code></pre>
      </template>
      <template v-else>
        <template v-if="codeMode === 'basic' && importCode">
        <pre v-code.script><code>{{ code.basic }}
</code></pre>
        </template>

        <template v-if="codeMode === 'basic' && !importCode">
        <pre v-code><code>{{ code.basic }}
</code></pre>
        </template>
      </template>
      <template v-if="codeMode !== 'basic' && codeLang === 'data'">
        <pre v-code.json><code>{{ code.data }}
</code></pre>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    code: {
      type: null,
      default: null
    },
    hideToggleCode: {
      type: Boolean,
      default: false
    },
    importCode: {
      type: Boolean,
      default: false
    },
    importStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      codeMode: 'basic',
      codeLang: 'basic'
    }
  },
  methods: {
    toggleCodeMode(content) {
      this.codeMode = this.codeMode === 'basic' ? content : 'basic'
    },
    onToggleData() {
      this.toggleCodeMode('data')
      this.codeLang = 'data'
    },
    async copyCode() {
      await navigator.clipboard.writeText(this.code[this.codeLang])
    }
  }
}
</script>
