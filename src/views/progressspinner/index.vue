<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>ProgressSpinner</h1>
        <p>ProgressSpinner is a process status indicator.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <h5>Basic</h5>
        <ProgressSpinner />

        <h5>Custom</h5>
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="#EEEEEE" animationDuration=".5s" />
      </div>
    </div>

    <ProgressSpinnerDoc />
  </div>
</template>

<script>
import ProgressSpinnerDoc from '@/doc/progressspinner/index.vue'

export default {
  components: {
    'ProgressSpinnerDoc': ProgressSpinnerDoc
  }
}
</script>
