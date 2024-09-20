<template>
  <div class="doc-section-code">
    <div class="doc-section-code-buttons scalein animate-duration-300">
      <template v-if="code.data">
        <button
          v-tooltip.bottom="{
            value: 'View Data',
            class: 'doc-section-code-tooltip',
          }"
          type="button"
          @click="toggleCodeMode('data')"
          class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
          <i class="pi pi-database"></i>
        </button>
      </template>
      <button
        v-tooltip.bottom="{
          value: 'Copy Code',
          class: 'doc-section-code-tooltip',
        }"
        type="button"
        @click="copyCode"
        class="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center">
        <i class="pi pi-copy"></i>
      </button>
    </div>
    <div v-if="codeMode === 'basic' && importCode" key="basic_importCode">
      <pre v-code.script><code>{{ code.basic }}
</code></pre>
    </div>

    <div v-if="codeMode === 'basic' && !importCode && !importHTML" key="basic">
      <pre v-code><code>{{ code.basic }}
</code></pre>
    </div>

    <div v-if="codeMode === 'basic' && importHTML" key="html">
      <pre v-code><code v-html="code.basic"></code></pre>
    </div>

    <div v-if="codeMode !== 'basic'" :key="codeMode">
      <pre v-code><code>{{ code[codeMode] }}
</code></pre>
    </div>
  </div>
</template>

<script>
import { escapeHtml } from '@/utils'

export default {
  inheritAttrs: false,
  props: {
    code: {
      type: null,
      default: null
    },
    importCode: {
      type: Boolean,
      default: false
    },
    importHTML: {
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
      codeMode: 'basic'
    }
  },
  computed: {
    processedCode({ code, codeMode, importCode }) {
      if (codeMode === 'basic' && !importCode) {
        return escapeHtml(code[codeMode])
      }
      return code[codeMode]
    }
  },
  methods: {
    toggleCodeMode(content) {
      this.codeMode = this.codeMode === 'basic' ? content : 'basic'
    },
    async copyCode() {
      await navigator.clipboard.writeText(this.code[this.codeMode])
    }
  }
}
</script>
