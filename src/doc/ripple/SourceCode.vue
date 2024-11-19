<template>
  <div>
    <a
      href="https://github.com/nangongpo/primevue2/tree/main/src/views/ripple"
      class="btn-viewsource"
      target="_blank"
      rel="noopener noreferrer">
      <span>View on GitHub</span>
    </a>

    <DocSectionCode :code="sourceCode1" />
    <DocSectionCode :code="sourceCode2" importCode />
    <DocSectionCode :code="sourceCode3" importStyle />
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data() {
    return {
      sourceCode1: {
        basic: `
<div class="card-container flex">
    <div class="card primary-box p-ripple" v-ripple>Default</div>
    <div class="card styled-box-green p-ripple" v-ripple>Green</div>
    <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
    <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
</div>
        `
      },
      sourceCode2: {
        basic: `
export default {}
        `
      },
      sourceCode3: {
        basic: `
:deep(.card-container) {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        &.styled-box-green {
            .p-ink {
                background: rgba(#4baf50, 0.3);
            }
        }

        &.styled-box-orange {
            .p-ink {
                background: rgba(#ffc106, 0.3);
            }
        }

        &.styled-box-purple {
            .p-ink {
                background: rgba(#9c27b0, 0.3);
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
}
        `
      },
    }
  }
}
</script>
