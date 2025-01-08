<template>
  <div class="container">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <button @click="disabled = !disabled">toggle {{ disabled ? 'enabled' : 'disabled' }}</button>

    <Teleport to="#target" :disabled="disabled">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Custom Header</h3>
        </template>
      </Modal>
    </Teleport>

    <div id="target">
      <h1>I am Target</h1>
    </div>

    <p>🚀Open Devtools to see what is going on</p>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
      disabled: false,
    }
  },
}
</script>
